'use client';

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ZONES, DEPARTEMENTEN, getZoneByDepartement } from '@/data/zones';
import type { ZoneId } from '@/lib/types';

const DEPT_GEOJSON_URL =
  'https://cdn.jsdelivr.net/gh/gregoiredavid/france-geojson@master/departements-version-simplifiee.geojson';

interface ClimateMapProps {
  onZoneSelect?: (zone: ZoneId, departementCode: string, departementNaam: string) => void;
  height?: string;
}

export default function ClimateMap({ onZoneSelect, height = '500px' }: ClimateMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const zoneColorExpression = [
      'match',
      ['get', 'code'],
      ...DEPARTEMENTEN.flatMap((d) => [d.code, ZONES[d.zone].kleur]),
      '#cccccc',
    ] as unknown as maplibregl.ExpressionSpecification;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {},
        layers: [
          {
            id: 'background',
            type: 'background',
            paint: { 'background-color': '#FBF8F3' },
          },
        ],
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      },
      center: [2.5, 46.5],
      zoom: 5,
      minZoom: 4,
      maxZoom: 8,
      attributionControl: false,
    });

    map.current.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
    map.current.addControl(
      new maplibregl.AttributionControl({ customAttribution: 'Bron: france-geojson, IGN' }),
      'bottom-right'
    );

    map.current.on('load', async () => {
      try {
        const res = await fetch(DEPT_GEOJSON_URL);
        const geojson = await res.json();

        // Enrich with zone info
        geojson.features = geojson.features.map((f: { properties: { code: string } & Record<string, unknown> } & Record<string, unknown>) => ({
          ...f,
          properties: {
            ...f.properties,
            zone: getZoneByDepartement(f.properties.code) ?? 'oceanique_alt',
          },
        }));

        map.current!.addSource('departements', {
          type: 'geojson',
          data: geojson,
          generateId: true,
        });

        map.current!.addLayer({
          id: 'dept-fill',
          type: 'fill',
          source: 'departements',
          paint: {
            'fill-color': zoneColorExpression,
            'fill-opacity': [
              'case',
              ['boolean', ['feature-state', 'hover'], false],
              0.85,
              ['boolean', ['feature-state', 'selected'], false],
              0.95,
              0.55,
            ],
          },
        });

        map.current!.addLayer({
          id: 'dept-line',
          type: 'line',
          source: 'departements',
          paint: {
            'line-color': '#FBF8F3',
            'line-width': [
              'case',
              ['boolean', ['feature-state', 'selected'], false],
              2.5,
              0.6,
            ],
          },
        });

        let hoveredId: string | null = null;
        let selectedId: string | null = null;

        map.current!.on('mousemove', 'dept-fill', (e) => {
          if (!e.features?.length) return;
          map.current!.getCanvas().style.cursor = 'pointer';
          const feature = e.features[0];
          const code = feature.properties?.code;
          if (hoveredId !== null) {
            map.current!.setFeatureState(
              { source: 'departements', id: hoveredId },
              { hover: false }
            );
          }
          hoveredId = feature.id as string;
          if (hoveredId !== null) {
            map.current!.setFeatureState(
              { source: 'departements', id: hoveredId },
              { hover: true }
            );
          }
          const zoneId = getZoneByDepartement(code);
          const zoneNaam = zoneId ? ZONES[zoneId].korteNaam : '—';
          const naam = feature.properties?.nom ?? code;

          map.current!.getCanvas().setAttribute('aria-label', `${naam} (${code}) — ${zoneNaam}`);
        });

        map.current!.on('mouseleave', 'dept-fill', () => {
          map.current!.getCanvas().style.cursor = '';
          if (hoveredId !== null) {
            map.current!.setFeatureState(
              { source: 'departements', id: hoveredId },
              { hover: false }
            );
          }
          hoveredId = null;
        });

        map.current!.on('click', 'dept-fill', (e) => {
          if (!e.features?.length) return;
          const feature = e.features[0];
          const code = feature.properties?.code as string;
          const naam = feature.properties?.nom as string;
          const zoneId = getZoneByDepartement(code);
          if (!zoneId) return;

          // Update selected state
          if (selectedId !== null) {
            map.current!.setFeatureState(
              { source: 'departements', id: selectedId },
              { selected: false }
            );
          }
          selectedId = feature.id as string;
          if (selectedId !== null) {
            map.current!.setFeatureState(
              { source: 'departements', id: selectedId },
              { selected: true }
            );
          }

          setSelectedDept(`${naam} (${code}) — ${ZONES[zoneId].naam}`);

          // Persist for other pages
          if (typeof window !== 'undefined') {
            localStorage.setItem('moestuin_zone', zoneId);
            localStorage.setItem('moestuin_dept', code);
            localStorage.setItem('moestuin_dept_naam', naam);
          }

          onZoneSelect?.(zoneId, code, naam);
        });
      } catch (err) {
        console.error('Kon departement-geometrie niet laden:', err);
      }
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [onZoneSelect]);

  return (
    <div className="relative">
      <div
        ref={mapContainer}
        style={{ height }}
        className="w-full rounded-sm border border-bordeaux-100"
        role="application"
        aria-label="Klimaatkaart van Frankrijk — kies een departement"
      />
      {selectedDept && (
        <div className="absolute top-3 left-3 bg-white/95 px-4 py-2 text-sm border border-bordeaux-100 rounded-sm shadow-sm">
          <span className="eyebrow block mb-1">Gekozen</span>
          {selectedDept}
        </div>
      )}
    </div>
  );
}

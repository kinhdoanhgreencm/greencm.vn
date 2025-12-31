'use client';

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  latitude?: number;
  longitude?: number;
  title?: string;
  height?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  latitude = 10.02978, 
  longitude = 105.76869,
  title = '59 Đường Số 10, KDC Diệu Hiền, Cái Răng, Cần Thơ',
  height = 'h-80'
}) => {
  useEffect(() => {
    // Chỉ chạy trên client
    if (typeof window === 'undefined') return;

    const mapElement = document.getElementById('gcm-map');
    if (!mapElement) return;

    // Initialize map
    const map = L.map('gcm-map').setView([latitude, longitude], 16);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icon
    const markerIcon = L.icon({
      iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDMyIDQwIj48cGF0aCBmaWxsPSIjMDBEMjZBIiBkPSJNMTYgMEMxMi42ODMgMCA5Ljk0OCAyLjczIDkuOTQ4IDYuMDQ2YzAgMi41MTcgMS41MDEgNS4xNDMgMi43NjkgNy4zMTJsMy4yODMgNS4zODhjLjE2LjI2Mi4xNjUuNTk5IDAgLjg2MUwxMS4wODQgMjljLS40ODMuODg0LS41NzIgMS45MTgtLjI0NiAyLjg5NUMxMS44NiAzMy4xMDMgMTMuNTIgMzUgMTYgMzVjMi40OCAw IDQuMTQtMS44OTcgNS4xNjItNC4xMDUuMzI2LS45NzcuMjM3LTIuMDExLS4yNDYtMi44OTVsLTQuOTE2LTguMzgyYzAgMCAuMTE0LS4xNjIuMjMxLS4zNzkgMS4yNjgtMi4xNjkgMi43NjktNC43OTUgMi43NjktNy4zMTJDMjIuMDUyIDIuNzMgMTkuMzE3IDAgMTYgMHptMCA1LjQxMWMxLjMxMyAwIDIuMzc1IDEuMDYyIDIuMzc1IDIuMzc1UzE3LjMxMyAxMCAxNiAxMHMtMi4zNzUtMS4wNjItMi4zNzUtMi4zNzVTMTQuNjg3IDUuNDExIDE2IDUuNDExeiIvPjwvc3ZnPg==',
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -40],
    });

    // Add marker
    L.marker([latitude, longitude], { icon: markerIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: Arial, sans-serif; width: 250px;">
          <h4 style="margin: 0 0 8px 0; color: #333; font-size: 16px;">📍 GCM (GreenCM)</h4>
          <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">${title}</p>
          <div style="border-top: 1px solid #ddd; padding-top: 10px;">
            <p style="margin: 5px 0; color: #666; font-size: 13px;">
              <strong>☎️ Hotline:</strong> <a href="tel:0941498894" style="color: #00D26A; text-decoration: none;">0941 498 894</a>
            </p>
            <p style="margin: 5px 0; color: #666; font-size: 13px;">
              <strong>📧 Email:</strong> <a href="mailto:kinhdoanhgreencm@gmail.com" style="color: #00D26A; text-decoration: none;">kinhdoanhgreencm@gmail.com</a>
            </p>
          </div>
        </div>
      `)
      .openPopup();

    // Cleanup
    return () => {
      map.remove();
    };
  }, [latitude, longitude, title]);

  return (
    <div id="gcm-map" className={`${height} rounded-lg overflow-hidden shadow-md w-full relative z-0`} />
  );
};

export default MapComponent;

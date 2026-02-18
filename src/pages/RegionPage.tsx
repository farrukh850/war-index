import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import { worldMarkers } from '../data/worldMarkers';
import { getRegionMarkers } from '../data/regionMarkersMap';
import RegionView from '../components/RegionView.tsx';
import PredictionMarkets from "../components/PredictionMarketIndexes.tsx";
import type { WorldMarker } from '../types';

function RegionPage(): React.ReactElement {
    const [activeMarker, setActiveMarker] = useState<WorldMarker | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const { regionSlug } = useParams<{ regionSlug: string }>();
    const navigate = useNavigate();

    // Find the selected region based on the URL slug parameter
    const selectedRegion = worldMarkers.find(marker => marker.slug === regionSlug);

    // Get region-specific markers using the region ID
    const regionMarkers = selectedRegion ? getRegionMarkers(selectedRegion.id) : [];

    const handleBack = () => {
        navigate('/');
    };

    // If region not found, redirect to home
    if (!selectedRegion) {
        navigate('/');
        return <></>;
    }

    return (
        <Layout>
            <RegionView
                markers={regionMarkers}
                activeMarker={activeMarker}
                setActiveMarker={setActiveMarker}
                popupRef={popupRef}
                selectedRegion={selectedRegion}
                onBack={handleBack}
            />
            <PredictionMarkets markers={regionMarkers} />
        </Layout>
    );
}

export default RegionPage;



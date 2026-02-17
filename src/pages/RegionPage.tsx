import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import { worldMarkers } from '../data/worldMarkers';
import RegionView from '../components/RegionView.tsx';
import PredictionMarkets from "../components/PredictionMarketIndexes.tsx";
import type { WorldMarker } from '../types';

function RegionPage(): React.ReactElement {
    const [activeMarker, setActiveMarker] = useState<WorldMarker | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const { regionId } = useParams<{ regionId: string }>();
    const navigate = useNavigate();

    // Find the selected region based on the URL parameter
    const selectedRegion = worldMarkers.find(marker => marker.id === Number(regionId));

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
                markers={worldMarkers}
                activeMarker={activeMarker}
                setActiveMarker={setActiveMarker}
                popupRef={popupRef}
                selectedRegion={selectedRegion}
                onBack={handleBack}
            />
            <PredictionMarkets />
        </Layout>
    );
}

export default RegionPage;



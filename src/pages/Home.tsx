import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import { worldMarkers } from '../data/worldMarkers';
import WorldConflicts from '../components/WorldConflictIndex.tsx';
import PredictionMarkets from "../components/PredictionMarketIndexes.tsx";
import type { WorldMarker } from '../types';

function Home(): React.ReactElement {
    const [activeMarker, setActiveMarker] = useState<WorldMarker | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleMarkerClick = (marker: WorldMarker) => {
        navigate(`/region/${marker.id}`);
    };

    return (
        <Layout>
            <WorldConflicts
                markers={worldMarkers}
                activeMarker={activeMarker}
                setActiveMarker={setActiveMarker}
                popupRef={popupRef}
                onMarkerClick={handleMarkerClick}
            />
            <PredictionMarkets />
        </Layout>
    );
}

export default Home;



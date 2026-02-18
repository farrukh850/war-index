import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import { worldMarkers } from '../data/worldMarkers';
import WorldConflicts from '../components/WorldConflictIndex.tsx';
import PredictionMarkets from "../components/PredictionMarketIndexes.tsx";
import BottomTabs from "../components/BottomTabs.tsx";
import type { WorldMarker } from '../types';
import IndexQuestions from "../components/IndexQuestions.tsx";

type TabType = 'all' | 'regions' | 'questions';

function Home(): React.ReactElement {
    const [activeMarker, setActiveMarker] = useState<WorldMarker | null>(null);
    const [activeTab, setActiveTab] = useState<TabType>('all');
    const popupRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleMarkerClick = (marker: WorldMarker) => {
        navigate(`/region/${marker.slug}`);
    };

    const handleTabChange = (tab: TabType) => {
        setActiveTab(tab);
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
            <BottomTabs activeTab={activeTab} onTabChange={handleTabChange} />

            {activeTab === 'questions' ? (
                <IndexQuestions />
            ) : (
                <PredictionMarkets markers={worldMarkers} />
            )}
        </Layout>
    );
}

export default Home;



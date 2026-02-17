import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import { worldMarkers } from './data/worldMarkers';
import WorldConflicts from './components/WorldConflictIndex.tsx';
import RegionView from './components/RegionView.tsx';
import PredictionMarkets from "./components/PredictionMarketIndexes.tsx";
import type { WorldMarker } from './types';

function Home(): React.ReactElement {
    const [activeMarker, setActiveMarker] = useState<WorldMarker | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<WorldMarker | null>(null);
    const popupRef = useRef<HTMLDivElement>(null);

    const handleMarkerClick = (marker: WorldMarker) => {
        setSelectedRegion(marker);
    };

    const handleBackToWorld = () => {
        setSelectedRegion(null);
    };

    return (
        <div className="bg-bg-dark-primary min-h-screen">
            <div className="max-w-[1240px] mx-auto relative border-dashed-spaced-vertical-both text-text-secondary">
                <Navbar />
                {!selectedRegion ? (
                    <>
                        <WorldConflicts
                            markers={worldMarkers}
                            activeMarker={activeMarker}
                            setActiveMarker={setActiveMarker}
                            popupRef={popupRef}
                            onMarkerClick={handleMarkerClick}
                        />
                        <PredictionMarkets />
                    </>
                ) : (
                    <>
                        <RegionView
                            markers={worldMarkers}
                            activeMarker={activeMarker}
                            setActiveMarker={setActiveMarker}
                            popupRef={popupRef}
                            selectedRegion={selectedRegion}
                            onBack={handleBackToWorld}
                        />
                        <PredictionMarkets />
                    </>
                )}
                <Footer />
            </div>
        </div>
    );
}

export default Home;



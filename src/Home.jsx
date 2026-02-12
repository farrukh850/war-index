import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar'
import { worldMarkers } from './data/worldMarkers'
import { asiaMarkers } from './data/AsiaMarkers'
import PMIScoreChart from './components/PMI-score-chart';
import PMICard from './components/PMICard';
import RegionTabs from './components/RegionTabs';
import WorldContent from './components/regions/WorldContent';
import AsiaContent from './components/regions/AsiaContent';

const REGIONS = [
    'World',
    'North America',
    'Central America & Caribbean',
    'South America',
    'Europe',
    'Middle East',
    'Africa',
    'Asia',
    'Australia & Oceania'
];
function Home() {
    const [activeRegion, setActiveRegion] = useState('World');
    const [activeMarker, setActiveMarker] = useState(null);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                if (!event.target.classList.contains('marker-button')) {
                    setActiveMarker(null);
                }
            }
        };

        if (activeMarker) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeMarker]);

    const renderContent = () => {
        switch (activeRegion) {
            case 'World':
                return <WorldContent markers={worldMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            case 'North America':
                return <AsiaContent markers={worldMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            case 'Central America & Caribbean':
                return <AsiaContent markers={asiaMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            case 'South America':
                return <AsiaContent markers={asiaMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            case 'Europe':
                return <AsiaContent markers={asiaMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            case 'Middle East':
                return <AsiaContent markers={asiaMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            case 'Africa':
                return <AsiaContent markers={asiaMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            case 'Asia':
                return <AsiaContent markers={asiaMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            case 'Australia & Oceania':
                return <AsiaContent markers={asiaMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
            default:
                return <WorldContent markers={worldMarkers} activeMarker={activeMarker} setActiveMarker={setActiveMarker} popupRef={popupRef} />;
        }
    };

    return (
    <div className="bg-dark-primary min-h-screen">
        <Navbar />
        <div className="max-w-[1440px] mx-auto px-3 xl:px-0">
            <RegionTabs
                regions={REGIONS}
                activeRegion={activeRegion}
                onRegionChange={setActiveRegion}
            />
            {renderContent()}
            <PMIScoreChart />
            <div className="flex flex-col gap-6 pb-16">
                <div className="flex flex-col gap-0.5 mb-0 lg:mb-11">
                    <h3 className="text-2xl text-text-primary font-semibold">Prediction Market Indexes</h3>
                    <p className="text-base text-text-tertiary">A summary or description can go here</p>
                </div>
                <PMICard pmiScore={73} title="Ukraine Long-Range Missiles Index" tags={['Europe', 'Elections', 'Ukraine', 'Ukraine']} contractCount={38} scoreBgColor="#E04F16" onBookmark={() => console.log('Bookmarked')} />
                <PMICard pmiScore={63} title="North Korea Nuclear Test Index" tags={['North Korea', 'Nuclear', 'Asia']} contractCount={38} scoreBgColor="#F38744" onBookmark={() => console.log('Bookmarked')} />
                <PMICard pmiScore={73} title="Israel-Iran Direct Conflict Index" tags={['Israel', 'Iran', 'Middle East', 'War']} contractCount={38} scoreBgColor="#FDEAD7" onBookmark={() => console.log('Bookmarked')} />
                <PMICard pmiScore={73} title="Russia-NATO Escalation Index" tags={['Russia', 'NATO', 'Europe', 'Escalation']} contractCount={38} scoreBgColor="#F9DBAF" onBookmark={() => console.log('Bookmarked')} />
            </div>
        </div>
    </div>
    )
}

export default Home

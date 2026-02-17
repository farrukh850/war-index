import React, { useState } from 'react';
import PMICardChart from "./PMI-score-chart.tsx";
import type { WorldMarker } from '../types';

const hexToRgba = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

interface WorldConflictIndexProps {
    markers: WorldMarker[];
    activeMarker: WorldMarker | null;
    setActiveMarker: (marker: WorldMarker | null) => void;
    popupRef: React.RefObject<HTMLDivElement>;
    onMarkerClick?: (marker: WorldMarker) => void;
}

export default function WorldConflictIndex({ markers, activeMarker, setActiveMarker, popupRef, onMarkerClick }: WorldConflictIndexProps): React.ReactElement {
    const [activeView, setActiveView] = useState<'map' | 'graph'>('map');

    return (
        <div className="py-16 px-12 border-dashed-spaced relative">
            <h1 className="text-text-primary font-semibold text-3xl mb-3">World Conflict Index</h1>
            <p className="text-base text-text-tertiary leading-5 font-normal">An aggregated, data-driven estimate of the likelihood of significant geopolitical or military conflict across the world derived from active prediction market contracts and exchange signals.</p>
            <div className="grid grid-cols-12 gap-5 lg:gap-11 justify-between items-start mt-11">
                <div className="col-span-12 lg:col-span-3">
                    <div className="grid grid-cols-12 gap-4 mt-5 lg:mt-0 w-full lg:max-w-[367px]">
                        <div className="col-span-12 lg:col-span-12 flex flex-col text-center py-8 px-6 rounded-2xl bg-utility-orange items-start justify-center">
                            <h4 className="text-3xl font-bold text-dark-primary">93</h4>
                            <div className="flex items-center gap-1">
                                <p className="text-base text-dark-primary font-medium">PMI Score</p>
                                <img src="/images/info-circle.svg" alt="Info Icon"/>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-12 flex flex-col text-center py-8 px-6 rounded-2xl bg-bg-secondary items-start justify-center border border-border-tertiary">
                            <h4 className="text-3xl font-bold text-text-secondary">897</h4>
                            <p className="text-base text-text-tertiary font-medium">Component Contracts</p>
                        </div>
                        <div className="col-span-6 lg:col-span-12 flex flex-col text-center py-8 px-6 rounded-2xl bg-bg-secondary items-start justify-center border border-border-tertiary">
                            <div className="flex items-center gap-2">
                                <h4 className="text-3xl font-bold text-text-secondary">12</h4>
                                <div className="flex items-center">
                                    <img src="/images/exchange-icon1.svg" className="-mx-1" alt="Icon"/>
                                    <img src="/images/exchange-icon2.svg" className="-mx-1" alt="Icon"/>
                                    <img src="/images/exchange-icon3.svg" className="-mx-1" alt="Icon"/>
                                    <img src="/images/exchange-icon4.svg" className="-mx-1" alt="Icon"/>
                                </div>
                            </div>
                            <p className="text-base text-text-tertiary font-medium">Component Exchanges</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-9 flex flex-col gap-6 items-end">
                    <div className="flex justify-end items-center border border-border-primary shadow-xs rounded-md overflow-hidden">
                        <button
                            onClick={() => setActiveView('map')}
                            className={`py-2.5 px-4 border-r border-border-primary cursor-pointer font-semibold ${
                                activeView === 'map' ? 'bg-bg-active text-bg-primary-alt' : 'text-bg-primary-alt'
                            }`}
                        >
                            Map
                        </button>
                        <button
                            onClick={() => setActiveView('graph')}
                            className={`py-2.5 cursor-pointer px-4 font-semibold ${
                                activeView === 'graph' ? 'bg-bg-active text-bg-primary-alt' : 'text-bg-primary-alt'
                            }`}
                        >
                            14-Day Graph
                        </button>
                    </div>
                    {activeView === 'map' && (
                        <div className="relative animate-fadeIn">
                            <img src="/images/map.png" alt="Map" className="w-full"/>
                            {markers.map((marker: WorldMarker) => (
                                <button
                                    key={marker.id}
                                    className="w-1 h-1 md:w-2.5 md:h-2.5 rounded-full absolute animate-pulse-glow cursor-pointer marker-button"
                                    style={{
                                        top: marker.top,
                                        left: marker.left,
                                        backgroundColor: marker.hotspotColor,
                                        '--glow-color-start': hexToRgba(marker.hotspotColor, 0.05),
                                        '--glow-color-mid': hexToRgba(marker.hotspotColor, 0.2),
                                        '--glow-color-end': hexToRgba(marker.hotspotColor, 0.05),
                                    } as React.CSSProperties}
                                    onClick={() => onMarkerClick?.(marker)}
                                    onMouseEnter={() => setActiveMarker(marker)}
                                    onMouseLeave={() => setActiveMarker(null)}
                                    aria-label="Marker"
                                />
                            ))}
                            {activeMarker && (
                                <div
                                    ref={popupRef}
                                    className="absolute  z-10 shadow-lg transition-all duration-300 ease-in-out transform opacity-0 animate-popup py-3 px-4 bg-bg-dark-primary rounded-lg border border-black/10 flex flex-col gap-2 items-center justify-center max-w-35 w-full text-center"
                                    style={{
                                        top: `calc(${activeMarker.top} - 12px)`,
                                        left: `calc(${activeMarker.left} + 0px)`,
                                        transform: 'translate(0, -100%)'
                                    }}
                                    onMouseEnter={() => setActiveMarker(activeMarker)}
                                    onMouseLeave={() => setActiveMarker(null)}
                                >
                                    <h2 className="font-semibold text-gray-900 w-10 h-8 rounded-lg bg-utility-orange flex items-center justify-center text-lg">{activeMarker.number}</h2>
                                    <h4 className="text-sm text-text-primary font-semibold">{activeMarker.title}</h4>
                                </div>
                            )}
                        </div>
                    )}
                    {activeView === 'graph' && (
                        <div className="w-full animate-fadeIn">
                            <PMICardChart/>
                        </div>
                    )}
                </div>
            </div>
            <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -left-[7px] -bottom-2 z-10"/>
            <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -right-[7px] -bottom-2 z-10"/>
        </div>
    );
}
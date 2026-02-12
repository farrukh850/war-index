import React from 'react';
const WorldContent = ({ markers, activeMarker, setActiveMarker, popupRef }) => {
    return (
        <div className="grid grid-cols-12 gap-11 justify-between pb-11">
            <div className="col-span-9">
                <div className="flex flex-col gap-0.5 mb-11">
                    <h3 className="text-2xl text-text-primary font-semibold">World Conflict Index</h3>
                    <p className="text-base text-text-tertiary">A summary or description can go here</p>
                </div>
                <div className="relative">
                    <img src="/images/map.svg" alt="Map"/>
                    {markers.map(marker => (
                        <button
                            key={marker.id}
                            className="w-2.5 h-2.5 rounded-full bg-utility-orange absolute animate-pulse-glow cursor-pointer marker-button"
                            style={{ top: marker.top, left: marker.left }}
                            onClick={() => setActiveMarker(marker)}
                            aria-label="Marker"
                        />
                    ))}
                    {activeMarker && (
                        <div
                            ref={popupRef}
                            className="absolute  z-10 shadow-lg transition-all duration-300 ease-in-out transform opacity-0 animate-popup py-3 px-4 bg-bg-primary-alt rounded-lg border border-bg-active flex flex-col gap-2 items-center justify-center max-w-35 w-full text-center"
                            style={{
                                top: `calc(${activeMarker.top} - 12px)`,
                                left: `calc(${activeMarker.left} + 70px)`,
                                transform: 'translate(0, -100%)'
                            }}
                        >
                            <h2 className="font-semibold text-gray-900 w-10 h-8 rounded-lg bg-[#F9DBAF] flex items-center justify-center">{activeMarker.number}</h2>
                            <h4 className="text-sm text-text-primary font-semibold">{activeMarker.title}</h4>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-span-3">
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-bg-active">Powered by</p>
                    <img src="/images/micah.svg" className="w-30" alt="Micah"/>
                </div>
                <div className="flex flex-col gap-4 mt-11 max-w-[367px]">
                    <div className="flex flex-col text-center p-3 rounded-2xl bg-bg-red items-center justify-center">
                        <h4 className="text-[40px] font-bold text-dark-primary">93</h4>
                        <div className="flex items-center gap-1">
                            <p className="text-base text-dark-primary font-medium">PMI Score</p>
                            <img src="/images/info-circle.svg" alt="Info Icon"/>
                        </div>
                    </div>
                    <div className="flex flex-col text-center p-3 rounded-2xl bg-transparent items-center justify-center border border-utility-gray">
                        <h4 className="text-[40px] font-bold text-text-secondary">897</h4>
                        <p className="text-base text-text-tertiary font-medium">Component Contracts</p>
                    </div>
                    <div className="flex flex-col text-center p-3 rounded-2xl bg-transparent items-center justify-center border border-utility-gray">
                        <h4 className="text-[40px] font-bold text-text-secondary">12</h4>
                        <p className="text-base text-text-tertiary font-medium">Component Exchanges</p>
                    </div>
                    <div className="flex flex-col gap-2 text-center p-3 rounded-2xl bg-transparent items-center justify-center border border-utility-gray">
                        <p className="text-base text-text-tertiary font-medium">Top 5 Tags</p>
                        <div className="flex items-center gap-2 flex-wrap justify-center">
                            <span className="py-1 px-2 text-sm text-text-secondary font-medium border border-border-primary rounded-md">Europe</span>
                            <span className="py-1 px-2 text-sm text-text-secondary font-medium border border-border-primary rounded-md">Elections</span>
                            <span className="py-1 px-2 text-sm text-text-secondary font-medium border border-border-primary rounded-md">Ukraine</span>
                            <span className="py-1 px-2 text-sm text-text-secondary font-medium border border-border-primary rounded-md">Ukraine</span>
                            <span className="py-1 px-2 text-sm text-text-secondary font-medium border border-border-primary rounded-md">Europe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldContent;

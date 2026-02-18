import React from 'react';
import type { WorldMarker } from '../types';
import { Link } from "react-router-dom";
interface PMICardProps {
    markers: WorldMarker[];
}

function PMICard({ markers }: PMICardProps): React.ReactElement {
    return (
        <div className="grid grid-cols-12 gap-6">
            {markers.map((marker: WorldMarker) => (
                <Link
                    key={marker.id}
                    to={`/region/${marker.slug}`}
                    className="col-span-12 grid grid-cols-12 rounded-md bg-bg-dark-primary border border-border-tertiary transition-all duration-300 hover:bg-gradient-to-b hover:from-[#F2F7F9] hover:to-[#97B9C9]"
                >
                    {marker.mapImage && (
                        <div className="col-span-3">
                            <div className="w-full h-[265px]">
                                <img src={marker.mapImage} alt="Map Image" className="w-full h-full object-contain object-center" />
                            </div>
                        </div>
                    )}
                    <div className={marker.mapImage ? "col-span-9 py-10 px-8 flex flex-col gap-6" : "col-span-12 py-10 px-8 flex flex-col gap-6"}>
                        {/* PMI Score and Share Section */}
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <span
                                    className="py-1 px-4.5 rounded-lg leading-7 text-lg text-black font-semibold"
                                    style={{ backgroundColor: marker.hotspotColor }}
                                >
                                    {marker.number} PMI Score
                                </span>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        <img src="/images/exchange-icon1.svg" className="-mx-1" alt="Icon"/>
                                        <img src="/images/exchange-icon2.svg" className="-mx-1" alt="Icon"/>
                                        <img src="/images/exchange-icon3.svg" className="-mx-1" alt="Icon"/>
                                        <img src="/images/exchange-icon4.svg" className="-mx-1" alt="Icon"/>
                                    </div>
                                    <p className="text-base text-text-tertiary font-semibold">from 338 Contracts</p>
                                    <button className="flex items-center gap-1.5 w-25 h-11 border border-border-primary rounded-lg justify-center ms-3 cursor-pointer">
                                        <img src="/images/share.svg" alt="Share"/>
                                        <p className="text-base text-text-secondary font-semibold">Share</p>
                                    </button>
                                </div>
                            </div>
                            <h4 className="text-xl font-semibold text-text-primary mt-4">{marker.title}</h4>
                            <p className="text-base text-text-tertiary leading-6">{marker.description}</p>
                            <div className="flex items-center gap-1 mt-3">
                                {marker.tags.map((tag: string, index: number) => (
                                    <button
                                        key={index}
                                        className="py-1 px-2 bg-bg-dark-primary border border-border-primary rounded-md text-sm text-text-secondary hover:bg-border-primary transition-all duration-300 hover:text-white cursor-pointer"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PMICard;

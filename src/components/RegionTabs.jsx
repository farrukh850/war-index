import React from 'react';

const RegionTabs = ({ regions, activeRegion, onRegionChange }) => {
    return (
        <>
            {/* Mobile Select Dropdown */}
            <div className="lg:hidden mt-10 lg:mt-8 mb-9 lg:mb-11">
                <select
                    value={activeRegion}
                    onChange={(e) => onRegionChange(e.target.value)}
                    className="w-full py-3 px-4 text-base text-text-secondary font-semibold rounded-lg border border-bg-active bg-[#0E161B] cursor-pointer focus:outline-none focus:border-white transition duration-300"
                >
                    {regions.map((region) => (
                        <option key={region} value={region} className="bg-dark-primary text-text-secondary">
                            {region}
                        </option>
                    ))}
                </select>
            </div>

            {/* Desktop Button Tabs */}
            <div className="hidden lg:inline-flex items-center gap-2 p-1 border border-bg-active bg-dark-primary rounded-lg mt-8 mb-11">
                {regions.map((region) => (
                    <button
                        aria-label="Region"
                        key={region}
                        onClick={() => onRegionChange(region)}
                        className={`py-2 px-2 xl:px-3.5 text-base font-semibold rounded-md cursor-pointer transition duration-300 ${
                            activeRegion === region
                                ? 'bg-bg-primary-alt text-text-secondary'
                                : 'bg-transparent hover:bg-bg-primary-alt text-text-tertiary'
                        }`}
                    >
                        {region}
                    </button>
                ))}
            </div>
        </>
    );
};

export default RegionTabs;

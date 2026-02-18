import React from "react";

type TabType = 'all' | 'regions' | 'questions';

interface BottomTabsProps {
    activeTab: TabType;
    onTabChange: (tab: TabType) => void;
}

function BottomTabs({ activeTab, onTabChange }: BottomTabsProps): React.ReactElement {
    return (
        <div className="flex justify-center mt-10">
            <div className="border border-border-primary rounded-lg inline-flex justify-center items-center overflow-hidden">
                <button
                    onClick={() => onTabChange('all')}
                    className={`text-base py-1 px-3 border-r border-border-primary cursor-pointer transition-colors ${
                        activeTab === 'all' ? 'bg-dark-primary text-white' : 'text-dark-primary hover:bg-gray-100'
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => onTabChange('regions')}
                    className={`text-base py-1 px-3 border-r border-border-primary cursor-pointer transition-colors ${
                        activeTab === 'regions' ? 'bg-dark-primary text-white' : 'text-dark-primary hover:bg-gray-100'
                    }`}
                >
                    Regions
                </button>
                <button
                    onClick={() => onTabChange('questions')}
                    className={`text-base py-1 px-3 cursor-pointer transition-colors ${
                        activeTab === 'questions' ? 'bg-dark-primary text-white' : 'text-dark-primary hover:bg-gray-100'
                    }`}
                >
                    Questions
                </button>
            </div>
        </div>
    )
}

export default BottomTabs

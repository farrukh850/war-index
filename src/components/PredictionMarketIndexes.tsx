import React from 'react';
import PMICard from "./PMICard.tsx";

export default function PredictionMarkets(): React.ReactElement {
    return (
        <div className="p-12 border-dashed-spaced relative">
            <div className="flex flex-col mb-6 gap-1">
                <h3 className="text-2xl text-text-primary leading-8 font-semibold">Prediction Market Indexes</h3>
                <p className="text-base leading-5 text-text-tertiary">A summary or description can go here</p>
            </div>
            <PMICard />
            <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -left-[7px] -bottom-2 z-10"/>
            <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -right-[7px] -bottom-2 z-10"/>
        </div>
        );
}
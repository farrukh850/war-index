import React from 'react';
import PMICard from "./PMICard.tsx";
import type { WorldMarker } from '../types';

interface PredictionMarketsProps {
    markers: WorldMarker[];
}

export default function PredictionMarkets({ markers }: PredictionMarketsProps): React.ReactElement {
    return (
        <div className="p-12 border-dashed-spaced relative">
            <div className="flex flex-col mb-6 gap-1">
                <h3 className="text-2xl text-text-primary leading-8 font-semibold">Prediction Market Indexes</h3>
                <p className="text-base leading-5 text-text-tertiary">A summary or description can go here</p>
            </div>
            <PMICard markers={markers} />
            <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -left-[7px] -bottom-2 z-10"/>
            <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -right-[7px] -bottom-2 z-10"/>
        </div>
        );
}
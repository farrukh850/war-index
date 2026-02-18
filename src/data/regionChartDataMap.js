import { americasChartData } from './chartData/americasChartData';
import { europeChartData } from './chartData/europeChartData';
import { africaChartData } from './chartData/africaChartData';
import { asiaChartData } from './chartData/asiaChartData';
import { middleEastChartData } from './chartData/middleEastChartData';
import { oceaniaChartData } from './chartData/oceaniaChartData';
import { worldChartData } from './chartData/worldChartData';

// Map region IDs to their respective chart data
export const getRegionChartData = (regionId) => {
    const chartDataMap = {
        1: americasChartData,     // Americas Conflict Index
        2: europeChartData,       // Europe Conflict Index
        3: africaChartData,       // Africa Conflict Index
        4: asiaChartData,         // Asia Conflict Index
        5: middleEastChartData,   // Middle East Conflict Index
        6: oceaniaChartData,      // Oceania Conflict Index
        'world': worldChartData   // World Conflict Index
    };

    return chartDataMap[regionId] || worldChartData;
};



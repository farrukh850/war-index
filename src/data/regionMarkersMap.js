import { americasMarkers } from './americasMarkers';
import { europeMarkers } from './europeMarkers';
import { africaMarkers } from './africaMarkers';
import { asiaMarkers } from './asiaMarkers';
import { middleEastMarkers } from './middleEastMarkers';
import { oceaniaMarkers } from './oceaniaMarkers';

// Map region IDs to their respective marker data
export const getRegionMarkers = (regionId) => {
    const markerMap = {
        1: americasMarkers,     // Americas Conflict Index
        2: europeMarkers,       // Europe Conflict Index
        3: africaMarkers,       // Africa Conflict Index
        4: asiaMarkers,         // Asia Conflict Index
        5: middleEastMarkers,   // Middle East Conflict Index
        6: oceaniaMarkers       // Oceania Conflict Index
    };

    return markerMap[regionId] || [];
};


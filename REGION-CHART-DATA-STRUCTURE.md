# Region-Specific Chart Data Structure

## Overview
Each region now has its own unique PMI Score chart data that displays when viewing the 14-Day Graph for that region.

## Chart Data Files

### Individual Region Chart Data Files:

All chart data files are organized in the `src/data/chartData/` directory:

1. **Americas Chart Data**
   - File: `src/data/chartData/americasChartData.js`
   - PMI Score Range: 35 → 82 (Moderate to High)
   - Region ID: 1

2. **Europe Chart Data**
   - File: `src/data/chartData/europeChartData.js`
   - PMI Score Range: 70 → 100 (High to Critical)
   - Region ID: 2

3. **Africa Chart Data**
   - File: `src/data/chartData/africaChartData.js`
   - PMI Score Range: 50 → 89 (Moderate to High)
   - Region ID: 3

4. **Asia Chart Data**
   - File: `src/data/chartData/asiaChartData.js`
   - PMI Score Range: 65 → 99 (High to Critical)
   - Region ID: 4

5. **Middle East Chart Data**
   - File: `src/data/chartData/middleEastChartData.js`
   - PMI Score Range: 75 → 100 (Very High to Critical)
   - Region ID: 5

6. **Oceania Chart Data**
   - File: `src/data/chartData/oceaniaChartData.js`
   - PMI Score Range: 25 → 64 (Low to Moderate)
   - Region ID: 6

7. **World Chart Data**
   - File: `src/data/chartData/worldChartData.js`
   - PMI Score Range: 40 → 100 (Moderate to Critical)
   - Used for: Home page World Conflict Index

## Helper File

**File:** `src/data/regionChartDataMap.js`

Maps region IDs to their respective chart data from the `chartData/` subdirectory:

```javascript
import { americasChartData } from './chartData/americasChartData';
import { europeChartData } from './chartData/europeChartData';
// ... other imports

export const getRegionChartData = (regionId) => {
    const chartDataMap = {
        1: americasChartData,
        2: europeChartData,
        // ... other mappings
    };
    return chartDataMap[regionId] || worldChartData;
};
```

### Usage Examples:

```javascript
// Get Americas chart data
const americasData = getRegionChartData(1);

// Get Europe chart data
const europeData = getRegionChartData(2);

// Get World chart data
const worldData = getRegionChartData('world');
```

## Component Integration

### PMI-score-chart.tsx
Updated to accept `data` as a prop instead of using hardcoded data:

```typescript
interface IndexGraphProps {
    data?: DataPoint[];
}

export default function IndexGraph({ data = [] }: IndexGraphProps)
```

### WorldConflictIndex.tsx (Home Page)
Uses world chart data:

```typescript
import { getRegionChartData } from '../data/regionChartDataMap';

const chartData = getRegionChartData('world');

<PMICardChart data={chartData}/>
```

### RegionView.tsx (Individual Region Pages)
Uses region-specific chart data based on selectedRegion.id:

```typescript
import { getRegionChartData } from '../data/regionChartDataMap';

const chartData = getRegionChartData(selectedRegion.id);

<PMICardChart data={chartData}/>
```

## Data Structure

Each chart data file exports an array of data points:

```javascript
export const regionChartData = [
    { month: "March 01, 2026", value: 40 },
    { month: "March 02, 2026", value: 42 },
    // ... 30 data points total (one per day)
];
```

### Data Point Format:
```typescript
interface DataPoint {
    month: string;  // Format: "Month DD, YYYY"
    value: number;  // PMI Score (0-100)
}
```

## Chart Features

- **30 Data Points**: Each region has 30 days of historical PMI score data
- **Date Range**: March 1-30, 2026
- **X-Axis Ticks**: Shows only March 01, March 07, and March 14 for clean visualization
- **Y-Axis Range**: 0-100 with ticks at 0, 20, 40, 60, 80, 100
- **Highlighted Last Point**: Orange dot on the most recent data point
- **Interactive Tooltip**: Hover to see exact PMI score and date
- **Smooth Animation**: Fade-in transition when switching between Map and Graph views

## Conflict Intensity by Region

Based on the final PMI scores (March 30, 2026):

1. **🔴 Critical (90-100)**
   - Europe: 100
   - Middle East: 100

2. **🟠 Very High (80-89)**
   - Africa: 89
   - Americas: 82

3. **🟡 High (70-79)**
   - Asia: 99 (actually Critical)

4. **🟢 Moderate-Low (Below 70)**
   - Oceania: 64

5. **🌍 World Average**
   - World: 100 (aggregate)

## How to Update Chart Data

To update chart data for a specific region:

1. Open the region's chart data file in the chartData directory (e.g., `src/data/chartData/americasChartData.js`)
2. Modify the `value` fields for the dates you want to change
3. Keep the date format consistent: `"Month DD, YYYY"`
4. Ensure values are between 0-100
5. The chart will automatically update with the new data

## Benefits

✅ **Unique Data Per Region**: Each region shows its own conflict trend
✅ **Easy Maintenance**: Update one file to change region-specific data
✅ **Realistic Visualization**: Different regions have different conflict levels
✅ **Scalable**: Easy to add new regions or extend date ranges
✅ **Type-Safe**: Works seamlessly with TypeScript
✅ **Reusable Component**: PMICardChart accepts any data array





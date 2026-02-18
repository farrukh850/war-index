# War Index Data Structure Overview

## Directory Structure

```
src/data/
├── chartData/                      # All PMI chart data files
│   ├── americasChartData.js       # Americas region chart data
│   ├── africaChartData.js         # Africa region chart data
│   ├── asiaChartData.js           # Asia region chart data
│   ├── europeChartData.js         # Europe region chart data
│   ├── middleEastChartData.js     # Middle East region chart data
│   ├── oceaniaChartData.js        # Oceania region chart data
│   └── worldChartData.js          # World aggregate chart data
│
├── africaMarkers.js               # Africa map markers/hotspots
├── americasMarkers.js             # Americas map markers/hotspots
├── asiaMarkers.js                 # Asia map markers/hotspots
├── europeMarkers.js               # Europe map markers/hotspots
├── middleEastMarkers.js           # Middle East map markers/hotspots
├── oceaniaMarkers.js              # Oceania map markers/hotspots
├── worldMarkers.js                # World map markers/hotspots
│
├── regionChartDataMap.js          # Maps region IDs to chart data
└── regionMarkersMap.js            # Maps region IDs to marker data
```

## File Organization

### 📊 Chart Data Files (`chartData/` directory)
- **Purpose**: Contains 14-day PMI score trend data for each region
- **Usage**: Displayed in the "14-Day Graph" view
- **Format**: Array of 30 data points (March 1-30, 2026)
- **Imported by**: `regionChartDataMap.js`

### 📍 Marker Data Files (root `data/` directory)
- **Purpose**: Contains map hotspot/marker data for conflicts
- **Usage**: Displayed as pins on the map view
- **Format**: Array of marker objects with position, PMI score, title, etc.
- **Imported by**: `regionMarkersMap.js`

### 🗺️ Mapper Files
1. **regionChartDataMap.js**
   - Maps region IDs (1-6) to their chart data
   - Also maps 'world' to world chart data
   - Used by: `WorldConflictIndex.tsx` and `RegionView.tsx`

2. **regionMarkersMap.js**
   - Maps region IDs (1-6) to their marker data
   - Used by: `RegionPage.tsx`

## Data Separation Logic

### Why Two Separate Structures?

1. **Chart Data** (`chartData/` subdirectory)
   - Time-series data (30 days)
   - Changes over time
   - Used for trend visualization
   - Organized in its own folder for clarity

2. **Marker Data** (root `data/` directory)
   - Spatial/geographic data
   - Relatively static positions
   - Used for map visualization
   - Kept at root level alongside world markers

## Component Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                         Home Page                            │
│                                                              │
│  WorldConflictIndex.tsx                                     │
│  ├─ Markers: worldMarkers.js                                │
│  └─ Chart: chartData/worldChartData.js                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      Region Pages                            │
│                                                              │
│  RegionPage.tsx                                             │
│  └─> RegionView.tsx                                         │
│      ├─ Markers: regionMarkersMap.js → [region]Markers.js  │
│      └─ Chart: regionChartDataMap.js → chartData/[...]     │
└─────────────────────────────────────────────────────────────┘
```

## Region ID Mapping

| Region ID | Region Name | Markers File | Chart Data File |
|-----------|-------------|--------------|-----------------|
| 1 | Americas | americasMarkers.js | chartData/americasChartData.js |
| 2 | Europe | europeMarkers.js | chartData/europeChartData.js |
| 3 | Africa | africaMarkers.js | chartData/africaChartData.js |
| 4 | Asia | asiaMarkers.js | chartData/asiaChartData.js |
| 5 | Middle East | middleEastMarkers.js | chartData/middleEastChartData.js |
| 6 | Oceania | oceaniaMarkers.js | chartData/oceaniaChartData.js |
| 'world' | World | worldMarkers.js | chartData/worldChartData.js |

## Key Benefits of This Structure

✅ **Clear Separation**: Chart data vs. map marker data
✅ **Organized**: Chart data files grouped in subdirectory
✅ **Scalable**: Easy to add new regions or data types
✅ **Maintainable**: Each region's data in dedicated files
✅ **Type-Safe**: Works seamlessly with TypeScript
✅ **DRY Principle**: Mapper files centralize the logic


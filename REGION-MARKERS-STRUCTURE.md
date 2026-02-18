# Region Markers Data Structure

## Overview
This document explains the new data structure for region-specific markers, separating them from the world markers.

## File Structure

### World Markers (Global Level)
**File:** `src/data/worldMarkers.js`
- **Used in:** `WorldConflictIndex.tsx` component (Home page)
- **Purpose:** Contains the main 6 regions displayed on the world map
- **Regions:**
  1. Americas Conflict Index
  2. Europe Conflict Index
  3. Africa Conflict Index
  4. Asia Conflict Index
  5. Middle East Conflict Index
  6. Oceania Conflict Index

### Region-Specific Markers (Regional Level)
Each region now has its own data file with sub-markers for conflicts within that region:

#### 1. Americas Markers
**File:** `src/data/americasMarkers.js`
- United States Tensions
- Central America Instability
- South America Tensions
- Canada Security

#### 2. Europe Markers
**File:** `src/data/europeMarkers.js`
- Eastern Europe Conflict
- Baltic States Alert
- Western Europe Stability
- Balkans Tensions
- Nordic Security

#### 3. Africa Markers
**File:** `src/data/africaMarkers.js`
- North Africa Instability
- Sahel Crisis
- East Africa Conflicts
- Southern Africa Stability
- West Africa Security

#### 4. Asia Markers
**File:** `src/data/asiaMarkers.js`
- East China Sea Tensions
- Korean Peninsula
- South China Sea
- Southeast Asia Security
- South Asia Tensions
- Central Asia Stability

#### 5. Middle East Markers
**File:** `src/data/middleEastMarkers.js`
- Israel-Palestine Conflict
- Yemen Crisis
- Syria Instability
- Iran Nuclear Program
- Iraq Security
- Lebanon Crisis

#### 6. Oceania Markers
**File:** `src/data/oceaniaMarkers.js`
- Australia Defense
- Pacific Islands Security
- Papua New Guinea
- New Zealand Stability

### Region Markers Map
**File:** `src/data/regionMarkersMap.js`
- **Purpose:** Helper function that maps region IDs to their respective marker data
- **Function:** `getRegionMarkers(regionId)`
- **Usage:** Called in `RegionPage.tsx` to get the correct markers based on URL parameter

## Component Usage

### WorldConflictIndex.tsx (Home Page)
```typescript
// Uses worldMarkers for the main world map
import { worldMarkers } from '../data/worldMarkers';

<WorldConflicts
    markers={worldMarkers}
    // ... other props
/>
```

### RegionView.tsx (Individual Region Pages)
```typescript
// Uses region-specific markers from regionMarkersMap
import { getRegionMarkers } from '../data/regionMarkersMap';

const regionMarkers = getRegionMarkers(Number(regionId));

<RegionView
    markers={regionMarkers}
    // ... other props
/>
```

## Data Structure

Each marker object contains:
```javascript
{
    id: number,              // Unique identifier
    top: string,             // Vertical position (percentage)
    left: string,            // Horizontal position (percentage)
    number: string,          // PMI Score
    title: string,           // Conflict/Region name
    description: string,     // Detailed description
    tags: string[],          // Related tags
    hotspotColor: string     // Hex color for the marker
}
```

## Benefits of This Structure

1. **Separation of Concerns:** World-level data is separate from region-level data
2. **Easy to Maintain:** Each region has its own file, making updates straightforward
3. **Scalable:** Easy to add more regions or sub-markers
4. **Type-Safe:** Works seamlessly with TypeScript types
5. **Performance:** Only loads relevant data for each page
6. **Flexible:** Easy to customize markers for each specific region

## How to Add New Markers

### To add a marker to a region:
1. Open the appropriate region file (e.g., `americasMarkers.js`)
2. Add a new object to the array following the data structure
3. Adjust positioning (top/left) to place it correctly on the region map

### To add a new region:
1. Create a new file: `src/data/newRegionMarkers.js`
2. Export an array with the marker objects
3. Import it in `src/data/regionMarkersMap.js`
4. Add the mapping in the `markerMap` object
5. Add the region to `worldMarkers.js` with a new ID


# PMI Cards Data Mapping

## Overview
The PMICard component now displays different markers based on the current view (World vs. Region), showing relevant conflict data for each context.

## Component Architecture

### PMICard Component
**File:** `src/components/PMICard.tsx`

Now accepts markers as props:
```typescript
interface PMICardProps {
    markers: WorldMarker[];
}

function PMICard({ markers }: PMICardProps)
```

### PredictionMarketIndexes Component
**File:** `src/components/PredictionMarketIndexes.tsx`

Acts as a wrapper that passes markers to PMICard:
```typescript
interface PredictionMarketsProps {
    markers: WorldMarker[];
}

export default function PredictionMarkets({ markers }: PredictionMarketsProps)
```

## Data Flow

### World View (Home Page)

**Page:** `src/pages/Home.tsx`

**Data Source:** `worldMarkers` from `src/data/worldMarkers.js`

**Cards Displayed:** 6 cards representing the main world regions
1. Americas Conflict Index
2. Europe Conflict Index
3. Africa Conflict Index
4. Asia Conflict Index
5. Middle East Conflict Index
6. Oceania Conflict Index

**Implementation:**
```typescript
<PredictionMarkets markers={worldMarkers} />
```

### Region View (Individual Region Pages)

**Page:** `src/pages/RegionPage.tsx`

**Data Source:** `regionMarkers` from region-specific files via `getRegionMarkers(regionId)`

**Cards Displayed:** Sub-conflicts within the selected region

**Examples:**

#### Americas Region (`/region/americas`)
- United States Tensions
- Central America Instability
- South America Tensions
- Canada Security

#### Europe Region (`/region/europe`)
- Eastern Europe Conflict
- Baltic States Alert
- Western Europe Stability
- Balkans Tensions
- Nordic Security

#### Africa Region (`/region/africa`)
- North Africa Instability
- Sahel Crisis
- East Africa Conflicts
- Southern Africa Stability
- West Africa Security

#### Asia Region (`/region/asia`)
- East China Sea Tensions
- Korean Peninsula
- South China Sea
- Southeast Asia Security
- South Asia Tensions
- Central Asia Stability

#### Middle East Region (`/region/middle-east`)
- Israel-Palestine Conflict
- Yemen Crisis
- Syria Instability
- Iran Nuclear Program
- Iraq Security
- Lebanon Crisis

#### Oceania Region (`/region/oceania`)
- Australia Defense
- Pacific Islands Security
- Papua New Guinea
- New Zealand Stability

**Implementation:**
```typescript
const regionMarkers = getRegionMarkers(selectedRegion.id);

<PredictionMarkets markers={regionMarkers} />
```

## Data Mapping Summary

| View | Page | Markers Source | Number of Cards | Card Content |
|------|------|----------------|-----------------|--------------|
| **World** | Home.tsx | worldMarkers.js | 6 | Main world regions |
| **Americas** | RegionPage.tsx | americasMarkers.js | 4 | Americas sub-conflicts |
| **Europe** | RegionPage.tsx | europeMarkers.js | 5 | Europe sub-conflicts |
| **Africa** | RegionPage.tsx | africaMarkers.js | 5 | Africa sub-conflicts |
| **Asia** | RegionPage.tsx | asiaMarkers.js | 6 | Asia sub-conflicts |
| **Middle East** | RegionPage.tsx | middleEastMarkers.js | 6 | Middle East sub-conflicts |
| **Oceania** | RegionPage.tsx | oceaniaMarkers.js | 4 | Oceania sub-conflicts |

## Component Hierarchy

```
Home Page:
└─ Layout
   ├─ WorldConflictIndex (displays world map + markers)
   │  └─ markers: worldMarkers
   └─ PredictionMarkets (displays PMI cards)
      └─ PMICard
         └─ markers: worldMarkers (6 cards)

Region Page:
└─ Layout
   ├─ RegionView (displays region map + sub-markers)
   │  └─ markers: regionMarkers
   └─ PredictionMarkets (displays PMI cards)
      └─ PMICard
         └─ markers: regionMarkers (4-6 cards)
```

## Benefits

✅ **Contextual Content**: Cards show relevant data based on current view
✅ **Reusable Components**: Same components work for both world and region views
✅ **Consistent UI**: Same card design across all views
✅ **Dynamic Data**: Easy to update markers without changing components
✅ **Type Safety**: Full TypeScript support for all marker types
✅ **Scalable**: Easy to add more regions or sub-conflicts

## Card Display Features

Each PMI card displays:
- **PMI Score Badge** (with region-specific hotspot color)
- **Region/Conflict Title**
- **Description**
- **Tags** (filterable conflict categories)
- **Map Image** (visual representation)
- **Exchange Icons** (4 prediction market exchanges)
- **Contract Count** (number of active contracts)
- **Share Button** (social sharing functionality)
- **Hover Effect** (gradient background on hover)

## Example User Journey

1. **User visits home page** → Sees 6 world region cards
2. **User clicks on "Asia" region** → Navigates to `/region/asia`
3. **Region page loads** → Shows Asia-specific map with 6 sub-conflict markers
4. **Scroll down** → Sees 6 PMI cards for Asia sub-conflicts:
   - East China Sea Tensions
   - Korean Peninsula
   - South China Sea
   - Southeast Asia Security
   - South Asia Tensions
   - Central Asia Stability

This creates a natural drill-down experience from global → regional → sub-regional conflicts.


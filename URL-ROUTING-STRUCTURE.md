# URL Routing Structure

## Overview
The application now uses human-readable slugs in URLs instead of numeric IDs for better SEO and user experience.

## URL Format

### Home Page
```
/
```
Displays the world map with all regions.

### Region Pages
```
/region/{slug}
```

## Available Region URLs

| Region Name | URL Slug | Full URL |
|-------------|----------|----------|
| **Americas** | `americas` | `/region/americas` |
| **Europe** | `europe` | `/region/europe` |
| **Africa** | `africa` | `/region/africa` |
| **Asia** | `asia` | `/region/asia` |
| **Middle East** | `middle-east` | `/region/middle-east` |
| **Oceania** | `oceania` | `/region/oceania` |

## Implementation Details

### Route Definition (App.tsx)
```typescript
<Route path="/region/:regionSlug" element={<RegionPage />} />
```

### Navigation (Home.tsx)
When clicking a region marker on the world map:
```typescript
const handleMarkerClick = (marker: WorldMarker) => {
    navigate(`/region/${marker.slug}`);
};
```

### Region Lookup (RegionPage.tsx)
The region page finds the selected region using the slug:
```typescript
const { regionSlug } = useParams<{ regionSlug: string }>();
const selectedRegion = worldMarkers.find(marker => marker.slug === regionSlug);
```

## Data Structure

Each region in `worldMarkers.js` now includes a `slug` field:
```javascript
{
    id: 1,
    slug: 'americas',
    title: 'Americas Conflict Index',
    // ... other properties
}
```

### Slug to ID Mapping

| ID | Slug | Region |
|----|------|--------|
| 1 | `americas` | Americas Conflict Index |
| 2 | `europe` | Europe Conflict Index |
| 3 | `africa` | Africa Conflict Index |
| 4 | `asia` | Asia Conflict Index |
| 5 | `middle-east` | Middle East Conflict Index |
| 6 | `oceania` | Oceania Conflict Index |

## Benefits of Slug-Based URLs

✅ **SEO Friendly**: Search engines prefer readable URLs
✅ **User Friendly**: Users can understand what page they're on
✅ **Shareable**: URLs are easier to share and remember
✅ **Professional**: Looks more polished than numeric IDs
✅ **Bookmarkable**: Users can bookmark specific regions easily

## Example Navigation Flow

1. User visits home page: `http://localhost:5174/`
2. User clicks on Asia region marker
3. Browser navigates to: `http://localhost:5174/region/asia`
4. RegionPage finds the region using slug "asia"
5. Displays Asia-specific conflict data and map

## Error Handling

If a user navigates to an invalid slug (e.g., `/region/invalid-slug`):
- The app checks if the region exists
- If not found, redirects to home page `/`
- Prevents broken pages and 404 errors

## TypeScript Support

The `WorldMarker` interface includes the slug property:
```typescript
export interface WorldMarker {
    id: number;
    slug: string;
    // ... other properties
}
```

This ensures type safety throughout the application.


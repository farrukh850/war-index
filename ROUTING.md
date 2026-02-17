# React Router Implementation

## Overview
The application now uses **React Router v6** for scalable, URL-based navigation with a proper SPA (Single Page Application) architecture.

## Routes

### Main Routes
- **`/`** - Home page with world map and all region markers
- **`/region/:regionId`** - Individual region view (e.g., `/region/1` for Americas)

## Project Structure

```
src/
├── App.tsx                      # Main router configuration
├── main.tsx                     # Application entry point
├── pages/                       # Route-level components
│   ├── Home.tsx                # World view page (/)
│   └── RegionPage.tsx          # Region detail page (/region/:id)
├── components/
│   ├── Layout.tsx              # Shared layout wrapper (Navbar + Footer)
│   ├── Navbar.tsx              # Navigation bar with router links
│   ├── Footer.tsx              # Footer with router links
│   ├── WorldConflictIndex.tsx  # World map component
│   ├── RegionView.tsx          # Region detail component
│   ├── PMICard.tsx             # PMI card component
│   ├── PMI-score-chart.tsx     # Chart component
│   ├── PredictionMarketIndexes.tsx
│   └── RegionTabs.tsx
├── data/
│   └── worldMarkers.js         # Region marker data
└── types/
    └── index.ts                # TypeScript interfaces
```

## Key Features

### 1. **URL-Based Navigation**
- Each region has a unique URL: `/region/1`, `/region/2`, etc.
- Direct URL access works (deep linking)
- Browser back/forward buttons work correctly
- Shareable URLs for specific regions

### 2. **React Router Hooks**
- `useNavigate()` - Programmatic navigation
- `useParams()` - Access URL parameters (regionId)
- `Link` component - Client-side navigation without page reload

### 3. **Layout Component**
- Shared layout wrapper containing Navbar and Footer
- Reduces code duplication across pages
- Consistent structure throughout the app

### 4. **Type-Safe Routing**
- Full TypeScript support
- Typed route parameters
- Type-safe navigation

## Usage Examples

### Navigating to a Region
```typescript
const navigate = useNavigate();
navigate(`/region/${marker.id}`);
```

### Getting Route Parameters
```typescript
const { regionId } = useParams<{ regionId: string }>();
const selectedRegion = worldMarkers.find(marker => marker.id === Number(regionId));
```

### Creating Links
```typescript
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/region/1">Americas</Link>
```

## Benefits of This Architecture

### Scalability
- ✅ Easy to add new routes (e.g., `/about`, `/contact`, `/region/:id/details`)
- ✅ Nested routes support
- ✅ Route-level code splitting possible
- ✅ Protected routes can be added

### Developer Experience
- ✅ Clear separation of concerns (pages vs components)
- ✅ Type-safe navigation
- ✅ Better code organization
- ✅ Easier testing

### User Experience
- ✅ No full page reloads
- ✅ Faster navigation
- ✅ Browser history works correctly
- ✅ Bookmarkable URLs
- ✅ Shareable links to specific regions

### SEO & Performance
- ✅ Better for SEO (unique URLs per page)
- ✅ Potential for lazy loading routes
- ✅ Server-side rendering possible in future

## Future Enhancements

### Potential Routes to Add
```
/                           - Home/World view
/region/:regionId           - Region detail
/region/:regionId/history   - Historical data for region
/compare                    - Compare multiple regions
/analytics                  - Analytics dashboard
/about                      - About page
/404                        - Not found page
```

### Route Guards
```typescript
// Protected route example
<Route path="/admin" element={
  <ProtectedRoute>
    <AdminPanel />
  </ProtectedRoute>
} />
```

### Lazy Loading
```typescript
// Code splitting example
const RegionPage = lazy(() => import('./pages/RegionPage'));

<Route path="/region/:regionId" element={
  <Suspense fallback={<Loading />}>
    <RegionPage />
  </Suspense>
} />
```

## Migration Notes

### What Changed
1. **Old**: State-based navigation with conditional rendering
2. **New**: URL-based navigation with React Router

### Breaking Changes
- None for end users
- Internal component structure reorganized
- Old `Home.tsx` split into `pages/Home.tsx` and `pages/RegionPage.tsx`

## Testing Routes

### Development
```bash
npm run dev
```

Navigate to:
- http://localhost:5173/ - World view
- http://localhost:5173/region/1 - Americas
- http://localhost:5173/region/2 - Europe
- http://localhost:5173/region/3 - Africa
- http://localhost:5173/region/4 - Asia
- http://localhost:5173/region/5 - Middle East
- http://localhost:5173/region/6 - Oceania

### Production Build
```bash
npm run build
npm run preview
```

## Dependencies Added
- `react-router-dom` - React Router library
- `@types/react-router-dom` - TypeScript types for React Router


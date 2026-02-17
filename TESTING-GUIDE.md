# Testing Guide - React Router Implementation

## Quick Start

### 1. Start Development Server
```bash
npm run dev
```

The server will start at: `http://localhost:5173/` (or next available port)

## Manual Testing Checklist

### ✅ **Test 1: Home Page Load**
1. Open browser to `http://localhost:5173/`
2. **Expected**: World map with all region markers visible
3. **Verify**: 
   - Navbar displays "The War Index"
   - World Conflict Index section shows
   - Map displays with hotspot markers
   - PMI score cards visible
   - Prediction Market Indexes section shows
   - Footer displays

### ✅ **Test 2: Click Region Marker (Americas)**
1. On home page, click the **Americas** marker (orange hotspot)
2. **Expected**: URL changes to `/region/1`
3. **Verify**:
   - Page transitions smoothly (no full reload)
   - "Back to World View" button appears
   - Title shows "Americas Conflict Index"
   - Description shows Americas-specific text
   - PMI Score shows "73"
   - Map shows Americas region map
   - Map/Graph toggle buttons work

### ✅ **Test 3: Click Region Marker (Europe)**
1. Return to home and click **Europe** marker
2. **Expected**: URL changes to `/region/2`
3. **Verify**:
   - Title shows "Europe Conflict Index"
   - PMI Score shows "55"
   - Europe region map displays

### ✅ **Test 4: Click Region Marker (Africa)**
1. Return to home and click **Africa** marker
2. **Expected**: URL changes to `/region/3`
3. **Verify**:
   - Title shows "Africa Conflict Index"
   - PMI Score shows "35"
   - Africa region map displays

### ✅ **Test 5: Click Region Marker (Asia)**
1. Return to home and click **Asia** marker
2. **Expected**: URL changes to `/region/4`
3. **Verify**:
   - Title shows "Asia Conflict Index"
   - PMI Score shows "65"
   - Asia region map displays

### ✅ **Test 6: Click Region Marker (Middle East)**
1. Return to home and click **Middle East** marker
2. **Expected**: URL changes to `/region/5`
3. **Verify**:
   - Title shows "Middle East Conflict Index"
   - PMI Score shows "35"
   - Middle East region map displays

### ✅ **Test 7: Click Region Marker (Oceania)**
1. Return to home and click **Oceania** marker
2. **Expected**: URL changes to `/region/6`
3. **Verify**:
   - Title shows "Oceania Conflict Index"
   - PMI Score shows "35"
   - Oceania region map displays

### ✅ **Test 8: Back Button (Component)**
1. Navigate to any region page (e.g., `/region/1`)
2. Click "Back to World View" button with left arrow
3. **Expected**: 
   - URL changes to `/`
   - Returns to world map view
   - Smooth transition

### ✅ **Test 9: Browser Back Button**
1. Navigate to region page (e.g., `/region/1`)
2. Click browser back button
3. **Expected**: 
   - Returns to home page
   - URL shows `/`
   - Page state restored

### ✅ **Test 10: Browser Forward Button**
1. After using back button, click browser forward button
2. **Expected**: 
   - Returns to region page
   - URL restored (e.g., `/region/1`)
   - Page state restored

### ✅ **Test 11: Direct URL Access**
1. Open new browser tab/window
2. Navigate directly to `http://localhost:5173/region/2`
3. **Expected**: 
   - Europe region page loads directly
   - No errors
   - Full page functionality works

### ✅ **Test 12: Invalid Region ID**
1. Navigate to `http://localhost:5173/region/999`
2. **Expected**: 
   - Redirects to home page `/`
   - No crash or errors

### ✅ **Test 13: Navbar Logo Link**
1. From any region page, click "The War Index" title in navbar
2. **Expected**: 
   - Returns to home page
   - URL shows `/`
   - Smooth navigation (no page reload)

### ✅ **Test 14: Footer Logo Link**
1. From any region page, click "The War Index" title in footer
2. **Expected**: 
   - Returns to home page
   - URL shows `/`
   - Smooth navigation

### ✅ **Test 15: Map/Graph Toggle (World View)**
1. On home page, click "14-Day Graph" button
2. **Expected**: 
   - Graph displays instead of map
   - Smooth fade-in transition
3. Click "Map" button
4. **Expected**: 
   - Map displays instead of graph
   - Smooth fade-in transition

### ✅ **Test 16: Map/Graph Toggle (Region View)**
1. Navigate to any region page
2. Click "14-Day Graph" button
3. **Expected**: 
   - Graph displays with region-specific map replaced
   - Smooth transition
4. Click "Map" button
5. **Expected**: 
   - Region map displays
   - Smooth transition

### ✅ **Test 17: Marker Hover Popup**
1. On home page, hover over any marker
2. **Expected**: 
   - Popup appears with PMI score and title
   - Smooth animation
3. Move mouse away
4. **Expected**: 
   - Popup disappears

### ✅ **Test 18: Responsive Behavior**
1. Resize browser window to mobile size (< 768px)
2. **Expected**: 
   - Layout adjusts responsively
   - All functionality works on mobile
3. Resize to tablet (768px - 1024px)
4. **Expected**: 
   - Layout adjusts to tablet view
5. Resize to desktop (> 1024px)
6. **Expected**: 
   - Full desktop layout

### ✅ **Test 19: Multiple Navigation**
1. Click Americas marker → Europe marker → Asia marker
2. Use back button three times
3. **Expected**: 
   - Each back button press returns to previous page
   - Browser history works correctly
   - No errors

### ✅ **Test 20: Page Refresh**
1. Navigate to region page (e.g., `/region/3`)
2. Press F5 or Ctrl+R to refresh
3. **Expected**: 
   - Page reloads at same URL
   - Africa region page displays correctly
   - All data preserved

## Console Error Checks

Open browser DevTools (F12) → Console tab

### Should Have ZERO Errors:
- ❌ No 404 errors for images/assets
- ❌ No React warnings
- ❌ No TypeScript errors
- ❌ No routing errors
- ❌ No component lifecycle errors

## Performance Checks

### Should Be Fast:
- ✅ Page transitions < 100ms
- ✅ No flickering during navigation
- ✅ Smooth animations
- ✅ No memory leaks (check DevTools Memory tab)

## Network Tab Checks

Open DevTools → Network tab

### On Initial Load:
- ✅ HTML loads
- ✅ JS bundles load
- ✅ CSS loads
- ✅ Images load

### On Route Change (e.g., clicking marker):
- ✅ NO new HTML request (SPA behavior)
- ✅ NO full page reload
- ✅ Only necessary resources load

## Build Test

### Production Build
```bash
npm run build
```

### Expected Output:
```
✓ built in XXXms
dist/index.html                   X.XX kB
dist/assets/index-XXXXX.js        XXX.XX kB │ gzip: XX.XX kB
dist/assets/index-XXXXX.css       XX.XX kB │ gzip: X.XX kB
```

### Preview Production Build
```bash
npm run preview
```

Test all above scenarios in production mode.

## Accessibility Checks

### Keyboard Navigation:
1. Use Tab key to navigate
2. **Expected**: All interactive elements focusable
3. Press Enter on focused marker
4. **Expected**: Navigation works

### Screen Reader:
1. Use screen reader (NVDA/JAWS/VoiceOver)
2. **Expected**: All content readable
3. aria-label on markers works

## Edge Cases

### ✅ **Test 21: Rapid Clicking**
1. Rapidly click multiple markers in succession
2. **Expected**: 
   - No crashes
   - Final click's page displays
   - No race conditions

### ✅ **Test 22: URL Manipulation**
1. Change URL manually in address bar to `/region/abc`
2. **Expected**: Redirects to home (non-numeric ID)

### ✅ **Test 23: Browser Back/Forward Spam**
1. Rapidly click browser back/forward buttons
2. **Expected**: 
   - Navigation handles gracefully
   - No crashes

## Success Criteria

All tests should pass with:
- ✅ No console errors
- ✅ Smooth navigation
- ✅ Correct URL updates
- ✅ Working browser history
- ✅ Responsive design works
- ✅ All interactive elements functional
- ✅ No memory leaks
- ✅ Fast performance

## Troubleshooting

### If something doesn't work:

1. **Check console for errors**
   ```
   F12 → Console
   ```

2. **Clear browser cache**
   ```
   Ctrl+Shift+Delete → Clear cache
   ```

3. **Restart dev server**
   ```bash
   Ctrl+C (stop server)
   npm run dev
   ```

4. **Reinstall dependencies**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

5. **Check TypeScript errors**
   ```bash
   npx tsc --noEmit
   ```

## Browser Compatibility

Test in:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎉 If All Tests Pass

Your React Router implementation is working perfectly!
The application is:
- ✅ Production-ready
- ✅ Scalable
- ✅ Following best practices
- ✅ Type-safe
- ✅ Performant


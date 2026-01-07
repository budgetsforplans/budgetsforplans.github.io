#!/bin/bash

# Create iPad placeholder images
# Each image will be a simple colored rectangle with text

# iPad screenshots - 2048x1536 (landscape) or 1536x2048 (portrait)

# Create split view navigation (landscape)
convert -size 2048x1536 xc:'#F5F5F7' \
  -gravity Center -pointsize 80 -fill '#1D1D1F' \
  -annotate +0+0 "iPad Split View\nNavigation" \
  ipad-split-view-navigation.png

# Create side-by-side charts (landscape)  
convert -size 2048x1536 xc:'#F5F5F7' \
  -gravity Center -pointsize 80 -fill '#1D1D1F' \
  -annotate +0+0 "Side-by-Side\nCharts" \
  ipad-side-by-side-charts.png

# Create entry split view (landscape)
convert -size 2048x1536 xc:'#F5F5F7' \
  -gravity Center -pointsize 80 -fill '#1D1D1F' \
  -annotate +0+0 "Entry List\nSplit View" \
  ipad-entry-split-view.png

# Create calendar heatmap (landscape)
convert -size 2048x1536 xc:'#F5F5F7' \
  -gravity Center -pointsize 80 -fill '#1D1D1F' \
  -annotate +0+0 "Calendar\nHeat Map" \
  ipad-calendar-heatmap.png

# Create drag drop (landscape)
convert -size 2048x1536 xc:'#F5F5F7' \
  -gravity Center -pointsize 80 -fill '#1D1D1F' \
  -annotate +0+0 "Drag & Drop\nEntries" \
  ipad-drag-drop-entries.png

# Create multi-window (landscape)
convert -size 2048x1536 xc:'#F5F5F7' \
  -gravity Center -pointsize 80 -fill '#1D1D1F' \
  -annotate +0+0 "Multi-Window\nSupport" \
  ipad-multi-window.png

# Create keyboard shortcuts (landscape)
convert -size 2048x1536 xc:'#F5F5F7' \
  -gravity Center -pointsize 80 -fill '#1D1D1F' \
  -annotate +0+0 "Keyboard\nShortcuts" \
  ipad-keyboard-shortcuts.png

# Create split settings/help (landscape)
convert -size 2048x1536 xc:'#F5F5F7' \
  -gravity Center -pointsize 80 -fill '#1D1D1F' \
  -annotate +0+0 "Split Settings\n& Help" \
  ipad-split-settings-help.png

echo "Created iPad placeholder images"

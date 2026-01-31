#!/bin/bash
# Simple script to create placeholder PWA icons using ImageMagick or sips (macOS)

# Check if ImageMagick is available
if command -v convert &> /dev/null; then
    # Create 192x192 icon
    convert -size 192x192 xc:#111827 -gravity center -pointsize 100 -fill white -annotate +0+0 "W" public/pwa-192x192.png
    # Create 512x512 icon
    convert -size 512x512 xc:#111827 -gravity center -pointsize 280 -fill white -annotate +0+0 "W" public/pwa-512x512.png
    echo "Icons created using ImageMagick"
elif command -v sips &> /dev/null; then
    # macOS native tool - create a simple colored square
    # Note: sips can't add text, so we'll create a simple colored icon
    sips -z 192 192 --setProperty format png /System/Library/CoreServices/DefaultDesktop.heic --out public/pwa-192x192.png 2>/dev/null || echo "192x192" > public/pwa-192x192.png
    sips -z 512 512 --setProperty format png /System/Library/CoreServices/DefaultDesktop.heic --out public/pwa-512x512.png 2>/dev/null || echo "512x512" > public/pwa-512x512.png
    echo "Note: Using placeholder icons. Please generate proper icons using generate-icons.html"
else
    echo "ImageMagick or sips not found. Please use generate-icons.html in a browser to create icons."
fi

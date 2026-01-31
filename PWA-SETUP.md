# PWA Setup Instructions

Your app is now configured as a Progressive Web App (PWA)! Here's what you need to do:

## 1. Generate PWA Icons

1. Open `public/generate-icons.html` in your browser
2. Click "Generate 192x192" and save the file as `pwa-192x192.png` in the `public` folder
3. Click "Generate 512x512" and save the file as `pwa-512x512.png` in the `public` folder

Alternatively, you can create your own icons:
- 192x192 pixels (minimum)
- 512x512 pixels (recommended)
- Place them in the `public` folder with names `pwa-192x192.png` and `pwa-512x512.png`

## 2. Build and Test

1. Build the app:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

3. Test on your phone:
   - Make sure your phone and computer are on the same network
   - Find your computer's IP address
   - On your phone's browser, go to `http://YOUR_IP:4173` (or the port shown)
   - You should see an "Add to Home Screen" prompt

## 3. Install on Your Phone

### iOS (iPhone/iPad):
1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. The app will appear on your home screen

### Android:
1. Open the app in Chrome
2. You'll see an "Install" prompt, or
3. Tap the menu (three dots) → "Add to Home Screen" or "Install app"

## 4. Features Enabled

✅ Offline support (service worker)
✅ Installable on home screen
✅ App-like experience (standalone mode)
✅ Auto-updates when new version is available

## Notes

- The app will work offline after the first visit
- Updates are automatically installed when you rebuild and deploy
- The theme color matches your navbar (#111827)


# TestingExpoMap

> **⚠️ Important:**
>
> This project requires a custom development build created with EAS (Expo Application Services).
> **You cannot run this project in Expo Go.**
> Please follow the instructions in the “Android Development with EAS Build” section below to build and run the app.

A cross-platform (iOS/Android) public transport and map exploration app built with Expo, React Native, and Google Maps. The app features:

- 🗺️ Interactive map with Google Maps integration
- 🚌 YBS (Yangon Bus Service) route search and suggestions
- 📄 Bottom sheet modal for route details and selection
- 🎨 Custom UI components and icons
- 💾 Persistent storage and state management
- ✨ Modern navigation and theming

---

## ✨ Features

- 🗺️ **Map Integration:** View and interact with Google Maps (Android) or Apple Maps (iOS)
- 🚌 **YBS Route Search:** Search for bus routes, get suggestions, and select start/end points
- 📄 **Bottom Sheet:** View available routes, details, and timelines in a draggable modal
- 🎨 **Custom Components:** Includes timeline, route headers, and more
- 💾 **Persistent State:** Uses Zustand and MMKV for fast, persistent state
- 🌗 **Theming:** Light/dark mode and custom color schemes

---

## 📁 Directory Structure

```
app/                # App entry, navigation, and screens
  (tabs)/           # Main tabbed navigation and map screen
  notification/     # Notification-related screens
  +not-found.tsx    # 404 page
assets/             # Fonts and images
src/
  components/       # Reusable UI components
    ybsMap/         # YBS map and route-related components
    ui/             # Icon and tab bar UI
  common/           # Shared logic, dummy data, utils, API
  constants/        # App-wide constants
  hooks/            # Custom React hooks
  state/            # Zustand stores
  queries/          # React Query hooks
  types/            # TypeScript types
ios/                # iOS native project files
scripts/            # Project scripts (e.g., reset-project.js)
```

---

## 🛠️ Setup & Running

1. **Build and install the development client:**

   ```bash
   eas build -p android --profile development
   ```

   - Download and install the resulting APK on your Android device.
   - This step is required before you can run the app locally.

2. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the app:**

   ```bash
   yarn start
   # or
   npm start
   ```

   - Use the Expo CLI to run on Android, iOS, or web.

4. **iOS/Android:**
   - For iOS: `yarn ios` (requires Xcode)
   - For Android: `yarn android` (requires Android Studio)

---

## 🤖 Android Development with EAS Build

If you are using custom native modules or need a development build:

1. **Build the development APK:**
   ```bash
   eas build -p android --profile preview
   ```
2. **Install the APK on your Android device.**
3. **Start the Metro bundler:**
   ```bash
   npx expo start
   ```
4. **Open the app on your device.**  
   The app will connect to your local dev server for live development.

> **Note:** This is required if you use native modules not supported by Expo Go.

---

## 📦 Main Dependencies

- **expo**: App framework and CLI
- **react-native**: Core mobile framework
- **expo-maps**: Google/Apple Maps integration
- **@gorhom/bottom-sheet**: Bottom sheet modal
- **zustand**: State management
- **react-query**: Data fetching and caching
- **expo-location**: Location services
- **@expo/vector-icons**: Icon set
- **expo-router**: Navigation and routing

---

## 🖼️ Assets & Fonts

- Custom fonts: Roboto (Bold, Light, Medium, Regular, SemiBold)
- Images: Located in `assets/images/`

---

## �� Special Notes

- **Platform Support:**
  - 📱 Maps are available on Android and iOS only.
  - 🍏 Some features (e.g., Apple Maps) are iOS-specific.
- **File-based Routing:** Uses Expo Router for navigation.
- **Project Reset:**
  - Run `yarn reset-project` or `npm run reset-project` to reset the app to a blank state.

---

## 🤝 Contributing

Pull requests and issues are welcome! Please follow best practices and open an issue for major changes.

---

## 📄 License

This project is for educational/demo purposes. See LICENSE if present.

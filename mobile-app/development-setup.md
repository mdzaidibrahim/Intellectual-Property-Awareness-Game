# IPR EduGame - Development Setup Guide

## Prerequisites

Before you begin developing the IPR EduGame mobile application, ensure you have the following installed:

1. **Operating System**: 
   - Windows 10 or later
   - macOS 10.14 or later
   - Linux (Ubuntu 20.04 or later recommended)

2. **Development Tools**:
   - Flutter SDK (3.10 or later)
   - Android Studio or Visual Studio Code
   - Xcode (for iOS development on macOS)
   - Git for version control

3. **Mobile Development Setup**:
   - Android SDK (included with Android Studio)
   - iOS SDK (included with Xcode, macOS only)
   - Emulators/Simulators for testing

## Flutter Installation

### Windows/macOS/Linux

1. **Download Flutter SDK**:
   - Visit [Flutter's official installation guide](https://docs.flutter.dev/get-started/install)
   - Download the appropriate version for your operating system

2. **Extract Flutter SDK**:
   ```
   # Extract to a desired location (e.g., ~/development/flutter)
   tar xf ~/Downloads/flutter_linux_3.10.0-stable.tar.xz -C ~/development
   ```

3. **Update PATH**:
   Add Flutter to your PATH environment variable:
   ```
   # Add to ~/.bashrc or ~/.zshrc (Linux/macOS)
   export PATH="$PATH:`pwd`/flutter/bin"
   
   # For Windows, add to System Environment Variables
   ```

4. **Verify Installation**:
   ```
   flutter doctor
   ```

### Android Setup

1. **Install Android Studio**:
   - Download from [Android Studio website](https://developer.android.com/studio)
   - Install with default settings

2. **Install Android SDK**:
   - Open Android Studio
   - Go to Settings > Appearance & Behavior > System Settings > Android SDK
   - Install SDK platforms and tools

3. **Create Android Emulator**:
   - Open AVD Manager in Android Studio
   - Create a new virtual device (Pixel 4 or similar recommended)

### iOS Setup (macOS only)

1. **Install Xcode**:
   - Download from Mac App Store
   - Open Xcode and accept terms

2. **Install Command Line Tools**:
   ```
   sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
   sudo xcodebuild -runFirstLaunch
   ```

3. **Create iOS Simulator**:
   - Open Xcode > Window > Devices and Simulators
   - Create a new simulator (iPhone 14 or similar recommended)

## Project Setup

### 1. Clone the Repository
```
git clone <repository-url>
cd ipr-edugame
```

### 2. Get Dependencies
```
flutter pub get
```

### 3. Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Add Android and iOS apps to your Firebase project
3. Download `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
4. Place these files in the appropriate directories:
   - Android: `android/app/`
   - iOS: `ios/Runner/`

### 4. Environment Configuration
Create a `.env` file in the root directory:
```
# Firebase Configuration
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=sender_id
FIREBASE_APP_ID=app_id
```

## Running the Application

### Development Mode
```
# Run on connected device or emulator
flutter run

# Run on specific device
flutter run -d <device_name>

# Run with hot reload
flutter run --hot
```

### Building Release Versions

#### Android
```
# Build APK
flutter build apk

# Build App Bundle (for Play Store)
flutter build appbundle
```

#### iOS
```
# Build for iOS (macOS only)
flutter build ios

# Build for iOS simulator
flutter build ios --simulator
```

## Development Workflow

### 1. Branching Strategy
- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: Feature development branches
- `hotfix/*`: Urgent production fixes

### 2. Code Structure
Follow the project structure outlined in the README.md:
```
lib/
├── main.dart
├── screens/
├── widgets/
├── models/
└── services/
```

### 3. State Management
Use Provider for state management:
```dart
// Example provider setup
class AppProvider with ChangeNotifier {
  // State variables
  // Methods to update state
}
```

### 4. Testing
- Unit tests: `flutter test`
- Widget tests: `flutter test`
- Integration tests: `flutter drive`

## Code Quality Standards

### 1. Dart Code Style
Follow the [Effective Dart guidelines](https://dart.dev/guides/language/effective-dart):
- Use camelCase for variables and methods
- Use PascalCase for classes and typedefs
- Use UPPER_CASE for constants
- Add documentation comments for public APIs

### 2. Widget Structure
```dart
class CustomWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      // Implementation
    );
  }
}
```

### 3. Error Handling
- Use try/catch blocks for asynchronous operations
- Implement proper error messages for users
- Log errors for debugging

## Debugging Tools

### 1. Flutter DevTools
```
flutter pub global activate devtools
flutter pub global run devtools
```

### 2. Logging
```dart
import 'package:logger/logger.dart';

final logger = Logger();
logger.d('Debug message');
logger.i('Info message');
logger.e('Error message');
```

### 3. Performance Monitoring
- Use Flutter Performance tab in DevTools
- Monitor frame rendering times
- Check memory usage

## Deployment Process

### 1. Version Management
Update version in `pubspec.yaml`:
```yaml
version: 1.0.0+1  # major.minor.patch+build
```

### 2. Testing Checklist
- [ ] Unit tests pass
- [ ] Widget tests pass
- [ ] Manual testing on multiple devices
- [ ] Performance testing
- [ ] Accessibility testing

### 3. App Store Submission
#### Google Play Store
1. Create signed APK/App Bundle
2. Upload to Google Play Console
3. Fill in store listing details
4. Submit for review

#### Apple App Store
1. Archive app in Xcode
2. Upload to App Store Connect
3. Fill in app information
4. Submit for review

## Troubleshooting

### Common Issues

1. **Flutter Doctor Issues**:
   ```
   flutter doctor
   # Follow the prompts to resolve issues
   ```

2. **Android License Status Unknown**:
   ```
   flutter doctor --android-licenses
   ```

3. **iOS Podfile Issues**:
   ```
   cd ios
   pod install
   cd ..
   ```

4. **Dependency Resolution Failed**:
   ```
   flutter pub cache repair
   flutter pub get
   ```

### Getting Help

- [Flutter Documentation](https://docs.flutter.dev/)
- [Dart Documentation](https://dart.dev/guides)
- [Firebase Documentation](https://firebase.google.com/docs)
- Flutter Community Discord
- Stack Overflow (flutter tag)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

Follow the code style guidelines and include tests for new features.
# IPR EduGame - Assets Management Instructions

## Asset Directory Structure

All images used in the IPR EduGame are stored locally in the `assets` directory with the following structure:

```
assets/
├── images/
│   ├── questions/
│   │   ├── car_question.jpg
│   │   ├── digital_question.jpg
│   │   └── film_question.jpg
│   └── interests/
│       ├── cars.jpg
│       ├── digital_gadgets.jpg
│       ├── films.jpg
│       └── coming_soon.jpg
```

## How to Replace Images

### 1. For Question Images (in game screen)
1. Navigate to `assets/images/questions/`
2. Replace the existing images with your new images
3. Make sure to keep the same filenames:
   - `car_question.jpg`
   - `digital_question.jpg`
   - `film_question.jpg`

### 2. For Interest Selection Images
1. Navigate to `assets/images/interests/`
2. Replace the existing images with your new images
3. Make sure to keep the same filenames:
   - `cars.jpg`
   - `digital_gadgets.jpg`
   - `films.jpg`
   - `coming_soon.jpg`

## Image Requirements

### Question Images
- **Format**: JPG or PNG
- **Size**: Recommended 800x600 pixels
- **Quality**: High resolution for clear display
- **Content**: Show trademark mismatches as described in the questions

### Interest Selection Images
- **Format**: JPG or PNG
- **Size**: Recommended 500x500 pixels
- **Quality**: High resolution
- **Content**: Representative images of each category

## Adding New Images

If you want to add new images:

1. Add your images to the appropriate subdirectory
2. Update the code in the following files:
   - `lib/screens/game_screen.dart` (for question images)
   - `lib/screens/interest_selection_screen.dart` (for interest images)

## Code References

### Question Images
In `lib/screens/game_screen.dart`, the images are referenced as:
```dart
// For cars
'imageUrl': 'assets/images/questions/car_question.jpg'

// For digital gadgets
'imageUrl': 'assets/images/questions/digital_question.jpg'

// For films
'imageUrl': 'assets/images/questions/film_question.jpg'
```

### Interest Selection Images
In `lib/screens/interest_selection_screen.dart`, the images are referenced as:
```dart
_buildInterestBox(
  context,
  'Cars',
  'assets/images/interests/cars.jpg',
  // ...
)
```

## After Replacing Images

After replacing images, you need to rebuild the app:

```bash
cd d:\AppProjects\game\ipr_edugame_app
flutter pub get
flutter run
```

## Troubleshooting

### Images Not Showing
1. Make sure filenames match exactly
2. Check that the assets are declared in `pubspec.yaml`
3. Run `flutter pub get` to refresh assets
4. Restart the app completely

### Image Quality Issues
1. Use high-resolution images
2. Check that images are in JPG or PNG format
3. Verify image dimensions match recommendations

### Asset Loading Errors
1. Ensure `pubspec.yaml` includes the assets directory
2. Check for typos in file paths
3. Verify file permissions on image files
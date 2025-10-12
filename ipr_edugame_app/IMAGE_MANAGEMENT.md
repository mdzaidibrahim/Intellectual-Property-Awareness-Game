# IPR EduGame - Image Management Guide

## Overview
This document explains how images are managed in the IPR EduGame application. All images are stored locally in the `assets` directory rather than being loaded from the internet.

## Asset Directory Structure

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

## Image Categories

### 1. Question Images (assets/images/questions/)
These images are displayed in the game screen when users are answering questions about trademark mismatches.

**Files:**
- `car_question.jpg` - Shows a car with a mismatched logo (e.g., Ferrari logo on Rolls Royce body)
- `digital_question.jpg` - Shows a digital gadget with a mismatched brand logo (e.g., Apple logo on Android device)
- `film_question.jpg` - Shows a movie poster with a mismatched studio logo

**Requirements:**
- Format: JPG or PNG
- Size: 800x600 pixels recommended
- Content: Clear images showing trademark mismatches
- Quality: High resolution for clear display

### 2. Interest Selection Images (assets/images/interests/)
These images are displayed in the interest selection screen as category options.

**Files:**
- `cars.jpg` - Representative image of cars
- `digital_gadgets.jpg` - Representative image of digital gadgets
- `films.jpg` - Representative image of films
- `coming_soon.jpg` - Image for future categories

**Requirements:**
- Format: JPG or PNG
- Size: 500x500 pixels recommended
- Content: Clear, representative images of each category
- Quality: High resolution

## How to Replace Images

### Step 1: Prepare Your Images
1. Create images that match the requirements above
2. Name them exactly as specified
3. Ensure they are in JPG or PNG format

### Step 2: Replace Existing Images
1. Navigate to the appropriate directory:
   - For question images: `assets/images/questions/`
   - For interest images: `assets/images/interests/`
2. Replace the existing files with your new images
3. Make sure to keep the exact same filenames

### Step 3: Update the App
1. Save your changes
2. Run the following commands in the terminal:
   ```bash
   cd d:\AppProjects\game\ipr_edugame_app
   flutter pub get
   flutter run
   ```

## Error Handling

If an image file is missing or cannot be loaded, the app will display:
- A gray background with a broken image icon
- A text message indicating which image is missing
- Instructions on where to place the image files

This helps you identify which images need to be added.

## Best Practices

### Image Preparation
1. Use high-quality images for better user experience
2. Ensure images are appropriately sized (not too large to affect performance)
3. Compress images to reduce app size while maintaining quality
4. Test images on different device sizes to ensure they display correctly

### File Management
1. Keep backups of original images
2. Use descriptive filenames in your working directory
3. Document any changes you make to images
4. Test the app after replacing images to ensure everything works correctly

## Troubleshooting

### Images Not Displaying
1. Check that filenames match exactly (case-sensitive)
2. Verify that images are in the correct directory
3. Run `flutter pub get` to refresh assets
4. Restart the app completely

### Wrong Image Displayed
1. Check that you replaced the correct file
2. Verify that the filename matches what's referenced in the code
3. Clear the app cache and restart

### Performance Issues
1. Check image file sizes (try to keep under 1MB each)
2. Use appropriate image dimensions
3. Consider using JPG for photos and PNG for graphics with transparency

## Code References

The images are referenced in the following files:
- `lib/screens/game_screen.dart` - For question images
- `lib/screens/interest_selection_screen.dart` - For interest selection images

If you need to add new images or change filenames, you'll need to update these files accordingly.
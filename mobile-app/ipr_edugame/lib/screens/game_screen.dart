// Game Screen for IPR EduGame - Trademark Activity
// This screen presents the trademark recognition game

class GameScreen {
  // Constructor
  GameScreen();

  // For demonstration purposes, we'll just return a string description
  String getDescription() {
    return '''
    Game Screen (Trademark Activity):
    - Image display with intentional trademark mismatch
    - Overlay text: "What is wrong with this image?"
    - Two options:
      1. "Image is fine" (wrong answer)
      2. "Car logo and car model is not matching" (correct answer)
    - Visual feedback:
      - Red background for wrong answer
      - Green background for correct answer
    - Educational explanation appears after 1 second
    ''';
  }
}
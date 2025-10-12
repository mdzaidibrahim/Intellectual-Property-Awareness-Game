// Feedback Widget for IPR EduGame
// Displays feedback after a user answers a question

class FeedbackWidget {
  final bool isCorrect;
  final String feedbackText;
  final Function()? onAnimationComplete;

  FeedbackWidget({
    required this.isCorrect,
    required this.feedbackText,
    this.onAnimationComplete,
  });

  // For demonstration purposes, we'll just return a string description
  String getDescription() {
    return '''
    Feedback Widget:
    - Correct: $isCorrect
    - Feedback Text: $feedbackText
    - Background Color: ${isCorrect ? "Green" : "Red"}
    - Animation: Slides up from bottom
    ''';
  }
}
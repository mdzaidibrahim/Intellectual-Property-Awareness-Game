// Question Model for IPR EduGame
// Represents a single question in the game

class Question {
  final String id;
  final String imageUrl;
  final String questionText;
  final List<Option> options;
  final String explanation;
  final String iprType; // trademark, copyright, patent, design
  final String difficulty; // basic, intermediate, advanced

  Question({
    required this.id,
    required this.imageUrl,
    required this.questionText,
    required this.options,
    required this.explanation,
    required this.iprType,
    required this.difficulty,
  });
}

class Option {
  final String text;
  final bool isCorrect;

  Option({
    required this.text,
    required this.isCorrect,
  });
}
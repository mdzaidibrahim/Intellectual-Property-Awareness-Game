// User Model for IPR EduGame
// Represents a user of the application

class User {
  final String id;
  final String? name;
  final int age;
  final DateTime createdAt;
  final Map<String, Progress> progress; // Module ID -> Progress

  User({
    required this.id,
    this.name,
    required this.age,
    required this.createdAt,
    required this.progress,
  });
}

class Progress {
  final String moduleId;
  final int score;
  final List<String> completedQuestions;
  final DateTime lastPlayed;

  Progress({
    required this.moduleId,
    required this.score,
    required this.completedQuestions,
    required this.lastPlayed,
  });
}
import 'package:flutter/material.dart';
import '../data/game_data.dart';

class StoryViewScreen extends StatefulWidget {
  final Story story;

  const StoryViewScreen({super.key, required this.story});

  @override
  State<StoryViewScreen> createState() => _StoryViewScreenState();
}

class _StoryViewScreenState extends State<StoryViewScreen> {
  bool isQuizMode = false;
  int currentQuestionIndex = 0;
  bool? isCorrect;
  bool showFeedback = false;

  void _startQuiz() {
    setState(() {
      isQuizMode = true;
    });
  }

  void _checkAnswer(bool correct) {
    setState(() {
      isCorrect = correct;
      showFeedback = true;
    });
  }

  void _nextQuestion() {
    if (currentQuestionIndex < widget.story.questions.length - 1) {
      setState(() {
        currentQuestionIndex++;
        isCorrect = null;
        showFeedback = false;
      });
    } else {
      // End of quiz
      showDialog(
        context: context,
        barrierDismissible: false,
        builder: (context) => AlertDialog(
          backgroundColor: Theme.of(context).colorScheme.surface,
          title: const Text('Story Completed!', style: TextStyle(color: Colors.white)),
          content: const Text(
            'You have finished this story module.',
            style: TextStyle(color: Colors.white70),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context); // Close dialog
                Navigator.pop(context); // Back to list
              },
              child: const Text('Done'),
            ),
          ],
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(isQuizMode ? 'Quiz' : 'Story'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20.0),
        child: isQuizMode ? _buildQuizView() : _buildStoryView(),
      ),
    );
  }

  Widget _buildStoryView() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          widget.story.title,
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Theme.of(context).colorScheme.secondary,
          ),
        ),
        const SizedBox(height: 20),
        Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.surface,
            borderRadius: BorderRadius.circular(16),
          ),
          child: Text(
            widget.story.story,
            style: const TextStyle(
              fontSize: 16,
              color: Colors.white,
              height: 1.6,
            ),
          ),
        ),
        const SizedBox(height: 30),
        ElevatedButton(
          onPressed: _startQuiz,
          style: ElevatedButton.styleFrom(
            padding: const EdgeInsets.all(20),
            backgroundColor: Theme.of(context).colorScheme.secondary,
            foregroundColor: Theme.of(context).colorScheme.primary,
          ),
          child: const Text(
            'Start Quiz',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildQuizView() {
    final question = widget.story.questions[currentQuestionIndex];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          'Question ${currentQuestionIndex + 1}/${widget.story.questions.length}',
          style: TextStyle(
            color: Colors.white.withOpacity(0.5),
            fontSize: 14,
          ),
        ),
        const SizedBox(height: 10),
        Text(
          question.question,
          style: const TextStyle(
            fontSize: 18,
            color: Colors.white,
            height: 1.5,
          ),
        ),
        const SizedBox(height: 30),
        if (!showFeedback) ...[
          ...question.options.map((option) => Padding(
                padding: const EdgeInsets.only(bottom: 15),
                child: ElevatedButton(
                  onPressed: () => _checkAnswer(option.correct),
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.all(20),
                    backgroundColor: Theme.of(context).colorScheme.surface,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                      side: BorderSide(
                        color: Colors.white.withOpacity(0.1),
                      ),
                    ),
                  ),
                  child: Text(
                    option.text,
                    style: const TextStyle(fontSize: 16),
                    textAlign: TextAlign.center,
                  ),
                ),
              )),
        ] else ...[
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: isCorrect!
                  ? Colors.green.withOpacity(0.2)
                  : Colors.red.withOpacity(0.2),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: isCorrect! ? Colors.green : Colors.red,
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  isCorrect! ? 'Correct!' : 'Incorrect',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: isCorrect! ? Colors.green : Colors.red,
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  isCorrect!
                      ? question.explanation.correct
                      : question.explanation.wrong,
                  style: const TextStyle(
                    fontSize: 16,
                    color: Colors.white,
                    height: 1.5,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: _nextQuestion,
            style: ElevatedButton.styleFrom(
              padding: const EdgeInsets.all(20),
              backgroundColor: Theme.of(context).colorScheme.secondary,
              foregroundColor: Theme.of(context).colorScheme.primary,
            ),
            child: Text(
              currentQuestionIndex < widget.story.questions.length - 1
                  ? 'Next Question'
                  : 'Finish Story',
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ],
    );
  }
}

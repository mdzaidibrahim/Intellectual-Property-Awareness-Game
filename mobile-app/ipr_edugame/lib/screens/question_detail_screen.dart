import 'package:flutter/material.dart';
import '../data/game_data.dart';

class QuestionDetailScreen extends StatefulWidget {
  final Question question;
  final int questionIndex;

  const QuestionDetailScreen({
    super.key,
    required this.question,
    required this.questionIndex,
  });

  @override
  State<QuestionDetailScreen> createState() => _QuestionDetailScreenState();
}

class _QuestionDetailScreenState extends State<QuestionDetailScreen> {
  bool? isCorrect;
  bool showFeedback = false;

  void _checkAnswer(bool correct) {
    setState(() {
      isCorrect = correct;
      showFeedback = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Question ${widget.questionIndex}'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
                fontSize: 18,
                color: Colors.white,
                height: 1.5,
              ),
            ),
            const SizedBox(height: 30),
            if (!showFeedback) ...[
              ...widget.question.options.map((option) => Padding(
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
                    Row(
                      children: [
                        Icon(
                          isCorrect! ? Icons.check_circle : Icons.error,
                          color: isCorrect! ? Colors.green : Colors.red,
                          size: 30,
                        ),
                        const SizedBox(width: 10),
                        Text(
                          isCorrect! ? 'Correct!' : 'Incorrect',
                          style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                            color: isCorrect! ? Colors.green : Colors.red,
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 15),
                    Text(
                      isCorrect!
                          ? widget.question.explanation.correct
                          : widget.question.explanation.wrong,
                      style: const TextStyle(
                        fontSize: 16,
                        color: Colors.white,
                        height: 1.5,
                      ),
                    ),
                    const SizedBox(height: 20),
                    Container(
                      padding: const EdgeInsets.all(15),
                      decoration: BoxDecoration(
                        color: Colors.black.withOpacity(0.3),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'KEY LEARNING',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: Theme.of(context).colorScheme.secondary,
                              letterSpacing: 1.2,
                            ),
                          ),
                          const SizedBox(height: 5),
                          Text(
                            widget.question.explanation.learning,
                            style: const TextStyle(
                              fontSize: 14,
                              color: Colors.white70,
                              fontStyle: FontStyle.italic,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: () => Navigator.pop(context),
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.all(20),
                  backgroundColor: Theme.of(context).colorScheme.secondary,
                  foregroundColor: Theme.of(context).colorScheme.primary,
                ),
                child: const Text(
                  'Back to List',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

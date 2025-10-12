import 'package:flutter/material.dart';

class GameScreen extends StatefulWidget {
  final String interestType;
  
  const GameScreen({super.key, required this.interestType});

  @override
  State<GameScreen> createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen> with TickerProviderStateMixin {
  int currentQuestionIndex = 0;
  bool showFeedback = false;
  bool isCorrectAnswer = false;
  String feedbackText = '';
  Color backgroundColor = Colors.white;
  late AnimationController _animationController;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: const Duration(milliseconds: 300),
      vsync: this,
    );
    _animation = Tween<double>(begin: 0.8, end: 1.0).animate(
      CurvedAnimation(parent: _animationController, curve: Curves.easeInOut),
    );
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  // Sample questions data for each category with different feedback for correct/incorrect answers
  Map<String, List<Map<String, dynamic>>> getQuestionsByCategory() {
    return {
      'cars': [
        {
          'imageUrl': 'assets/images/questions/car_question.jpg',
          'question': 'What is wrong with this image?',
          'options': [
            'Image is fine',
            'Car logo and car model is not matching'
          ],
          'correctAnswer': 1,
          'explanations': {
            'correct': 'Good job! You identified that the logo doesn\'t match the car. The logo shown is actually a Ferrari logo, but the car body is from a different manufacturer. Trademarks like logos help consumers identify the source of products. Using another company\'s trademark without permission is trademark infringement and can mislead consumers.',
            'incorrect': 'Actually, there IS something wrong with this image. The logo shown is a Ferrari logo, but the car body is from a different manufacturer. This is trademark infringement because it falsely suggests that Ferrari manufactured or endorsed this vehicle. Companies invest heavily in their trademarks to build brand recognition and consumer trust, so using another company\'s trademark without permission can mislead consumers and damage the trademark owner\'s reputation.'
          }
        }
      ],
      'digital': [
        {
          'imageUrl': 'assets/images/questions/digital_question.jpg',
          'question': 'What is wrong with this image?',
          'options': [
            'Image is fine',
            'Brand logo and device is not matching'
          ],
          'correctAnswer': 1,
          'explanations': {
            'correct': 'Excellent! You noticed that this Android phone has an Apple logo on it. This is a clear trademark mismatch. Apple\'s logo is a registered trademark, and placing it on a non-Apple device without permission is trademark infringement. Companies invest heavily in their brand identity, and unauthorized use of logos can confuse consumers and damage brand value.',
            'incorrect': 'This image is NOT fine! The device shown is clearly an Android phone, but it has an Apple logo on it. This is a classic example of trademark infringement. Apple\'s logo is a registered trademark that identifies Apple products. Using it on a non-Apple device falsely suggests that Apple manufactured or endorsed this product. This can confuse consumers and harm Apple\'s brand value, which is why trademark laws exist to protect both businesses and consumers.'
          }
        }
      ],
      'films': [
        {
          'imageUrl': 'assets/images/questions/film_question.jpg',
          'question': 'What is wrong with this image?',
          'options': [
            'Image is fine',
            'Movie studio logo and film is not matching'
          ],
          'correctAnswer': 1,
          'explanations': {
            'correct': 'Great observation! You identified that this movie poster has a Disney logo but the film content doesn\'t match Disney\'s typical family-friendly themes. Movie studio logos are powerful trademarks that help audiences identify the source and type of content they can expect. Using another studio\'s logo without permission can mislead viewers about the film\'s origin and content, which is trademark infringement.',
            'incorrect': 'There\'s definitely something wrong with this image! The movie poster shows content that doesn\'t match Disney\'s family-friendly brand, but it uses Disney\'s trademark logo. This is misleading to viewers who associate Disney with specific types of content. Movie studio logos are trademarks that help audiences know what to expect from a film. Using another studio\'s logo without permission falsely suggests endorsement or association, which can confuse viewers and damage the trademark owner\'s brand identity.'
          }
        }
      ]
    };
  }

  void checkAnswer(int selectedIndex) {
    // Trigger animation
    _animationController.forward().then((_) {
      _animationController.reverse();
    });
    
    final questions = getQuestionsByCategory()[widget.interestType] ?? [];
    if (questions.isEmpty) return;
    
    final question = questions[currentQuestionIndex];
    bool correct = selectedIndex == question['correctAnswer'];
    
    setState(() {
      showFeedback = true;
      isCorrectAnswer = correct;
      // Show different feedback based on whether the answer is correct or incorrect
      feedbackText = correct 
        ? question['explanations']['correct'] 
        : question['explanations']['incorrect'];
      // Even darker green and red colors
      backgroundColor = correct ? const Color(0xFF388E3C) : const Color(0xFFD32F2F);
    });
    
    // Hide feedback after 5 seconds
    Future.delayed(const Duration(seconds: 5), () {
      if (mounted) {
        setState(() {
          showFeedback = false;
          backgroundColor = Colors.white;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final questions = getQuestionsByCategory()[widget.interestType] ?? [];
    if (questions.isEmpty) {
      return Scaffold(
        appBar: AppBar(
          title: Text('${widget.interestType.toUpperCase()} - Trademark Challenge'),
          backgroundColor: Colors.blueAccent,
          foregroundColor: Colors.white,
        ),
        body: const Center(
          child: Text('No questions available for this category'),
        ),
      );
    }
    
    final question = questions[currentQuestionIndex];
    
    return Scaffold(
      backgroundColor: backgroundColor,
      appBar: AppBar(
        title: Text('${widget.interestType.toUpperCase()} - Trademark Challenge'),
        backgroundColor: Colors.blueAccent,
        foregroundColor: Colors.white,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Question text
            Text(
              question['question'],
              style: const TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.bold,
                color: Colors.black87,
              ),
            ),
            const SizedBox(height: 15),
            
            // Question image
            ScaleTransition(
              scale: _animation,
              child: Container(
                height: 200,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withValues(alpha: 0.3),
                      spreadRadius: 3,
                      blurRadius: 7,
                      offset: const Offset(0, 3),
                    ),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(15),
                  child: Image.asset(
                    question['imageUrl'],
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return Container(
                        color: Colors.grey[300],
                        child: const Center(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Icon(
                                Icons.broken_image,
                                color: Colors.grey,
                                size: 50,
                              ),
                              SizedBox(height: 10),
                              Text(
                                'Image not found\nPlace images in assets/images/questions/',
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: Colors.grey,
                                  fontSize: 12,
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(height: 20),
            
            // Options
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  for (int i = 0; i < question['options'].length; i++)
                    Container(
                      width: double.infinity,
                      margin: const EdgeInsets.symmetric(vertical: 10),
                      child: ElevatedButton(
                        onPressed: showFeedback ? null : () {
                          _animationController.forward().then((_) {
                            _animationController.reverse();
                          });
                          checkAnswer(i);
                        },
                        style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.all(20),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(15),
                          ),
                          backgroundColor: Colors.blue,
                          elevation: 5,
                          shadowColor: Colors.blue.withValues(alpha: 0.5),
                          foregroundColor: Colors.white,
                        ),
                        child: Text(
                          question['options'][i],
                          style: const TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
            
            // Feedback section - Fixed overflow issue
            if (showFeedback)
              Container(
                constraints: const BoxConstraints(maxHeight: 150), // Limit height to prevent overflow
                margin: const EdgeInsets.only(top: 20),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(15),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withValues(alpha: 0.3),
                      spreadRadius: 2,
                      blurRadius: 5,
                      offset: const Offset(0, 3),
                    ),
                  ],
                  border: Border.all(
                    // Even darker border colors
                    color: isCorrectAnswer ? const Color(0xFF1B5E20) : const Color(0xFFB71C1C),
                    width: 3,
                  ),
                ),
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(20),
                  child: Text(
                    feedbackText,
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: isCorrectAnswer ? FontWeight.bold : FontWeight.normal,
                      color: isCorrectAnswer ? const Color(0xFF1B5E20) : const Color(0xFFB71C1C),
                    ),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../data/game_data.dart';
import 'question_list_screen.dart';
import '../widgets/animated_background.dart';
import '../widgets/glass_card.dart';

class LevelOneScreen extends StatelessWidget {
  const LevelOneScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: const Text('Fundamentals'),
      ),
      body: AnimatedBackground(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: 100),
              const Text(
                'Choose a Category',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  letterSpacing: 1.2,
                ),
                textAlign: TextAlign.center,
              ).animate().fadeIn(duration: 600.ms).moveY(begin: 20, end: 0),
              const SizedBox(height: 30),
              Expanded(
                child: GridView.count(
                  crossAxisCount: 2,
                  mainAxisSpacing: 20,
                  crossAxisSpacing: 20,
                  children: [
                    _buildCategoryCard(
                      context,
                      title: 'Cars',
                      icon: Icons.directions_car_filled,
                      color: Colors.redAccent,
                      delay: 200,
                      onTap: () => _navigateToQuestions(context, 'cars', 'Cars'),
                    ),
                    _buildCategoryCard(
                      context,
                      title: 'Gadgets',
                      icon: Icons.devices_other,
                      color: Colors.blueAccent,
                      delay: 400,
                      onTap: () => _navigateToQuestions(context, 'gadgets', 'Gadgets'),
                    ),
                    _buildCategoryCard(
                      context,
                      title: 'Movies',
                      icon: Icons.movie_filter,
                      color: Colors.orangeAccent,
                      delay: 600,
                      onTap: () => _navigateToQuestions(context, 'movies', 'Movies'),
                    ),
                    _buildCategoryCard(
                      context,
                      title: 'Bikes',
                      icon: Icons.two_wheeler,
                      color: Colors.greenAccent,
                      delay: 800,
                      onTap: () => _navigateToQuestions(context, 'bikes', 'Bikes'),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildCategoryCard(
    BuildContext context, {
    required String title,
    required IconData icon,
    required Color color,
    required int delay,
    required VoidCallback onTap,
  }) {
    return GlassCard(
      onTap: onTap,
      padding: const EdgeInsets.all(15),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            padding: const EdgeInsets.all(15),
            decoration: BoxDecoration(
              color: color.withOpacity(0.2),
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: color.withOpacity(0.4),
                  blurRadius: 20,
                  spreadRadius: 2,
                ),
              ],
            ),
            child: Icon(
              icon,
              size: 40,
              color: color,
            ),
          )
              .animate(onPlay: (controller) => controller.repeat(reverse: true))
              .scale(begin: const Offset(1, 1), end: const Offset(1.1, 1.1), duration: 1500.ms),
          const SizedBox(height: 15),
          Text(
            title,
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
        ],
      ),
    )
        .animate()
        .fadeIn(delay: delay.ms, duration: 600.ms)
        .scale(begin: const Offset(0.8, 0.8), end: const Offset(1, 1), curve: Curves.easeOutBack);
  }

  void _navigateToQuestions(BuildContext context, String categoryKey, String title) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => QuestionListScreen(
          questions: GameData.level1[categoryKey]!,
          title: title,
        ),
      ),
    );
  }
}

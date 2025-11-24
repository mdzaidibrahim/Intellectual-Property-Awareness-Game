import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import '../data/game_data.dart';
import 'level_one_screen.dart';
import 'question_list_screen.dart';
import 'story_list_screen.dart';
import '../widgets/animated_background.dart';
import '../widgets/glass_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: const Text('IPR Master'),
      ),
      body: AnimatedBackground(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: 100),
              const Text(
                'Select a Level',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  letterSpacing: 1.5,
                ),
                textAlign: TextAlign.center,
              ).animate().fadeIn(duration: 600.ms).moveY(begin: 20, end: 0),
              const SizedBox(height: 40),
              _buildLevelCard(
                context,
                level: '1',
                title: 'Fundamentals',
                subtitle: 'Cars, Gadgets, Movies, Bikes',
                icon: Icons.school_outlined,
                color: Colors.cyanAccent,
                delay: 200,
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const LevelOneScreen()),
                  );
                },
              ),
              const SizedBox(height: 20),
              _buildLevelCard(
                context,
                level: '2',
                title: 'Mixed Challenge',
                subtitle: 'Test your knowledge across categories',
                icon: Icons.shuffle,
                color: Colors.purpleAccent,
                delay: 400,
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => QuestionListScreen(
                        questions: GameData.level2,
                        title: 'Mixed Challenge',
                      ),
                    ),
                  );
                },
              ),
              const SizedBox(height: 20),
              _buildLevelCard(
                context,
                level: '3',
                title: 'Real Stories',
                subtitle: 'Learn from famous IP cases',
                icon: Icons.auto_stories,
                color: Colors.amberAccent,
                delay: 600,
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const StoryListScreen()),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildLevelCard(
    BuildContext context, {
    required String level,
    required String title,
    required String subtitle,
    required IconData icon,
    required Color color,
    required int delay,
    required VoidCallback onTap,
  }) {
    return GlassCard(
      onTap: onTap,
      child: Row(
        children: [
          Container(
            width: 70,
            height: 70,
            decoration: BoxDecoration(
              color: color.withOpacity(0.2),
              shape: BoxShape.circle,
              border: Border.all(color: color.withOpacity(0.5)),
              boxShadow: [
                BoxShadow(
                  color: color.withOpacity(0.3),
                  blurRadius: 15,
                  spreadRadius: 2,
                ),
              ],
            ),
            child: Center(
              child: Icon(
                icon,
                size: 32,
                color: color,
              ),
            ),
          ),
          const SizedBox(width: 20),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 5),
                Text(
                  subtitle,
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.white.withOpacity(0.7),
                  ),
                ),
              ],
            ),
          ),
          Icon(
            Icons.arrow_forward_ios,
            color: Colors.white.withOpacity(0.5),
            size: 20,
          ),
        ],
      ),
    )
        .animate()
        .fadeIn(delay: delay.ms, duration: 600.ms)
        .moveX(begin: 50, end: 0, curve: Curves.easeOut);
  }
}
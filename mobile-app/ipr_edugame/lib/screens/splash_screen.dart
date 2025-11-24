import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:google_fonts/google_fonts.dart';
import 'home_screen.dart';
import '../widgets/animated_background.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(seconds: 3), () {
      Navigator.pushReplacement(
        context,
        PageRouteBuilder(
          pageBuilder: (context, animation, secondaryAnimation) => const HomeScreen(),
          transitionsBuilder: (context, animation, secondaryAnimation, child) {
            return FadeTransition(opacity: animation, child: child);
          },
          transitionDuration: const Duration(milliseconds: 800),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AnimatedBackground(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                padding: const EdgeInsets.all(30),
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Colors.white.withOpacity(0.1),
                  border: Border.all(color: Colors.white.withOpacity(0.2), width: 2),
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xFF4338CA).withOpacity(0.5),
                      blurRadius: 50,
                      spreadRadius: 10,
                    ),
                  ],
                ),
                child: const Icon(
                  Icons.lightbulb_outline,
                  size: 80,
                  color: Colors.white,
                ),
              )
                  .animate()
                  .scale(duration: 600.ms, curve: Curves.easeOutBack)
                  .shimmer(delay: 600.ms, duration: 1200.ms, color: const Color(0xFFEC4899)),
              const SizedBox(height: 30),
              Text(
                'IPR MASTER',
                style: GoogleFonts.outfit(
                  fontSize: 40,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  letterSpacing: 5,
                ),
              )
                  .animate()
                  .fadeIn(delay: 400.ms, duration: 600.ms)
                  .moveY(begin: 20, end: 0, curve: Curves.easeOut),
              const SizedBox(height: 10),
              Text(
                'Learn. Protect. Innovate.',
                style: GoogleFonts.outfit(
                  fontSize: 16,
                  color: Colors.white70,
                  letterSpacing: 2,
                ),
              )
                  .animate()
                  .fadeIn(delay: 800.ms, duration: 600.ms),
            ],
          ),
        ),
      ),
    );
  }
}

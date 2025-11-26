import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';

class AnimatedBackground extends StatelessWidget {
  final Widget child;

  const AnimatedBackground({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Color(0xFF0F172A),
                Color(0xFF1E1B4B),
                Color(0xFF312E81),
                Color(0xFF0F172A),
              ],
            ),
          ),
        )
            .animate(onPlay: (controller) => controller.repeat(reverse: true))
            .shimmer(duration: 3000.ms, color: const Color(0xFF4338CA).withOpacity(0.2))
            .saturate(duration: 3000.ms, begin: 0.8, end: 1.2),
        Positioned.fill(
          child: Container(
            decoration: BoxDecoration(
              gradient: RadialGradient(
                center: Alignment.topLeft,
                radius: 1.5,
                colors: [
                  const Color(0xFF4338CA).withOpacity(0.3),
                  Colors.transparent,
                ],
              ),
            ),
          ).animate(onPlay: (controller) => controller.repeat(reverse: true)).scale(
                begin: const Offset(1, 1),
                end: const Offset(1.5, 1.5),
                duration: 4000.ms,
              ),
        ),
        Positioned.fill(
          child: Container(
            decoration: BoxDecoration(
              gradient: RadialGradient(
                center: Alignment.bottomRight,
                radius: 1.5,
                colors: [
                  const Color(0xFFEC4899).withOpacity(0.3),
                  Colors.transparent,
                ],
              ),
            ),
          ).animate(onPlay: (controller) => controller.repeat(reverse: true)).scale(
                begin: const Offset(1.5, 1.5),
                end: const Offset(1, 1),
                duration: 4000.ms,
              ),
        ),
        child,
      ],
    );
  }
}

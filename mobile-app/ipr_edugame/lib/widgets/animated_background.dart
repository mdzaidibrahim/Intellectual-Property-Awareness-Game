import 'package:flutter/material.dart';
import 'package:simple_animations/simple_animations.dart';

class AnimatedBackground extends StatelessWidget {
  final Widget child;

  const AnimatedBackground({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned.fill(
          child: Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Color(0xFF0F172A),
                  Color(0xFF1E1B4B),
                ],
              ),
            ),
          ),
        ),
        Positioned.fill(
          child: PlasmaRenderer(
            type: PlasmaType.infinity,
            particles: 10,
            color: const Color(0xFF4338CA),
            blur: 0.4,
            size: 1.0,
            speed: 1.0,
            offset: 0,
            blendMode: BlendMode.plus,
            particleType: ParticleType.atlas,
            variation1: 0,
            variation2: 0,
            variation3: 0,
            rotation: 0,
          ),
        ),
        Positioned.fill(
          child: PlasmaRenderer(
            type: PlasmaType.infinity,
            particles: 10,
            color: const Color(0xFFEC4899),
            blur: 0.4,
            size: 0.5,
            speed: 1.0,
            offset: 0,
            blendMode: BlendMode.plus,
            particleType: ParticleType.atlas,
            variation1: 0,
            variation2: 0,
            variation3: 0,
            rotation: 0,
          ),
        ),
        child,
      ],
    );
  }
}

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/splash_screen.dart';

void main() {
  runApp(const IPRGameApp());
}

class IPRGameApp extends StatelessWidget {
  const IPRGameApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'IPR EduGame',
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF4338CA),
          brightness: Brightness.dark,
          primary: const Color(0xFF4338CA),
          secondary: const Color(0xFFEC4899),
          background: const Color(0xFF0F172A),
          surface: const Color(0xFF1E1B4B),
        ),
        scaffoldBackgroundColor: const Color(0xFF0F172A),
        textTheme: GoogleFonts.outfitTextTheme(
          ThemeData.dark().textTheme,
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.transparent,
          elevation: 0,
          centerTitle: true,
        ),
      ),
      home: const SplashScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
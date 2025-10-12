# IPR EduGame - Mobile App

An interactive educational mobile application designed to teach school students about Intellectual Property Rights (IPRs) including Patents, Trademarks, Copyrights, and Designs.

## Project Structure

```
lib/
├── main.dart                 # Entry point of the application
├── screens/
│   ├── home_screen.dart      # Main home screen
│   ├── interest_selection_screen.dart  # Interest selection screen
│   └── game_screen.dart      # Main game screen
├── widgets/
│   ├── option_box.dart       # Option box widget
│   └── feedback_widget.dart  # Feedback display widget
├── models/
│   ├── question.dart         # Question data model
│   └── user.dart             # User data model
└── services/
    └── ipr_service.dart      # IPR data service
```

## Technology Stack

- **Framework**: Flutter
- **Language**: Dart
- **Backend**: Firebase (planned)
- **State Management**: Provider (planned)

## Development Setup

This is a conceptual structure for the IPR EduGame mobile application. To actually implement this app, you would need to:

1. Install Flutter SDK
2. Create a new Flutter project
3. Replace the default files with the ones in this structure
4. Add Firebase configuration for backend services
5. Implement the UI components using Flutter widgets

## App Features

### Current Structure (Conceptual)
1. **Home Screen**: Introduction to the app
2. **Interest Selection**: Choose from Cars, Digital Gadgets, or Films
3. **Game Screen**: Interactive IPR questions with visual feedback
4. **Data Models**: Question, User, and Progress tracking
5. **Services**: IPR data handling

### Planned Features
1. **Full IPR Coverage**: Patents, Trademarks, Copyrights, and Designs
2. **Progression System**: Basic → Intermediate → Advanced levels
3. **Scoreboard**: Track user progress and achievements
4. **Progress Map**: Visual representation of completed modules
5. **Educational Content**: Factual tidbits and quick recaps
6. **Teacher Dashboard**: Classroom management tools

## Development Phases

### Phase 1: MVP (Minimum Viable Product)
- Implement the trademark module for cars
- Create basic UI with Flutter widgets
- Add local data storage
- Implement visual feedback system

### Phase 2: Full IPR Modules
- Add Copyright, Patent, and Design modules
- Implement Firebase backend for data storage
- Add user authentication
- Create progression system

### Phase 3: Advanced Features
- Implement scoreboard and achievements
- Add teacher dashboard
- Create progress map visualization
- Add offline functionality

## Learning Outcomes

Upon completing the IPR EduGame, students will:
- Understand the basic concepts of intellectual property rights
- Be able to identify different types of IPR in real-world scenarios
- Recognize instances of IP infringement
- Develop critical thinking skills for IP-related decisions
- Gain awareness of the importance of protecting intellectual property

## Future Enhancements

- Multiplayer competitive modes
- AR/VR integration for immersive learning
- AI-powered personalized learning paths
- Multi-language support
- Integration with school learning management systems
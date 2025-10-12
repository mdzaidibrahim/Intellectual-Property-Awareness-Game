# IPR EduGame - Intellectual Property Rights Education Game

An interactive educational game designed to teach school students about Intellectual Property Rights (IPRs) including Patents, Trademarks, Copyrights, and Designs through gamification.

## Project Overview

This repository contains both a working web prototype and comprehensive planning documentation for a mobile application version of the IPR EduGame. The project was created as part of the CIPAM initiative to develop educational tools for IP awareness at the school level.

## Current Implementation (Web Prototype)

The repository includes a functional web-based prototype that demonstrates the core concept:

- Interest selection screen with three options (Cars, Digital Gadgets, Films)
- Trademark recognition activity with visual feedback
- Educational content delivery
- Responsive design for different screen sizes

### Try the Web Prototype

To view the current web prototype:
```bash
# Navigate to the project directory
cd d:\AppProjects\game

# Open index.html in your browser
start index.html
```

## Planned Mobile Application

We have created comprehensive documentation and a conceptual structure for a mobile application version with enhanced features:

### Technology Stack
- **Frontend**: Flutter (Dart)
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Deployment**: Google Play Store and Apple App Store

### Key Features
1. **Four IPR Modules**:
   - Trademarks: Brand and logo recognition
   - Copyrights: Creative work identification
   - Patents: Invention evaluation
   - Designs: Ornamental design recognition

2. **Progression System**:
   - Three difficulty levels (Basic, Intermediate, Advanced)
   - Scoring mechanism with achievements
   - Progress tracking and visualization

3. **Educational Enhancements**:
   - Factual titbits and quick recaps
   - Scoreboard functionality
   - Progress map visualization

4. **Social Features**:
   - Classroom management tools
   - Teacher dashboard
   - Assignment distribution system

## Repository Structure

```
├── index.html              # Web prototype main file
├── style.css               # Web prototype styling
├── script.js               # Web prototype game logic
├── README.md               # This file
├── SUMMARY.md              # Project summary
├── GETTING_STARTED.md      # Implementation guide
├── PROJECT_STRUCTURE.md    # Complete project structure
├── transition-plan.md      # Web to mobile transition strategy
├── expansion-plan.md       # Future enhancement roadmap
├── game-structure.md       # Game flow diagram
├── user-flow.md            # User interaction diagram
├── project-overview.md     # Project structure diagram
├── mobile-app/             # Mobile app planning documents
│   ├── technical-spec.md   # Technical specifications
│   ├── project-plan.md     # Development timeline
│   ├── requirements.md     # Functional requirements
│   ├── development-setup.md # Environment setup guide
│   ├── implementation-summary.md # Implementation overview
│   └── ipr_edugame/        # Conceptual Flutter structure
│       ├── README.md       # Mobile app documentation
│       └── lib/            # Source code structure
│           ├── main.dart   # App entry point
│           ├── screens/    # UI screens
│           ├── widgets/    # Reusable components
│           ├── models/     # Data models
│           └── services/   # Business logic
```

## Development Phases

### Phase 1: MVP (8 weeks)
- Environment setup and basic structure
- Interest selection interface
- Trademark recognition game (Cars focus)
- Visual feedback system
- Educational content delivery
- Initial user testing

### Phase 2: Full IPR Coverage (12 weeks)
- Copyright recognition activities
- Patent evaluation challenges
- Design identification tasks
- Integration of all modules
- Comprehensive testing

### Phase 3: Advanced Features (8 weeks)
- User authentication and profiles
- Scoreboard and achievements
- Teacher dashboard
- Final optimization and deployment preparation

## Getting Started with Implementation

For detailed implementation instructions, see [GETTING_STARTED.md](GETTING_STARTED.md).

### Prerequisites
- Flutter SDK (3.10 or later)
- Android Studio or Visual Studio Code
- Firebase account
- Git for version control

### Quick Start
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd ipr-edugame

# Follow the detailed setup guide in GETTING_STARTED.md
```

## Educational Impact

Upon completing the IPR EduGame, students will:
1. Understand the basic concepts of intellectual property rights
2. Be able to identify different types of IPR in real-world scenarios
3. Recognize instances of IP infringement
4. Develop critical thinking skills for IP-related decisions
5. Gain awareness of the importance of protecting intellectual property

## Contributing

We welcome contributions to this project! Please see our development documentation for guidelines on how to contribute.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Developed for CIPAM - Intellectual Property Awareness at School Level
- Inspired by the need for engaging educational tools for complex legal concepts
- Designed with input from educational professionals and students
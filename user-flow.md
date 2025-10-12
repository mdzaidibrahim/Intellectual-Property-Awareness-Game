```mermaid
graph TD
    A[Game Start] --> B[Landing Page]
    B --> C{Select Interest}
    C -->|Cars| D[Trademark Question]
    C -->|Digital/Films| E[Coming Soon Message]
    D --> F[View Image with Logo Mismatch]
    F --> G{Answer Question}
    G -->|Image is fine| H[Red Background - Wrong]
    G -->|Logo mismatch| I[Green Background - Correct]
    H --> J[Show Educational Feedback]
    I --> J[Show Educational Feedback]
    J --> K[Game Completion]
    K --> L[Understanding of Trademarks]
```
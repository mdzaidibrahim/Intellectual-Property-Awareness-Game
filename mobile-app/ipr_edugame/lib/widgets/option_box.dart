// Option Box Widget for IPR EduGame
// Represents a selectable option in the game

class OptionBox {
  final String text;
  final bool isSelected;
  final Function()? onTap;

  OptionBox({
    required this.text,
    this.isSelected = false,
    this.onTap,
  });

  // For demonstration purposes, we'll just return a string description
  String getDescription() {
    return '''
    Option Box Widget:
    - Text: $text
    - Selected: $isSelected
    - OnTap: ${onTap != null ? "Function assigned" : "No function"}
    ''';
  }
}
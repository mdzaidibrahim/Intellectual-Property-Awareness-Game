// Game logic for IPR Education Game

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const landingContent = document.getElementById('landing-content');
    const questionContent = document.getElementById('question-content');
    const questionImage = document.getElementById('question-image');
    const optionButtons = document.querySelectorAll('.option-btn');
    const feedbackText = document.getElementById('feedback-text');
    const heroSection = document.querySelector('.hero-section');
    const interestBoxes = document.querySelectorAll('.option-box');

    // Car question data - using a more appropriate image that shows a trademark mismatch
    const carQuestion = {
        image: 'https://images.unsplash.com/photo-1570383704809-0329878023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        options: [
            { text: 'Image is fine', correct: false },
            { text: 'Car logo and car model is not matching', correct: true }
        ],
        feedback: "Good job! You identified that the logo doesn't match the car. The logo shown is actually a Ferrari logo, but the car body is from a different manufacturer. Trademarks like logos help consumers identify the source of products. Using another company's trademark without permission is trademark infringement and can mislead consumers."
    };

    // Event listener for interest selection
    interestBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const interest = this.getAttribute('data-interest');
            
            // For MVP, we only handle cars
            if (interest === 'cars') {
                startCarGame();
            } else {
                // For other interests, we could show a coming soon message
                alert(`The ${interest} module is coming soon! For now, please select Cars.`);
            }
        });
    });

    // Function to start the car game
    function startCarGame() {
        // Hide landing content and show question
        landingContent.classList.add('hidden');
        questionContent.classList.remove('hidden');
        
        // Set the question image
        questionImage.src = carQuestion.image;
        questionImage.alt = "Car with trademark mismatch";
    }

    // Event listeners for answer options
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.getAttribute('data-answer');
            
            // Check if answer is correct
            const isCorrect = (answer === 'correct');
            
            // Apply visual feedback
            if (isCorrect) {
                heroSection.classList.add('correct');
                heroSection.classList.remove('wrong');
            } else {
                heroSection.classList.add('wrong');
                heroSection.classList.remove('correct');
            }
            
            // Show feedback text after a delay
            setTimeout(() => {
                feedbackText.textContent = carQuestion.feedback;
                feedbackText.classList.remove('hidden');
                
                // Add animation effect
                feedbackText.style.opacity = '0';
                feedbackText.style.transform = 'translateY(20px)';
                
                // Trigger reflow
                void feedbackText.offsetWidth;
                
                // Animate in
                feedbackText.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                feedbackText.style.opacity = '1';
                feedbackText.style.transform = 'translateY(0)';
            }, 1000);
        });
    });
});
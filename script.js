document.addEventListener('DOMContentLoaded', () => {
    // State
    const state = {
        currentLevel: null,
        currentCategory: null,
        currentQuestionIndex: null,
        currentStoryId: null,
        currentStoryQuestionIndex: 0,
        questions: []
    };

    // DOM Elements
    const screens = {
        home: document.getElementById('home-screen'),
        category: document.getElementById('category-screen'),
        questionList: document.getElementById('question-list-screen'),
        questionDetail: document.getElementById('question-detail-screen'),
        storyList: document.getElementById('story-list-screen'),
        storyView: document.getElementById('story-view-screen'),
        storyQuiz: document.getElementById('story-quiz-screen')
    };

    const homeBtn = document.getElementById('home-btn');

    // Navigation Helper
    function showScreen(screenId) {
        Object.values(screens).forEach(screen => screen.classList.add('hidden'));
        screens[screenId].classList.remove('hidden');
        screens[screenId].classList.add('active'); // For animations

        if (screenId === 'home') {
            homeBtn.classList.add('hidden');
        } else {
            homeBtn.classList.remove('hidden');
        }
    }

    // Event Listeners
    homeBtn.addEventListener('click', () => {
        resetState();
        showScreen('home');
    });

    // Level Selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            const level = parseInt(card.dataset.level);
            state.currentLevel = level;

            if (level === 1) {
                showScreen('category');
            } else if (level === 2) {
                loadQuestionList(GAME_DATA.level2, 'Mixed Challenge');
            } else if (level === 3) {
                loadStoryList();
            }
        });
    });

    // Category Selection (Level 1)
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            state.currentCategory = category;
            loadQuestionList(GAME_DATA.level1[category], capitalize(category));
        });
    });

    // Load Question List (Level 1 & 2)
    function loadQuestionList(questions, title) {
        state.questions = questions;
        document.getElementById('list-title').textContent = `${title} - Select a Question`;
        const grid = document.getElementById('question-grid');
        grid.innerHTML = '';

        questions.forEach((q, index) => {
            const btn = document.createElement('button');
            btn.className = 'question-btn';
            btn.textContent = `Q${index + 1}`;
            btn.onclick = () => loadQuestion(index);
            grid.appendChild(btn);
        });

        showScreen('questionList');
    }

    // Load Single Question (Level 1 & 2)
    function loadQuestion(index) {
        state.currentQuestionIndex = index;
        const q = state.questions[index];

        document.getElementById('q-image').src = q.image;
        document.getElementById('q-text').textContent = q.question;

        const optionsContainer = document.getElementById('q-options');
        optionsContainer.innerHTML = '';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.onclick = () => handleAnswer(opt, q.explanation);
            optionsContainer.appendChild(btn);
        });

        document.getElementById('q-feedback').classList.add('hidden');
        showScreen('questionDetail');
    }

    // Handle Answer (Level 1 & 2)
    function handleAnswer(option, explanation) {
        const feedbackArea = document.getElementById('q-feedback');
        const feedbackContent = document.getElementById('feedback-content');

        feedbackArea.classList.remove('hidden');

        if (option.correct) {
            feedbackArea.className = 'feedback-area correct';
            feedbackContent.innerHTML = `
                <h3>Correct!</h3>
                <p>${explanation.correct}</p>
                <div class="learning-box">
                    <strong>Key Learning:</strong> ${explanation.learning}
                </div>
            `;
        } else {
            feedbackArea.className = 'feedback-area wrong';
            feedbackContent.innerHTML = `
                <h3>Incorrect</h3>
                <p>${explanation.wrong}</p>
                <div class="learning-box">
                    <strong>Key Learning:</strong> ${explanation.learning}
                </div>
            `;
        }
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        showScreen('questionList');
    });

    // Level 3: Story List
    function loadStoryList() {
        const grid = document.getElementById('story-grid');
        grid.innerHTML = '';

        GAME_DATA.level3.forEach(story => {
            const card = document.createElement('div');
            card.className = 'story-card';
            card.innerHTML = `<h3>${story.title}</h3>`;
            card.onclick = () => loadStoryView(story);
            grid.appendChild(card);
        });

        showScreen('storyList');
    }

    // Level 3: Story View
    function loadStoryView(story) {
        state.currentStoryId = story.id;
        document.getElementById('story-title').textContent = story.title;
        document.getElementById('story-content').textContent = story.story;

        document.getElementById('start-story-quiz-btn').onclick = () => startStoryQuiz(story);

        showScreen('storyView');
    }

    // Level 3: Quiz
    function startStoryQuiz(story) {
        state.currentStoryQuestionIndex = 0;
        loadStoryQuestion(story);
        showScreen('storyQuiz');
    }

    function loadStoryQuestion(story) {
        const q = story.questions[state.currentStoryQuestionIndex];
        document.getElementById('quiz-progress').textContent = `Question ${state.currentStoryQuestionIndex + 1}/${story.questions.length}`;
        document.getElementById('sq-text').textContent = q.question;

        const optionsContainer = document.getElementById('sq-options');
        optionsContainer.innerHTML = '';

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.onclick = () => handleStoryAnswer(opt, q.explanation, story);
            optionsContainer.appendChild(btn);
        });

        document.getElementById('sq-feedback').classList.add('hidden');
    }

    function handleStoryAnswer(option, explanation, story) {
        const feedbackArea = document.getElementById('sq-feedback');
        const feedbackContent = document.getElementById('sq-feedback-content');
        const nextBtn = document.getElementById('sq-next-btn');

        feedbackArea.classList.remove('hidden');

        if (option.correct) {
            feedbackArea.className = 'feedback-area correct';
            feedbackContent.innerHTML = `<p>${explanation.correct}</p>`;
        } else {
            feedbackArea.className = 'feedback-area wrong';
            feedbackContent.innerHTML = `<p>${explanation.wrong}</p>`;
        }

        nextBtn.onclick = () => {
            state.currentStoryQuestionIndex++;
            if (state.currentStoryQuestionIndex < story.questions.length) {
                loadStoryQuestion(story);
            } else {
                alert("Story Completed!");
                loadStoryList();
            }
        };
    }

    // Utilities
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function resetState() {
        state.currentLevel = null;
        state.currentCategory = null;
        state.currentQuestionIndex = null;
    }
});
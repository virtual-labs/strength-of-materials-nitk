// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p>study and take quiz</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The property of a material that resists penetration or indentation by means of abrasion or scratching is known as",
            "a": [
                {"option": "Strength",      "correct": false},
                {"option": "Hardness",     "correct": true},
                {"option": "Toughness",      "correct": false },
                {"option": "Brittleness",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Hardness</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In Brinell test indentor used is",
            "a": [
                {"option": "Hardened steel ball",   "correct": true},
                {"option": "Copper ball",   "correct": false},
                {"option": "Diamond point",    "correct": false},
                {"option": "Silver ball", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Hardened steel ball</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Time up to which load has to be maintained in experiment is",
 
            "a": [
                {"option": "10 to 15 seconds",           "correct": true},
                {"option": "5 to 10 seconds",              "correct": false},
                {"option": "15 to 20 seconds",  "correct": false},
                {"option": "20 to 25 seconds",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong, </br>Ans: 10 to 15 seconds</p>" // no comma here
        },
		{ // Question 4- Multiple Choice, Multiple True Answers, Select All
            "q": "What is the minimum thickness of the specimen required?",
 
            "a": [
                {"option": "5 times depth of indentation",           "correct": false},
                {"option": "8 times depth of indentation",              "correct": true},
                {"option": "15 times depth of indentation",  "correct": false},
                {"option": "20 times depth of indentation",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong, </br>Ans: 8 times depth of indentation</p>" // no comma here
        },
		{ // Question 5 Multiple Choice, Multiple True Answers, Select All
            "q": "What is the diameter of the impression?",
 
            "a": [
                {"option": "1.3D-1.5D",           "correct": false},
                {"option": "0.1D",              "correct": false},
                {"option": "0.2D-0.7D",  "correct": true},
                {"option": "0.7D-1.3D",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 0.2D-0.7D </p>" // no comma here
        }
   // no comma here
    ]
};

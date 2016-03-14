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
            "q": "What kind of notch is used in the test piece in an Izod impact test?<br>",
            "a": [
                {"option": "V-notch",      "correct": true},
                {"option": "U-notch",     "correct": false},
				{"option": "T-notch",   "correct": false},
                {"option": "No cut",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: V-notch </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The test piece is placed in such a way that the notch is facing<br>",
            "a": [
                {"option": "Up",   "correct": false},
                {"option": "Away from striking edge",   "correct": true},
                {"option": "Towards the striking edge",    "correct": false},
                {"option": "Down", "correct": false} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: Away from the striking edge</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Notches are used _____.</br>",
 
            "a": [
                {"option": "To minimize plastic deformation",           "correct": false},
                {"option": "As a stress concentration region",              "correct": false},
                {"option": "Easy breakage",  "correct": false},
                {"option": "All the above",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: All the above</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the angle at the tip of the hammer?",
 
            "a": [
                {"option": "90 degree ",           "correct": false},
                {"option": "45 degree",              "correct": true},
                {"option": "30 degree",  "correct": false},
                {"option": "60 degree",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: 45 degree</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "In Izod test specimen, the angle of V-notch section is",
 
            "a": [
                {"option": "30 degree ",           "correct": false},
                {"option": "45 degree",              "correct": false},
                {"option": "60 degree",  "correct": true},
                {"option": "90 degree",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: 45 degree</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which property of metals is essential for application such as gears and crankshaft which are subjected to impact loading?",
 
            "a": [
                {"option": "Toughness ",           "correct": true},
                {"option": "Hardness",              "correct": false},
                {"option": "Ductility",  "correct": false},
                {"option": "Malleability",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: Toughness</p>" // no comma here
        }
		
		
   // no comma here
    ]
};

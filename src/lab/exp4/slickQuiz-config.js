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
            "q": "If the width of a simply supported beam carrying an isolated load at its centre is doubled, the deflection of the beam at the centre is changed by<br>",
            "a": [
                {"option": "1/2",      "correct": true},
                {"option": "2",     "correct": false},
				{"option": "4",   "correct": false},
                {"option": "1/8",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: 1/2 </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The maximum bending moment due to a moving load on a simply supported beam, occurs<br>",
            "a": [
                {"option": "At the mid span",   "correct": false},
                {"option": "At the supports",   "correct": false},
                {"option": "Under the load",    "correct": true},
                {"option": "Anywhere on the beam", "correct": false} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans: Under the load</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The deflection of a simply supported beam loaded with point load at its centre is</br>",
 
            "a": [
                {"option": "(FL^3)/8EI",           "correct": false},
                {"option": "(FL^3)/48EI",              "correct": true},
                {"option": "(FL^2)/48EI",  "correct": false},
                {"option": "(FL^2)/8EI",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br>Ans:(FL^3)/48EI</p>" // no comma here
        }
		
		
   // no comma here
    ]
};

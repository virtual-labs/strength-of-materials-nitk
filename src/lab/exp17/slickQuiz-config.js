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
            "q": "Slope of graph of load v/s compression gives",
            "a": [
                {"option": "Modulus of rigidity",      "correct": false},
                {"option": "Spring stiffness",     "correct": true},
                {"option": "Proof load",      "correct": false },
                {"option": "Maximum shear stress",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Spring stiffness</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Resilience of spring is ",
            "a": [
                {"option": "Strain energy per unit length",    "correct": false},
				{"option": "Strain energy per unit area",    "correct": false},
                {"option": "Strain energy per unit mass",    "correct": false},
                {"option": "None", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: None</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Two closely coiled helical springs 'A' and 'B' are equal in all respects but the number of turns of spring 'A' is half that of spring 'B'. The ratio of deflection of spring 'A' to spring 'B' is",
 
            "a": [
                {"option": "1/8",           "correct": false},
                {"option": "1/2",              "correct": true},
                {"option": "1/4",  "correct": false},
                {"option": "2",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 1/2</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "The strain energy stored in a spring, when subjected to maximum load, without suffering permanent distortion is known as",
 
            "a": [
                {"option": "Proof resilience",           "correct": true},
                {"option": "Proof stress",              "correct": false},
                {"option": "Impact energy",  "correct": false},
                {"option": "Modulus of resilience",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Proof resilience</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Spring index is",
 
            "a": [
                {"option": "D-d",           "correct": false},
                {"option": "D/d",              "correct": true},
                {"option": "D<sup>2</sup>-d<sup>2</sup>",  "correct": false},
                {"option": "None",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: D/d</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "A spring is designed for",
 
            "a": [
                {"option": "Higher strength",           "correct": false},
                {"option": "Higher deflection",              "correct": true},
                {"option": "Higher stiffness",  "correct": false},
                {"option": "None",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Higher deflection</p>" // no comma here
        }
		
		
   // no comma here
    ]
};

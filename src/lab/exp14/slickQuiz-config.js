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
            "q": "Modulus of rupture also known as",
            "a": [
                {"option": "Flexural strength ",      "correct": true},
                {"option": "Shear strength",     "correct": false},
                {"option": "Impact strength",      "correct": false },
                {"option": "Tensile strength",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Flexural strength </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In the equation T/J = &tau;/r = (G&#x3B8;/L); f is",
            "a": [
                
                {"option": "Modulus of rigidity",    "correct": false},
				{"option": "Polar moment of inertia",    "correct": false},
				{"option": "Shear stress",    "correct": true},
                {"option": "Torque applied", "correct": false} // no comma here
            ], 
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Shear stress</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following is correct with respect to failure of specimen in this experiment",
 
            "a": [
                {"option": "Failure occurs at inclined angle of 45 degree",           "correct": false},
                {"option": "Along a plane perpendicular to the axis",              "correct": true},
                {"option": "Along a plane parallel to axis",  "correct": false},
                {"option": "At inclined angle of 60 degree",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Along a plane perpendicular to the axis</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where does the failure plain lies?",
 
            "a": [
                {"option": "Centre of specimen",           "correct": false},
                {"option": "Upper region ",              "correct": false},
                {"option": "Both upper and lower region",  "correct": false},
                {"option": "Lower region",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Lower region</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "A material capable of absorbing large amount of energy before fracture is",
 
            "a": [
                {"option": "Toughness",           "correct": true},
                {"option": "Ductility",              "correct": false},
                {"option": "Resilience",  "correct": false},
                {"option": "Plasticity",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Toughness</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "Value of shear stress which is induced in the shaft due to applied couple varies",
 
            "a": [
                {"option": "From maximum at centre to 0 at circumference",           "correct": false},
                {"option": "From zero at centre to maximum at circumference ",              "correct": true},
                {"option": "From maximum at centre to minimum at circumference",  "correct": false},
                {"option": "From minimum at centre to maximum at circumference",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: From zero at centre to maximum at circumference</p>" // no comma here
        }
		
   // no comma here
    ]
};

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
            "q": " For the state of plane stress determine principal stresses?<br><img src=\"../images/mohr02.png\"\/>",
            "a": [
                {"option": "09MPa, 325MPa",      "correct": false},
                {"option": "28MPa,132MPa",     "correct": true},
                {"option": "97MPa, -10MPa",      "correct": false },
                {"option": "-28MPa, 132MPa",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:28MPa,132MPa</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:28MPa,132MPa</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The Grain of a wooden member forms an angle of 15 degree with the vertical. For the state of stress shown determine normal stress perpendicular to the grain?<br><img src=\"../images/mohr03.png\"\/>",
            "a": [
                {"option": "-2.598MPa",   "correct": true},
                {"option": "5.061MPa",   "correct": false},
                {"option": "3.34MPa",    "correct": false},
                {"option": "4.58MPa", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:-2.598MPa</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:-2.598MPa</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The extremities of any diameter on Mohr's circle represent",
 
            "a": [
                {"option": "Principal stresses",           "correct": false},
                {"option": "Normal stresses on planes at 45 degree",              "correct": true},
                {"option": "Shear stresses on planes at 45 degree",  "correct": false},
                {"option": "Normal and shear stresses on a plane",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong, Ans: Normal stresses on planes at 45 degree</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Mohr's theorem I gives _____ between two tangents on the elastic line of beams",
 
            "a": [
                {"option": "Slope",           "correct": false},
                {"option": "Deflection",              "correct": false},
                {"option": "S.F.",  "correct": false},
                {"option": "B.M.",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong, Ans: B.M.</p>" // no comma here
        }
   // no comma here
    ]
};

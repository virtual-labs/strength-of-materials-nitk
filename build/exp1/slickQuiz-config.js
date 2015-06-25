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
            "q": "The Grain of a wooden member forms an angle of 15 degree with the vertical. For the state of stress shown determine in plane shearing stress parallel to the grain<br><img src=\"../images/mohr03.png\"\/>",
 
            "a": [
                {"option": "-1.5MPa",           "correct": true},
                {"option": "2.5MPa",              "correct": false},
                {"option": "-3.6MPa",  "correct": false},
                {"option": "7.8MPa",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:-1.5MPa</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,Ans:-1.5MPa</p>" // no comma here
        }
   // no comma here
    ]
};

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
            "q": "What is the IS code for wood?",
            "a": [
                {"option": "IS 1708:1986",      "correct": true},
                {"option": "IS 2654:1977",     "correct": false},
                {"option": "IS 5242:1979",      "correct": false },
                {"option": "IS 2655:1964",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong, </br> Ans: IS 1708:1986</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "For wood specimen what is the area to be considered?",
            "a": [
                {"option": "Width X thickness of wood ",   "correct": false},
                {"option": "Width X thickness of failure plane of wood ",   "correct": true},
                {"option": "Diameter of wood",    "correct": false},
                {"option": "Width X length of wood", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong, </br>Ans: Width X thickness of failure plane of wood</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "For which material the failure load is maximum?",
 
            "a": [
                {"option": "Wood",           "correct": false},
                {"option": "Mild-steel rod",              "correct": false},
                {"option": "Mild-steel plate",  "correct": true }// no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong, </br>Ans: Mild-steel plate</p>" // no comma here
        },
		{ // Question 4- Multiple Choice, Multiple True Answers, Select All
            "q": "For double shear of timber specimen",
 
            "a": [
                {"option": "Area of c/s is multiplied by 2",           "correct": true},
                {"option": "Failure load is multiplied by 2",              "correct": false},
                {"option": "Area of c/s is divided by 2",  "correct": false},
                {"option": "Shear strength is multiplied by 2",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Area of c/s is multiplied by 2 </p>" // no comma here
        },
		{ // Question 5 Multiple Choice, Multiple True Answers, Select All
            "q": "A shear stress across a plane, is always accompanied by a balancing shear stress across the plane and normal to it. (say True or False)",
 
            "a": [
                
                {"option": "True",  "correct": false},
                {"option": "False",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: False </p>" // no comma here
        }
   // no comma here
    ]
};

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
        { // Question 1 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Choose the correct answer</br>i)	All work done on the specimen is stored in form of strain energy</br>ii)	Part of energy is wasted in form of heat and sound",
            "a": [
                
                {"option": "i) plastic stage ii) elastic stage",    "correct": false},
				{"option": "i) semisolid stage ii) plastic  stage",    "correct": false},
				{"option": "i) elastic stage ii) semisolid",    "correct": false},
                {"option": "i) elastic stage ii) plastic stage", "correct": true} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: i) elastic stage ii) plastic stage</p>" // no comma here
        },
		{ // Question 2 - Multiple Choice, Multiple True Answers, Select All
            "q": "Tensile stress measured in ",
 
            "a": [
                {"option": "Watts",           "correct": false},
                {"option": "Newton",           "correct": false},
                {"option": "Pascal",           "correct": true},
                {"option": "Half",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Pascal</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Significant necking was found to occur in a tensile test piece. Examine the areas indicated on stress/strain curve and indicate where necking of specimen has occurred.</br><img src=\"../images/q13-q.png\"\/>",
 
            "a": [
                {"option": "A to B",            "correct": false},
                {"option": "B to C",            "correct": false},
                {"option": "C to D",  			"correct": false},
                {"option": "D to E",            "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: D to E</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Following statement in relation to young's modulus are correct with exception of ",
 
            "a": [
                {"option": "It is the measure of resistance to elastic deformation",           "correct": false},
                {"option": "Equal to constant  E identified in Hooke's law",              "correct": false},
                {"option": "It is the measure of resistance to plastic deformation",  "correct": true},
                {"option": "It is the measure of modulus of stiffness",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: It is the measure of resistance to plastic deformation</p>" // no comma here
        }, 
		{ // Question 5- Multiple Choice, Multiple True Answers, Select All
            "q": "Which mechanical property of the material is indicated by the total area under a stress strain curve",
 
            "a": [
                {"option": "Toughness",            "correct": true},
                {"option": "Strength",            "correct": false},
                {"option": "Ultimate tensile strength",  			"correct": false},
                {"option": "Ductility",            "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Toughness</p>" // no comma here
        }
		
   // no comma here
    ]
};

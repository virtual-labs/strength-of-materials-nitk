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
            "q": "Lack of alignment of material in compression test ____________ as load increases",
            "a": [
                {"option": "Decreases",      "correct": false},
                {"option": "Increases",     "correct": true},
                {"option": "Neither increase or decrease",      "correct": false },
                {"option": "dRemains same",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Increases</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What should be the height to diameter ratio in compression testing of a material?",
            "a": [
				{"option": "1",    "correct": false},
				{"option": "5",    "correct": false},
				{"option": "7.5",    "correct": false},
                {"option": "3", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 3</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Compression testing is used to determine",
 
            "a": [
                {"option": "Elastic limit",           "correct": false},
                {"option": "Proportionality limit",              "correct": false},
                {"option": "Yield point",  "correct": false},
                {"option": "All the above",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "If a part is constrained to move and heated, it will develop",
 
            "a": [
                {"option": "Principal stress",           "correct": false},
                {"option": "Tensile stress",              "correct": false},
                {"option": "Shear stress",  "correct": false},
                {"option": "Compressive stress",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Compressive stress</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Materials having same elastic properties in all directions are called",
 
            "a": [
                {"option": "Isotropic",           "correct": true},
                {"option": "Ideal material",              "correct": false},
                {"option": "Uniform",  "correct": false},
                {"option": "Elastic material",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Isotropic</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following is correct with respect to failure of mild steel  specimen in this experiment",
            "a": [
                
                {"option": "Failure occurs at inclined angle of 45 degree",    "correct": true},
				{"option": "Buckling ",    "correct": false},
				{"option": "Barrel shape ",    "correct": false},
                {"option": "Necking", "correct": false} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Failure occurs at inclined angle of 45 degree</p>" // no comma here
        }
		
   // no comma here
    ]
};

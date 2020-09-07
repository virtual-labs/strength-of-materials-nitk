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
            "q": "Which type of material is cast iron?",
            "a": [
                {"option": "Ductile  ",      "correct": false},
                {"option": "Brittle",     "correct": true},
                {"option": "Rigid",      "correct": false },
                {"option": "Semi rigid",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Brittle </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Slope of the line joining origin and a specified point on stress-strain curve is",
            "a": [
                
                {"option": "Secant modulus",    "correct": true},
				{"option": "Modulus of rigidity",    "correct": false},
				{"option": "Bulk modulus",    "correct": false},
                {"option": "Tangent modulus", "correct": false} // no comma here
            ], 
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Secant modulus</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which of the following statement is correct",
 
            "a": [
                {"option": "Energy stored in the body, when strained within the elastic limit is known as strain energy",           "correct": false},
                {"option": "The maximum strain energy which can be stored in a body is termed as proof resilience",              "correct": false},
                {"option": "The proof resilience/unit volume of material is known as modulus of resilience",  "correct": false},
                {"option": "All the above",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:All the above</p>" // no comma here
        },
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the IS code for tension test on aluminium and aluminium alloy tubes?",
 
            "a": [
                {"option": "IS 2657-1964",           "correct": true},
                {"option": "IS 2658-1964 ",              "correct": false},
                {"option": "IS 2656-1964",  "correct": false},
                {"option": "IS 2655-1964",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:IS 2657-1964</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Correct statement",
 
            "a": [
                {"option": "Mild steel have more carbon content than cast iron",           "correct": false},
                {"option": "Cast iron and mild steel have same carbon content",              "correct": false},
                {"option": "Cast iron have more carbon content than mild steel",  "correct": true},
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Cast iron have more carbon content than mild steel</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "The ratio of breaking load to area of cross section is ",
 
            "a": [
                {"option": "Tensile strength",           "correct": true},
                {"option": "Proof stress ",              "correct": false},
                {"option": "Secant modulus",  "correct": false},
                {"option": "Tangent modulus",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Tensile strength</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Multiple True Answers, Select All
            "q": "Yield strength of pure aluminium is  ",
 
            "a": [
                {"option": "7-11 MPa",           "correct": false},
                {"option": "15-20 MPa",              "correct": true},
                {"option": "20-25 MPa",  "correct": false},
                {"option": "25-30 MPa",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 15-20 MPa</p>" // no comma here
        }
		
   // no comma here
    ]
};

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
            "q": "What is the apex angle of Rockwell cone indentor?",
            "a": [
                {"option": "90",       "correct": false},
                {"option": "60",  "correct": false},
                {"option": "150" ,    "correct": false },
                {"option": "120",		 "correct": true} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 120</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Name the type of Rockwell hardness test done</br>i)The material is soft and moderately hard</br>ii)The material is hard",
            "a": [
                
                {"option": "i = Rockwell C ; ii = Rockwell B",    "correct": false},
				{"option": "i = Rockwell B ; ii = Rockwell C",    "correct": true},
				{"option": "any of the method can be used",    "correct": false},
                {"option": "Rock B is used for all the materials", "correct": false} // no comma here
            ],
            
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:i = Rockwell B ; ii = Rockwell C</p>" // no comma here
        },
		{ // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The resistance of the sample to material deformation due to constant compression load from a sharp object is measure of ",
 
            "a": [
                {"option": "Indentation hardness",           "correct": true},
                {"option": "Rebound hardness",           "correct": false},
                {"option": "Scratch hardness",           "correct": false},
                {"option": "All the above",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Indentation hardness</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Hardness is dependent on",
 
            "a": [
                {"option": "Ductility",            "correct": false},
                {"option": "Elastic stiffness",            "correct": false},
                {"option": "Viscosity",  			"correct": false},
                {"option": "All the above",            "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All the above</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which IS code is preferred for Rockwell hardness test?",
 
            "a": [
                {"option": "IS-1586-1988",           "correct": true},
                {"option": "IS-1500-1983",              "correct": false},
                {"option": "IS-1501(Part 1& 2)-1984",  "correct": false},
                {"option": "IS-1501(part 3)-1987",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: IS-1586-1988</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "Rockwell hardness test method can be used for testing",
 
            "a": [
                {"option": "Metal hardness",            "correct": false},
                {"option": "Ceramic substance hardness",            "correct": false},
                {"option": "Plastic hardness",  			"correct": false},
                {"option": "All of these",            "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: All of these</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Multiple True Answers, Select All
            "q": "The load applied in C-scale of Rockwell hardness test is",
 
            "a": [
                {"option": "60 kgf",            "correct": false},
                {"option": "100 kgf",            "correct": false},
                {"option": "120 kgf",  			"correct": false},
                {"option": "150 kgf",            "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:150 kgf</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Multiple True Answers, Select All
            "q": "The major and minor load are removed together in Rockwell hardness test",
 
            "a": [
                {"option": "True",            "correct": false},
                {"option": "False",            "correct": true}
                 // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans:False</p>" // no comma here
        }
		
   // no comma here
    ]
};

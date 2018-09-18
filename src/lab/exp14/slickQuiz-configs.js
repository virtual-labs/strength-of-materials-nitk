
// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following statement is correct ",
            "a": [
                {"option": "Energy stored in the body, when strained within the elastic limit is known as strain energy",      "correct": false},
                {"option": "The maximum strain energy which can be stored in a body is termed as proof resilience",      "correct": false},
                {"option": "The proof resilience/unit volume of material is known as modulus of resilience",      "correct": false},		// no comma here
				{"option": "All the above ",      "correct": true}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above </p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Instrument used to measure extension in cast iron and aluminium in this experiment is ",
            "a": [
                {"option": "Extensometer",               "correct": false},
                {"option": "Dial micrometer",  			 "correct": true},
				{"option": "Scale",               "correct": false},
				{"option": "None of these", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Dial micrometer</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "If the material is unloaded, there will be specified percentage of strain permanently left in it. It is called",
            "a": [
                {"option": "Yield stress",           "correct": false},
                {"option": "Tangent stress",                  "correct": false},
                {"option": "Proof stress",  "correct": true},		
                {"option": "None of these",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Proof stress</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which is correct ",
            "a": [
                
				{"option": "Wrought iron is produced from cast iron",               "correct": false},
				{"option": "Cast iron is produced from pig iron ",               "correct": false},
				{"option": "Both a and b",               "correct": true},
				{"option": "None of these", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Both a and b</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Percentage reduction of cast iron specimen during tensile test would be of order ",
            "a": [
                
				{"option": "More than 50%",               "correct": false},
				{"option": "25-50%",               "correct": false},
				{"option": "10-25%",               "correct": false},
				{"option": "Negligible", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Negligible</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Correct order for metals",
            "a": [
                
				{"option": "tensile strength< shear strength< compressive strength",               "correct": false},
				{"option": "shear strength< tensile strength< compressive strength",               "correct": true},
				{"option": "shear strength< compressive strength< tensile strength", "correct": false},
				{"option": "compressive strength< tensile strength< shear strength",               "correct": false}// no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: shear strength< tensile strength< compressive strength</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Wrought iron has better tensile strength than cast iron and is more ductile.",
            "a": [
                
				{"option": "True",               "correct": true},
				{"option": "False",               "correct": false}
				
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
		{ // Question 8- Multiple Choice, Multiple True Answers, Select Any
            "q": "Young's modulus of Iron and  Aluminium in GPa",
            "a": [
                
				{"option": "400 & 250",               "correct": false},
				{"option": "70 & 350 ",               "correct": false},
				{"option": "211 & 70",                 "correct": true},
				{"option": "300 & 450",               "correct": false}// no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:211 & 70</p>" // no comma here
        }
		
		
		
         	
		
        
      // no comma here
    ]
};

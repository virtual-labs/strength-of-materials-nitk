
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
        { // Question 1 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the diameter of the Rockwell ball indentor?",
            "a": [
                {"option": "1/16 inch",      "correct": true},
                {"option": "1/3 inch",      "correct": false},
                {"option": "1/7 inch",      "correct": false},		// no comma here
				{"option": "1/5 inch",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1/16 inch</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Load applied for Rockwell C test is more than Rockwell B test ",
            "a": [
                {"option": "False",               "correct": false},
                {"option": "True",  			 "correct": true}
				
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the unit of Rockwell hardness number?",
            "a": [
                {"option": "Dimensionless number",           "correct": true},
                {"option": "Pascal ",                  "correct": false},
                {"option": "Newton ",  "correct": false},		
                {"option": "Kilograms",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Dimensionless number</p>" // no comma here
        },
         
		{ // Question 4- Multiple Choice, Multiple True Answers, Select Any
              "q": "Match the following for Rockwell hardness test<br><img src=\"../images/rht.png\"\ height=142 width=507/>",
            "a": [
                { "option": "a-2,b-1,c-3", "correct": false },
                { "option": "a-1,b-3,c-2","correct": false },
                { "option": "a-3,b-1,c-2", "correct": true },
                { "option": "a-1,b-2,c-3", "correct": false} // no comma here
            ],

                "correct": "<p><span>Right answer</span></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans: a-3,b-1,c-2</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What is the value of minor load applied in the experiment?",
            "a": [
				{"option": "12Kg",           	    "correct": false},
				{"option": "8Kg",       	    "correct": false},
				{"option": "10Kg",            	"correct": true},
				{"option": "5Kg", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 10Kg</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Why minor load is initially applied in Rockwell hardness test?",
            "a": [
                
				{"option": "specimen cannot bear the major load",               "correct": false},
				{"option": "to distribute the load acting on the specimen",               "correct": false},
				{"option": "to firmly seat the penetrator in to position for major load",               "correct": true},
				{"option": "none of these", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: to firmly seat the penetrator in to position for major load</p>" // no comma here
        },
		{ // Question 7 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Rockwell hardness number is obtained by",
            "a": [
                
				{"option": "By Rockwell hardness formula",               "correct": false},
				{"option": "Direct reading from the gauge",               "correct": true},
				{"option": "Both a and b",               "correct": false},
				{"option": "None of these", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Direct reading from the gauge</p>" // no comma here
        },
		{ // Question 8 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Diamond indentor can be used for metals having hardness",
            "a": [
                
				{"option": "Below 20 HRC",               "correct": false},
				{"option": "Above 20 HRC",               "correct": true},
				{"option": "For any values",               "correct": false},
				{"option": "None of the above", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Above 20 HRC</p>" // no comma here
        },
		{ // Question 9 - Multiple Choice, Multiple True Answers, Select Any
            "q": "In C-scale of Rockwell hardness testing, the shape of indenter used is",
            "a": [
                
				{"option": "Diamond cone",               "correct": true},
				{"option": "Steel ball",               "correct": false},
				{"option": "Steel prism",               "correct": false},
				{"option": "Any of the above", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:Diamond cone</p>" // no comma here
        }
		
		
		
			
	
        
      // no comma here
    ]
};

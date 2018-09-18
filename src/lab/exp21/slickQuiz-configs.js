
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
            "q": "What is the depth of indentation on the material used in Vickers hardness test?",
            "a": [
                {"option": "1/5 of the diagonal length",      "correct": false},
                {"option": "1/6 of the diagonal length",      "correct": false},
                {"option": "1/7 of the diagonal length",      "correct": true},		// no comma here
				{"option": "1/8 of the diagonal length",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 1/7 of the diagonal length</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Hardness has no quantitative value, except in terms of given load applied in a specified manner for a specified duration and a specified penetrator shape. ",
            "a": [
                {"option": "True",               "correct": true},
                {"option": "False",  			 "correct": false}
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: True</p>" // no comma here
        },
        { // Question 4- Multiple Choice, Multiple True Answers, Select Any
              "q": "Match the following for Rockwell hardness test<br><img src=\"../images/vkr.png\"\ height=155 width=460/>",
            "a": [
                { "option": "i-b, ii-a/d, iii-a/d,iv-c", "correct": true },
                { "option": "i-a/d, ii-b, iii-a/d,iv-c","correct": false },
                { "option": "i-c, ii-a/d, iii-a/d,iv-b", "correct": false },
                { "option": "i-b, ii-a/d, iii-c,iv-a/d", "correct": false} // no comma here
            ],

                "correct": "<p><span>Right answer</span></p>",
                "incorrect": "<p><span>wrong</span> It's wrong,Ans: i-b, ii-a/d, iii-a/d,iv-c</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The similarity between Hardness test and Tensile test is",
            "a": [
                
				{"option": "Both measures material resistance to elastic flow ",             "correct": false},
				{"option": "Both measures material resistance to plastic flow",          "correct": true},
				{"option": "No similarity",          "correct": false},
				{"option": "None of these",		 "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Both measures material resistance to plastic flow</p>" // no comma here
        
		}
        
      // no comma here
    ]
};

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
            "q": "In Charpy impact test, the specimen is kept as",
            "a": [
                {"option": "Simply supported beam",      "correct": true},
                {"option": "Cantilever beam",      "correct": false},
                {"option": "Overhanging beam",      "correct": false},		// no comma here
				{"option": "Fixed ended beam",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Simply supported beam</p>" // no comma here
        },
        {  // Question 2 - Multiple Choice, Single True Answer
            "q": "What is the unit of impact value?",
            "a": [
                {"option": "Joule",      "correct": true},
                {"option": "Newton",      "correct": false},
                {"option": "Pascal",      "correct": false},		// no comma here
				{"option": "All of the above",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Simply supported beam</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": ") Tensile and bending stress also gives impact resisting qualities of material(Say true or false)",
            "a": [
                
                {"option": "true",      "correct": false},		// no comma here
				{"option": "False",      "correct": true}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: False</p>" // no comma here
        },
		{  // Question 4 - Multiple Choice, Single True Answer
            "q": "During test if the piece is not broken, the impact value is",
            "a": [
                {"option": "Indefinite",      "correct": false},
                {"option": "Unspecified",      "correct": false},
                {"option": "Imprecise",      "correct": false},		// no comma here
				{"option": "All the above",      "correct": true}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: All the above</p>" // no comma here
        },
		{  // Question 5 - Multiple Choice, Single True Answer
            "q": "During test if the piece is not broken, the impact value is",
            "a": [
                {"option": "Same",      "correct": false},
                {"option": "Half",      "correct": false},
                {"option": "2 times",      "correct": true},		// no comma here
				{"option": "4 times",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 2 times</p>" // no comma here
        },
		{  // Question 6 - Multiple Choice, Single True Answer
            "q": ") The quantitative result of the impact test—the energy needed to fracture a material can be used to measure the toughness of the material and the ________.",
            "a": [
                {"option": "Yield strength",      "correct": true},
                {"option": "Hardness ",      "correct": false},
                {"option": "Corrosion ",      "correct": false},		// no comma here
				{"option": "Creep deformation",      "correct": false}        
			],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Yield strength</p>" // no comma here
        }
        
      // no comma here
    ]
};

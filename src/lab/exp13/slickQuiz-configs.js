
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
            "q": "The law which influence the material up to yield point.",
            "a": [
                {"option": "Stress law",      "correct": false},
                {"option": "Hooks law",      "correct": true},
                {"option": "Bernoulli's law",      "correct": false},		// no comma here
				{"option": "Poisson's law",      "correct": false}   
			],
			"correct": "<p><span>Right answer</span></p>",
			"incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Hooks law</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "While conducting the experiment, the mode of fracture observed in  mild steel specimen is",
            "a": [
                {"option": "Star shape",               "correct": false},
                {"option": "Granular shape",  			 "correct": true},
				{"option": "Cup and cone shape",               "correct": false},
				{"option": "Fibrous shape", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Cup and cone shape</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is the distance between the punch marks in the experiment?",
            "a": [
                {"option": "2.5d",           "correct": true},
                {"option": "3d ",                  "correct": false},
                {"option": "4.5d ",  "correct": false},		
                {"option": "5d",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: 2.5d</p>" // no comma here
        },
         
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Yield point is the point on stress/strain graph where:",
            "a": [
                
				{"option": "Failure of materials occur",             "correct": false},
				{"option": "Elastic deformation commences",          "correct": false},
				{"option": "Plastic deformation commences",          "correct": true},
				{"option": "Ultimate tensile strength occur",		 "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Plastic deformation commences</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Elastic deformation of the material is associated with",
            "a": [
				{"option": "Toughness of material",           	    "correct": false},
				{"option": "Ductility of the material",       	    "correct": true},
				{"option": "Hardness of the material",            	"correct": false},
				{"option": "Permanent deformation of the material", "correct": false} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Ductility of the material</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Arrange in order sequence of experiment </br> i) ultimate load</br>ii) upper yield point </br>iii) elastic region </br>iv) breaking load </br>v)lower yield point",
            "a": [
                
				{"option": "Upper yield point, lower yield point, elastic region, ultimate load, breaking load",               "correct": false},
				{"option": "lower yield point, upper yield point, elastic region, breaking load, ultimate load",               "correct": false},
				{"option": "Elastic region, lower yield point, upper yield point, ultimate load ,breaking load",               "correct": false},
				{"option": "Eelastic region, upper yield point, lower yield point ,ultimate load ,breaking load", "correct": true} // no comma here
            ],
           
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans: Elastic region, upper yield point, lower yield point ,ultimate load ,breaking load</p>" // no comma here
        }
		
			
	
        
      // no comma here
    ]
};

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
            "q": "In brittle failure, the specimen shears off a plane at angle of 45 degree to normal, this is due to ",
            "a": [
                {"option": "Plane experiences bending ",      "correct": false},
                {"option": "Plane experiences torsion",     "correct": false},
                {"option": "Plane experiences shear",      "correct": true },
                {"option": "None of these",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Plane experiences shear</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Is there any proportional limit for brittle material?(Yes/No)",
            "a": [
                
                {"option": "Yes",    "correct": false},
                {"option": "No", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: No</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
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
		{ // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "During compression test on cast iron, the failure occurs i.e. the crack appears along the",
 
            "a": [
                {"option": "Diagonal",           "correct": true},
                {"option": "Surface parallel to load applied",              "correct": false},
                {"option": "Surface perpendicular to load applied",  "correct": false},
                {"option": "Any of the above",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Diagonal</p>" // no comma here
        },
		{ // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "The specimen that would exhibit the least reduction in its cross sectional area at the point of failure would be<br><img src=\"../images/q16-5.png\"\/>",
 
            "a": [
                {"option": "A",           "correct": true},
                {"option": "B",              "correct": false},
                {"option": "C",  "correct": false},
                {"option": "D",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: A</p>" // no comma here
        },
		{ // Question 6 - Multiple Choice, Multiple True Answers, Select All
            "q": "The group of materials that vary significantly in their compressive and tensile strength is ",
 
            "a": [
                {"option": "Brass and mild steel        ",           "correct": false},
                {"option": "Mild steel and ceramics",              "correct": false},
                {"option": "Cast iron and ceramics",  "correct": true},
                {"option": "Cast iron and Brass",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Cast iron and ceramics</p>" // no comma here
        }
		
		
   // no comma here
    ]
};

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
            "q": "In charpy impact test KU 300/5; where 300/5 indicates",
            "a": [
                {"option": "Test was conducted with 300 Joules striking energy with 5 mm deep notch",      "correct": false},
                {"option": "Test was conducted with 300 Newton force with 5 mm deep notch",     "correct": true},
                {"option": "Both a and b are correct",      "correct": false },
                {"option": "Both a and b are incorrect",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: Test was conducted with 300 Joules striking energy with 5 mm deep notch</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which is incorrect?",
            "a": [
                {"option": "In charpy test notch is U shaped and is placed so that it lies on compression side",   "correct": true},
                {"option": "Striking energy for Izod is 164J",   "correct": false},
                {"option": "In charpy test, specimen supported horizontally in simply supported manner.",    "correct": false},
                {"option": "All the above", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> </p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: In charpy test notch is U shaped and is placed so that it lies on compression side</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "The speed of the hammer at the instant of striking shall be ",
 
            "a": [
                {"option": "9.8 - 10 m/sec",           "correct": false},
                {"option": "6.2 - 9 m/sec",              "correct": false},
                {"option": "2 - 4.8 m/sec",  "correct": false},
                {"option": "4.5 - 7 m/sec",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 4.5 - 7 m/sec </p>" // no comma here
        },
		{ // Question 4- Multiple Choice, Multiple True Answers, Select All
            "q": "What is the distance between the supports in charpy test?",
 
            "a": [
                {"option": "10 mm",           "correct": false},
                {"option": "20 mm",              "correct": false},
                {"option": "30 mm",  "correct": false},
                {"option": "40 mm",          "correct": true} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 40 mm </p>" // no comma here
        },
		{ // Question 5 Multiple Choice, Multiple True Answers, Select All
            "q": "The initial energy of the hammer is",
 
            "a": [
                {"option": "300 joules",           "correct": true},
                {"option": "290 Joules",              "correct": false},
                {"option": "164 Joules",  "correct": false},
                {"option": "200 Joules",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span></p>",
            "incorrect": "<p><span>wrong</span> It's wrong,</br> Ans: 300 joules </p>" // no comma here
        }
   // no comma here
    ]
};

import { Question } from '../types';

export const generatedSet: Question[] = [
  {
    "id": "q-logical-gen-1",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Victor is heavier than Vera. Nina is lighter than Vera. Who is the heaviest?",
    "options": [
      {
        "id": "o1",
        "text": "Victor",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Vera",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Nina",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Victor is heavier than Vera, and Nina is lighter than Vera, making Victor the heaviest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-2",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If all orange boxes are heavy, and Bob has a orange boxes, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Bob",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-3",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "There are 16 doors. Behind door 1 is a trap. Behind the next is safety. Which door is safe?",
    "options": [
      {
        "id": "o1",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o2",
        "text": "Door 2",
        "isCorrect": true
      },
      {
        "id": "o3",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "The door next to the trap is safe.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-4",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom sits directly left of Alice. Vera sits directly right of Alice. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Alice",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Vera",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Tom on the left and Vera on the right, Alice must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-5",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Every time Zack eats pens, they get happy. Zack is not happy right now. Did they just eat pens?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-6",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A pattern repeats: green, blue, green, green, blue... What is the 4th item?",
    "options": [
      {
        "id": "o1",
        "text": "green",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "blue",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "green",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "yellow",
        "isCorrect": false
      }
    ],
    "explanation": "The pattern resets every 3 items. The 4th is the same as the 1st.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-7",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If some apples are yellow, and all yellow things are valuable, are some apples valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with yellow, and all yellow are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-8",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Judy runs faster than Sam, but slower than Nina. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Sam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Judy",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Nina",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Judy > Sam, Nina > Judy. Therefore Nina > Judy > Sam. Sam is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-9",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If it rains, the grass is wet. The grass is not wet. Did it rain?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Unrelated",
        "isCorrect": false
      }
    ],
    "explanation": "If it rained, the grass would be wet. Since it isn't wet, it could not have rained.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-10",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Only yellow boxes are allowed in the room. Leo brings a blue apples. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Leo",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY yellow boxes. A blue apples does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-11",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Oscar is heavier than Tom. Alice is lighter than Tom. Who is the heaviest?",
    "options": [
      {
        "id": "o1",
        "text": "Oscar",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Alice",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Oscar is heavier than Tom, and Alice is lighter than Tom, making Oscar the heaviest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-12",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If all red keys are heavy, and Ivan has a red keys, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Ivan",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-13",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "There are 8 doors. Behind door 1 is a trap. Behind the next is safety. Which door is safe?",
    "options": [
      {
        "id": "o1",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o2",
        "text": "Door 2",
        "isCorrect": true
      },
      {
        "id": "o3",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "The door next to the trap is safe.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-14",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Nina sits directly left of Leo. Tom sits directly right of Leo. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Leo",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Nina",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Nina on the left and Tom on the right, Leo must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-15",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Every time Leo eats phones, they get happy. Leo is not happy right now. Did they just eat phones?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-16",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A pattern repeats: gray, blue, green, gray, blue... What is the 4th item?",
    "options": [
      {
        "id": "o1",
        "text": "gray",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "blue",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "green",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "yellow",
        "isCorrect": false
      }
    ],
    "explanation": "The pattern resets every 3 items. The 4th is the same as the 1st.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-17",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If some pens are white, and all white things are valuable, are some pens valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with white, and all white are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-18",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Tom runs faster than Zara, but slower than Judy. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Zara",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Judy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Tom > Zara, Judy > Tom. Therefore Judy > Tom > Zara. Zara is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-19",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Only orange coins are allowed in the room. Peggy brings a blue tokens. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Peggy",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY orange coins. A blue tokens does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-20",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara is older than Noah. David is younger than Noah. Who is the oldest?",
    "options": [
      {
        "id": "o1",
        "text": "Yara",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Noah",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "David",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Yara is older than Noah, and David is younger than Noah, making Yara the oldest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-21",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If all black desks are heavy, and Nina has a black desks, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Nina",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-22",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "There are 4 doors. Behind door 1 is a trap. Behind the next is safety. Which door is safe?",
    "options": [
      {
        "id": "o1",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o2",
        "text": "Door 2",
        "isCorrect": true
      },
      {
        "id": "o3",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "The door next to the trap is safe.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-23",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara sits directly left of Sam. Xena sits directly right of Sam. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Sam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yara",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Xena",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Yara on the left and Xena on the right, Sam must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-24",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Every time David eats desks, they get happy. David is not happy right now. Did they just eat desks?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-25",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A pattern repeats: red, blue, green, red, blue... What is the 4th item?",
    "options": [
      {
        "id": "o1",
        "text": "red",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "blue",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "green",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "yellow",
        "isCorrect": false
      }
    ],
    "explanation": "The pattern resets every 3 items. The 4th is the same as the 1st.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-26",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If some guitars are purple, and all purple things are valuable, are some guitars valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with purple, and all purple are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-27",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Vera runs faster than Frank, but slower than Heidi. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Frank",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Vera",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Heidi",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Vera > Frank, Heidi > Vera. Therefore Heidi > Vera > Frank. Frank is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-28",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Only white tokens are allowed in the room. Nina brings a blue books. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Nina",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY white tokens. A blue books does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-29",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Zack is taller than Alice. Charlie is shorter than Alice. Who is the tallest?",
    "options": [
      {
        "id": "o1",
        "text": "Zack",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Alice",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Charlie",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Zack is taller than Alice, and Charlie is shorter than Alice, making Zack the tallest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-30",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If all gold desks are heavy, and David has a gold desks, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on David",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-31",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "There are 18 doors. Behind door 3 is a trap. Behind the next is safety. Which door is safe?",
    "options": [
      {
        "id": "o1",
        "text": "Door 3",
        "isCorrect": false
      },
      {
        "id": "o2",
        "text": "Door 4",
        "isCorrect": true
      },
      {
        "id": "o3",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "The door next to the trap is safe.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-32",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Sam sits directly left of Noah. Ivan sits directly right of Noah. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Noah",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sam",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ivan",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Sam on the left and Ivan on the right, Noah must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-33",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Every time Vera eats pens, they get happy. Vera is not happy right now. Did they just eat pens?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-34",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A pattern repeats: black, blue, green, black, blue... What is the 4th item?",
    "options": [
      {
        "id": "o1",
        "text": "black",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "blue",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "green",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "yellow",
        "isCorrect": false
      }
    ],
    "explanation": "The pattern resets every 3 items. The 4th is the same as the 1st.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-35",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If some books are gray, and all gray things are valuable, are some books valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with gray, and all gray are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-36",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mallory runs faster than Heidi, but slower than Noah. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Heidi",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Mallory",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Noah",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Mallory > Heidi, Noah > Mallory. Therefore Noah > Mallory > Heidi. Heidi is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-37",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Only black desks are allowed in the room. Heidi brings a blue laptops. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Heidi",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY black desks. A blue laptops does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-38",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory is older than Alice. Heidi is younger than Alice. Who is the oldest?",
    "options": [
      {
        "id": "o1",
        "text": "Mallory",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Alice",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Heidi",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Mallory is older than Alice, and Heidi is younger than Alice, making Mallory the oldest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-39",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If all purple watches are heavy, and Nina has a purple watches, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Nina",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-40",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack sits directly left of Uma. Oscar sits directly right of Uma. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Uma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Zack",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Oscar",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Zack on the left and Oscar on the right, Uma must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-41",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Every time Yara eats books, they get happy. Yara is not happy right now. Did they just eat books?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-42",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If some boxes are silver, and all silver things are valuable, are some boxes valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with silver, and all silver are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-43",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Peggy runs faster than Vera, but slower than Will. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Vera",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Peggy",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Will",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Peggy > Vera, Will > Peggy. Therefore Will > Peggy > Vera. Vera is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-44",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Only orange desks are allowed in the room. Heidi brings a blue apples. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Heidi",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY orange desks. A blue apples does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-45",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Leo is heavier than Mallory. Walter is lighter than Mallory. Who is the heaviest?",
    "options": [
      {
        "id": "o1",
        "text": "Leo",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Mallory",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Walter",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Leo is heavier than Mallory, and Walter is lighter than Mallory, making Leo the heaviest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-46",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If all brown shoes are heavy, and Charlie has a brown shoes, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Charlie",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-47",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "There are 20 doors. Behind door 1 is a trap. Behind the next is safety. Which door is safe?",
    "options": [
      {
        "id": "o1",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o2",
        "text": "Door 2",
        "isCorrect": true
      },
      {
        "id": "o3",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "The door next to the trap is safe.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-48",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Leo sits directly left of Sam. David sits directly right of Sam. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Sam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Leo",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "David",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Leo on the left and David on the right, Sam must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-49",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Every time Oscar eats pens, they get happy. Oscar is not happy right now. Did they just eat pens?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-50",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A pattern repeats: silver, blue, green, silver, blue... What is the 4th item?",
    "options": [
      {
        "id": "o1",
        "text": "silver",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "blue",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "green",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "yellow",
        "isCorrect": false
      }
    ],
    "explanation": "The pattern resets every 3 items. The 4th is the same as the 1st.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-51",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If some cars are gray, and all gray things are valuable, are some cars valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with gray, and all gray are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-52",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma runs faster than Oscar, but slower than Will. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Oscar",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Uma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Will",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Uma > Oscar, Will > Uma. Therefore Will > Uma > Oscar. Oscar is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-53",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Only blue phones are allowed in the room. David brings a blue shoes. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on David",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY blue phones. A blue shoes does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-54",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Charlie is taller than Sam. Victor is shorter than Sam. Who is the tallest?",
    "options": [
      {
        "id": "o1",
        "text": "Charlie",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sam",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Victor",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Charlie is taller than Sam, and Victor is shorter than Sam, making Charlie the tallest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-55",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If all gray watches are heavy, and Mallory has a gray watches, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Mallory",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-56",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Walter sits directly left of Peggy. Sam sits directly right of Peggy. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Peggy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Walter",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sam",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Walter on the left and Sam on the right, Peggy must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-57",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Every time Zara eats boxes, they get happy. Zara is not happy right now. Did they just eat boxes?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-58",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If some laptops are silver, and all silver things are valuable, are some laptops valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with silver, and all silver are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-59",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Noah runs faster than Victor, but slower than Yara. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Victor",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Noah",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Yara",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Noah > Victor, Yara > Noah. Therefore Yara > Noah > Victor. Victor is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-60",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Only red candies are allowed in the room. Walter brings a blue cups. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Walter",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY red candies. A blue cups does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-61",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Ivan is taller than Zara. Xena is shorter than Zara. Who is the tallest?",
    "options": [
      {
        "id": "o1",
        "text": "Ivan",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Zara",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Xena",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Ivan is taller than Zara, and Xena is shorter than Zara, making Ivan the tallest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-62",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If all orange cups are heavy, and Yara has a orange cups, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Yara",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-63",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "There are 12 doors. Behind door 1 is a trap. Behind the next is safety. Which door is safe?",
    "options": [
      {
        "id": "o1",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o2",
        "text": "Door 2",
        "isCorrect": true
      },
      {
        "id": "o3",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "The door next to the trap is safe.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-64",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack sits directly left of Leo. Judy sits directly right of Leo. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Leo",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Zack",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Judy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Zack on the left and Judy on the right, Leo must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-65",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Every time Peggy eats books, they get happy. Peggy is not happy right now. Did they just eat books?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-66",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If some guitars are gray, and all gray things are valuable, are some guitars valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with gray, and all gray are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-67",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Noah runs faster than Zara, but slower than Heidi. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Zara",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Noah",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Heidi",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Noah > Zara, Heidi > Noah. Therefore Heidi > Noah > Zara. Zara is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-68",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Only brown shoes are allowed in the room. Tom brings a blue books. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Tom",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY brown shoes. A blue books does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-69",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah is older than Yara. Charlie is younger than Yara. Who is the oldest?",
    "options": [
      {
        "id": "o1",
        "text": "Noah",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yara",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Charlie",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Noah is older than Yara, and Charlie is younger than Yara, making Noah the oldest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-70",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If all red coins are heavy, and Walter has a red coins, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Walter",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-71",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Xena sits directly left of Heidi. Vera sits directly right of Heidi. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Heidi",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Xena",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Vera",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Xena on the left and Vera on the right, Heidi must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-72",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Every time Zara eats rings, they get happy. Zara is not happy right now. Did they just eat rings?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-73",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A pattern repeats: pink, blue, green, pink, blue... What is the 4th item?",
    "options": [
      {
        "id": "o1",
        "text": "pink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "blue",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "green",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "yellow",
        "isCorrect": false
      }
    ],
    "explanation": "The pattern resets every 3 items. The 4th is the same as the 1st.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-74",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If some cups are green, and all green things are valuable, are some cups valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with green, and all green are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-75",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Victor runs faster than Tom, but slower than Bob. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Tom",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Victor",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bob",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Victor > Tom, Bob > Victor. Therefore Bob > Victor > Tom. Tom is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-76",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Only pink desks are allowed in the room. Alice brings a blue phones. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Alice",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY pink desks. A blue phones does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-77",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Vera is heavier than Zara. Will is lighter than Zara. Who is the heaviest?",
    "options": [
      {
        "id": "o1",
        "text": "Vera",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Zara",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Will",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Vera is heavier than Zara, and Will is lighter than Zara, making Vera the heaviest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-78",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If all white laptops are heavy, and Zack has a white laptops, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Zack",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-79",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Ivan sits directly left of Vera. Xena sits directly right of Vera. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Vera",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ivan",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Xena",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Ivan on the left and Xena on the right, Vera must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-80",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Every time Grace eats phones, they get happy. Grace is not happy right now. Did they just eat phones?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-81",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "David runs faster than Walter, but slower than Oscar. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Walter",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "David",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Oscar",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "David > Walter, Oscar > David. Therefore Oscar > David > Walter. Walter is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-82",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Only green pens are allowed in the room. Eve brings a blue pens. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Eve",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY green pens. A blue pens does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-83",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory is older than Alice. Mia is younger than Alice. Who is the oldest?",
    "options": [
      {
        "id": "o1",
        "text": "Mallory",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Alice",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Mia",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Mallory is older than Alice, and Mia is younger than Alice, making Mallory the oldest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-84",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If all orange bags are heavy, and Oscar has a orange bags, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Oscar",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-85",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Victor sits directly left of Leo. Zack sits directly right of Leo. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Leo",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Victor",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Zack",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Victor on the left and Zack on the right, Leo must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-86",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Every time Bob eats apples, they get happy. Bob is not happy right now. Did they just eat apples?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-87",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A pattern repeats: gold, blue, green, gold, blue... What is the 4th item?",
    "options": [
      {
        "id": "o1",
        "text": "gold",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "blue",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "green",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "yellow",
        "isCorrect": false
      }
    ],
    "explanation": "The pattern resets every 3 items. The 4th is the same as the 1st.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-88",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If some cards are blue, and all blue things are valuable, are some cards valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with blue, and all blue are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-89",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo runs faster than Yara, but slower than Zara. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Yara",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Leo",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Zara",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Leo > Yara, Zara > Leo. Therefore Zara > Leo > Yara. Yara is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-90",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Only orange tokens are allowed in the room. Oscar brings a blue tokens. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Oscar",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY orange tokens. A blue tokens does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-91",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Frank is taller than Nina. Mallory is shorter than Nina. Who is the tallest?",
    "options": [
      {
        "id": "o1",
        "text": "Frank",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Nina",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Mallory",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Frank is taller than Nina, and Mallory is shorter than Nina, making Frank the tallest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-92",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If all black chairs are heavy, and Peggy has a black chairs, is it heavy?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Peggy",
        "isCorrect": false
      }
    ],
    "explanation": "By deductive logic, if all are heavy, then a specific one is also heavy.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-93",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "There are 10 doors. Behind door 3 is a trap. Behind the next is safety. Which door is safe?",
    "options": [
      {
        "id": "o1",
        "text": "Door 3",
        "isCorrect": false
      },
      {
        "id": "o2",
        "text": "Door 4",
        "isCorrect": true
      },
      {
        "id": "o3",
        "text": "Door 1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "The door next to the trap is safe.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-94",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Eve sits directly left of Vera. David sits directly right of Vera. Who is in the middle?",
    "options": [
      {
        "id": "o1",
        "text": "Vera",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Eve",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "David",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No one",
        "isCorrect": false
      }
    ],
    "explanation": "With Eve on the left and David on the right, Vera must be in the middle.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-95",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Every time Sam eats chairs, they get happy. Sam is not happy right now. Did they just eat chairs?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be known",
        "isCorrect": false
      }
    ],
    "explanation": "Modus tollens: If P then Q. Not Q, therefore not P.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-96",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A pattern repeats: brown, blue, green, brown, blue... What is the 4th item?",
    "options": [
      {
        "id": "o1",
        "text": "brown",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "blue",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "green",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "yellow",
        "isCorrect": false
      }
    ],
    "explanation": "The pattern resets every 3 items. The 4th is the same as the 1st.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-97",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If some apples are pink, and all pink things are valuable, are some apples valuable?",
    "options": [
      {
        "id": "o1",
        "text": "Yes",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "No",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Maybe",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Never",
        "isCorrect": false
      }
    ],
    "explanation": "Syllogism: Since some overlap with pink, and all pink are valuable, those specific ones are valuable.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-logical-gen-98",
    "categoryId": "logical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Grace runs faster than Oscar, but slower than Zara. Who is the slowest?",
    "options": [
      {
        "id": "o1",
        "text": "Oscar",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Grace",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Zara",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Equal speed",
        "isCorrect": false
      }
    ],
    "explanation": "Grace > Oscar, Zara > Grace. Therefore Zara > Grace > Oscar. Oscar is slowest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 20
  },
  {
    "id": "q-logical-gen-99",
    "categoryId": "logical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Only purple keys are allowed in the room. Sam brings a blue cars. Are they allowed in?",
    "options": [
      {
        "id": "o1",
        "text": "No",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Only on Tuesdays",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depends on Sam",
        "isCorrect": false
      }
    ],
    "explanation": "The rule specifies ONLY purple keys. A blue cars does not fit.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 30
  },
  {
    "id": "q-logical-gen-100",
    "categoryId": "logical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mia is older than Leo. Heidi is younger than Leo. Who is the oldest?",
    "options": [
      {
        "id": "o1",
        "text": "Mia",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Leo",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Heidi",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cannot be determined",
        "isCorrect": false
      }
    ],
    "explanation": "Mia is older than Leo, and Heidi is younger than Leo, making Mia the oldest.",
    "learningObjective": "Deductive and spatial reasoning.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-101",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "I have 17 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-102",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Judy's parent has 3 kids: Tom, Noah, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Judy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Noah",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-103",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 8 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-104",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "I am tall when I'm young, and short when I'm old. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A candle",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A tree",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A human",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A mountain",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-105",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "What month of the year has 28 days?",
    "options": [
      {
        "id": "o1",
        "text": "All of them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "February",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "December",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-106",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "What is full of holes but still holds water?",
    "options": [
      {
        "id": "o1",
        "text": "A sponge",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A bucket",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A net",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A cloud",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-107",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If you drop me I'm sure to crack, but give me a smile and I'll always smile back. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A mirror",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "An egg",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A phone",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A person",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-108",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "What runs but never walks, has a mouth but never talks?",
    "options": [
      {
        "id": "o1",
        "text": "A river",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A clock",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A baby",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A wind",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-109",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "What has words, but never speaks?",
    "options": [
      {
        "id": "o1",
        "text": "A book",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A teacher",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A radio",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A sign",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-110",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A shadow",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A ghost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A reflection",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A dream",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-111",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 4 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-112",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Eve's parent has 3 kids: Walter, Frank, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Eve",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Walter",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Frank",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-113",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 16 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-114",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 18 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-115",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Heidi's parent has 3 kids: Oscar, Will, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Heidi",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Oscar",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Will",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-116",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 19 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-117",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 11 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-118",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Sam's parent has 3 kids: Charlie, Nina, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Sam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Charlie",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nina",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-119",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 3 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-120",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 15 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-121",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah's parent has 3 kids: Leo, Frank, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Noah",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Leo",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Frank",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-122",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 15 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-123",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 12 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-124",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Will's parent has 3 kids: Leo, Grace, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Will",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Leo",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Grace",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-125",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 11 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-126",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 14 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-127",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Eve's parent has 3 kids: Bob, Zack, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Eve",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bob",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zack",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-128",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 7 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-129",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Xena's parent has 3 kids: Vera, Frank, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Xena",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Vera",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Frank",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-130",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 14 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-131",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "I have 3 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-132",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara's parent has 3 kids: Bob, Walter, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Yara",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bob",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Walter",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-133",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "I have 19 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-134",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera's parent has 3 kids: Victor, Will, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Vera",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Victor",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Will",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-135",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 5 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-136",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "I have 8 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-137",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom's parent has 3 kids: Xena, Yara, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Tom",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Xena",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yara",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-138",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 6 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-139",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Will's parent has 3 kids: Zack, Tom, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Will",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Zack",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Tom",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-140",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "I have 10 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-141",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo's parent has 3 kids: Bob, David, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Leo",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bob",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "David",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-142",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 18 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-143",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Heidi's parent has 3 kids: David, Leo, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Heidi",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "David",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leo",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-144",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 13 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-145",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah's parent has 3 kids: Vera, Will, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Noah",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Vera",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Will",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-146",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Grace's parent has 3 kids: Will, Sam, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Grace",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Will",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sam",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-147",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 16 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-148",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Will's parent has 3 kids: Yara, Tom, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Will",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Yara",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Tom",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-149",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 17 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-150",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Victor's parent has 3 kids: Walter, Oscar, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Victor",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Walter",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Oscar",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-151",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "I have 7 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-152",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Leo's parent has 3 kids: Uma, Oscar, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Leo",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Uma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Oscar",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-153",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 6 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-154",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Ivan's parent has 3 kids: Tom, Uma, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Ivan",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Uma",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-155",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "I have 9 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-156",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Walter's parent has 3 kids: Will, Zara, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Walter",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Will",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zara",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-157",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Bob's parent has 3 kids: Vera, Mia, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Bob",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Vera",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Mia",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-158",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "David's parent has 3 kids: Mallory, Nina, and...?",
    "options": [
      {
        "id": "o1",
        "text": "David",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Mallory",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nina",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-159",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 20 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-160",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mia's parent has 3 kids: Sam, Will, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Mia",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sam",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Will",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-161",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma's parent has 3 kids: Oscar, Eve, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Uma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Oscar",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Eve",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-162",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Peggy's parent has 3 kids: Zack, Zara, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Peggy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Zack",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zara",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-163",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zack's parent has 3 kids: Will, Zara, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Zack",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Will",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zara",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-164",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 12 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-165",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Judy's parent has 3 kids: Eve, Peggy, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Judy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Eve",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Peggy",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-166",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Walter's parent has 3 kids: Victor, Zara, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Walter",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Victor",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zara",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-167",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Bob's parent has 3 kids: Yara, Eve, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Bob",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Yara",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Eve",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-168",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Tom's parent has 3 kids: Heidi, Yara, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Tom",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Heidi",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yara",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-169",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 4 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-170",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mallory's parent has 3 kids: Tom, Heidi, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Mallory",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Heidi",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-171",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "I have 5 keys but no locks, space but no room. What am I?",
    "options": [
      {
        "id": "o1",
        "text": "A Keyboard",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A map",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A puzzle",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A safe",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-172",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Oscar's parent has 3 kids: Nina, Bob, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Oscar",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Nina",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bob",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-173",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Oscar's parent has 3 kids: Charlie, Ivan, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Oscar",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Charlie",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Ivan",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-174",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Victor's parent has 3 kids: Oscar, Noah, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Victor",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Oscar",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Noah",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-175",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Peggy's parent has 3 kids: Will, Grace, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Peggy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Will",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Grace",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-176",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Frank's parent has 3 kids: Charlie, Peggy, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Frank",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Charlie",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Peggy",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-177",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Victor's parent has 3 kids: Charlie, Vera, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Victor",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Charlie",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Vera",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-178",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mia's parent has 3 kids: Mallory, Ivan, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Mia",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Mallory",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Ivan",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-179",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Yara's parent has 3 kids: Victor, Grace, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Yara",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Victor",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Grace",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-180",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 10 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-181",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Ivan's parent has 3 kids: Oscar, Noah, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Ivan",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Oscar",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Noah",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-182",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Leo's parent has 3 kids: Victor, Heidi, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Leo",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Victor",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Heidi",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-183",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Bob's parent has 3 kids: Eve, Victor, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Bob",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Eve",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Victor",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-184",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Ivan's parent has 3 kids: Sam, Alice, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Ivan",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sam",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Alice",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-185",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Alice's parent has 3 kids: Grace, Will, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Alice",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Grace",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Will",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-186",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Heidi's parent has 3 kids: Ivan, Nina, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Heidi",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ivan",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nina",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-187",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zack's parent has 3 kids: Peggy, Alice, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Zack",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Peggy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Alice",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-188",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Nina's parent has 3 kids: Eve, Mia, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Nina",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Eve",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Mia",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-189",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory's parent has 3 kids: Victor, Uma, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Mallory",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Victor",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Uma",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-190",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah's parent has 3 kids: Tom, Zara, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Noah",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zara",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-191",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera's parent has 3 kids: Uma, Mallory, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Vera",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Uma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Mallory",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-192",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory's parent has 3 kids: Oscar, Charlie, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Mallory",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Oscar",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Charlie",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-193",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Oscar's parent has 3 kids: Grace, Eve, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Oscar",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Grace",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Eve",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-194",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma's parent has 3 kids: Mia, Sam, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Uma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Mia",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sam",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-195",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Eve's parent has 3 kids: Tom, Alice, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Eve",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Tom",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Alice",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-196",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "What must be broken before you can use it to make 9 cakes?",
    "options": [
      {
        "id": "o1",
        "text": "An egg",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A coconut",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A promise",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flour",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-197",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Victor's parent has 3 kids: Noah, David, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Victor",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Noah",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "David",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-brain_teasers-gen-198",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Uma's parent has 3 kids: Ivan, Heidi, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Uma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ivan",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Heidi",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 20
  },
  {
    "id": "q-brain_teasers-gen-199",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mallory's parent has 3 kids: Grace, Will, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Mallory",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Grace",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Will",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 30
  },
  {
    "id": "q-brain_teasers-gen-200",
    "categoryId": "brain_teasers",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Heidi's parent has 3 kids: Oscar, Tom, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Heidi",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Unknown",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Oscar",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Tom",
        "isCorrect": false
      }
    ],
    "explanation": "Lateral thinking riddle.",
    "learningObjective": "Lateral thinking.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-201",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack says: \"I saw 11 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-202",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Because Peggy failed a test, Yara says Peggy's opinion on coins is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-203",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Yara, if we ban apples, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-204",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mia says: \"Either you buy 5 cars, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-205",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara argues red is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-206",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying keys, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-207",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma twists Charlie's words about tokens to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-208",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "\"Tom says this medicine works, and they are a famous actor!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Appeal to False Authority",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Slippery Slope",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-209",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 28 pens is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-210",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Assuming that because Event B happened after Event A, A caused B. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Post Hoc (False Cause)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-211",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Tom says: \"I saw 14 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-212",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Because Zack failed a test, Frank says Zack's opinion on desks is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-213",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "\"Bob, if we ban candies, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-214",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Vera says: \"Either you buy 6 phones, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-215",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah argues gray is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-216",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying shoes, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-217",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Oscar twists Noah's words about cards to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-218",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Eve says this medicine works, and they are a famous actor!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Appeal to False Authority",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Slippery Slope",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-219",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 28 guitars is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-220",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Vera says: \"I saw 7 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-221",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Because Uma failed a test, Eve says Uma's opinion on cards is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-222",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "\"Eve, if we ban keys, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-223",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Alice says: \"Either you buy 5 chairs, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-224",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Heidi argues blue is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-225",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying bags, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-226",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Frank twists Ivan's words about books to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-227",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 44 laptops is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-228",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom says: \"I saw 20 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-229",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Because Will failed a test, Xena says Will's opinion on keys is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-230",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Sam, if we ban phones, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-231",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera says: \"Either you buy 4 cards, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-232",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Noah argues gold is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-233",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying candies, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-234",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Judy twists Bob's words about apples to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-235",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "\"Charlie says this medicine works, and they are a famous actor!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Appeal to False Authority",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Slippery Slope",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-236",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 21 chairs is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-237",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Walter says: \"I saw 11 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-238",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Because Bob failed a test, Victor says Bob's opinion on cards is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-239",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Noah, if we ban rings, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-240",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom says: \"Either you buy 11 tokens, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-241",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Zara argues purple is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-242",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zack twists Will's words about bags to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-243",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "\"Mia says this medicine works, and they are a famous actor!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Appeal to False Authority",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Slippery Slope",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-244",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 43 chairs is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-245",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Yara says: \"I saw 18 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-246",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Because Zack failed a test, Mallory says Zack's opinion on candies is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-247",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "\"Mia, if we ban phones, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-248",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zara says: \"Either you buy 19 books, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-249",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom argues red is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-250",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying chairs, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-251",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Leo twists Walter's words about chairs to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-252",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "\"Sam says this medicine works, and they are a famous actor!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Appeal to False Authority",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Slippery Slope",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-253",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 41 watches is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-254",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zara says: \"I saw 13 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-255",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Because Oscar failed a test, Nina says Oscar's opinion on apples is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-256",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "\"Uma, if we ban apples, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-257",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Nina says: \"Either you buy 12 apples, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-258",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom argues pink is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-259",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Eve twists Frank's words about apples to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-260",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 22 keys is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-261",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Oscar says: \"I saw 3 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-262",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Because Nina failed a test, Zack says Nina's opinion on candies is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-263",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Will, if we ban watches, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-264",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Xena says: \"Either you buy 3 shoes, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-265",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Sam argues green is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-266",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying cards, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-267",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Walter twists Tom's words about shoes to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-268",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "\"Vera says this medicine works, and they are a famous actor!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Appeal to False Authority",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Slippery Slope",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-269",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 47 cups is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-270",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Victor says: \"I saw 15 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-271",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Because Charlie failed a test, Grace says Charlie's opinion on cars is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-272",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Tom, if we ban chairs, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-273",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie says: \"Either you buy 18 phones, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-274",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Nina argues yellow is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-275",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying coins, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-276",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Victor twists Alice's words about shoes to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-277",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 49 watches is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-278",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Because Frank failed a test, Zara says Frank's opinion on laptops is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-279",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "\"Sam, if we ban tokens, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-280",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Victor says: \"Either you buy 14 boxes, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-281",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zack argues red is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-282",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying books, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-283",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo twists Bob's words about candies to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-284",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 30 rings is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-285",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie says: \"I saw 7 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-286",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Because Judy failed a test, Frank says Judy's opinion on pens is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-287",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Oscar, if we ban bags, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-288",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Will says: \"Either you buy 19 pens, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-289",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Uma argues silver is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-290",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying cups, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-291",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Leo twists Ivan's words about shoes to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-292",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "\"David says this medicine works, and they are a famous actor!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Appeal to False Authority",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Slippery Slope",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-293",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Changing the subject when asked a difficult question about 27 coins is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "Red Herring",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-294",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Heidi says: \"I saw 4 people doing X, so everyone does X.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hasty Generalization",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-295",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Because Bob failed a test, Leo says Bob's opinion on phones is invalid. What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Ad Hominem",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Appeal to Authority",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "False Dilemma",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-296",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Nina, if we ban desks, next they'll ban everything!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Slippery Slope",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-297",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Sam says: \"Either you buy 20 bags, or you hate our company.\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "False Dilemma",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Appeal to Nature",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-critical-gen-298",
    "categoryId": "critical",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Nina argues purple is the best color because it's their favorite. What is wrong here?",
    "options": [
      {
        "id": "o1",
        "text": "Subjective opinion used as objective fact",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Math error",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "False Dilemma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Nothing is wrong",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 20
  },
  {
    "id": "q-critical-gen-299",
    "categoryId": "critical",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "\"Everyone in town is buying desks, so you should too!\" What fallacy is this?",
    "options": [
      {
        "id": "o1",
        "text": "Bandwagon (Ad Populum)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Straw Man",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Slippery Slope",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Red Herring",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 30
  },
  {
    "id": "q-critical-gen-300",
    "categoryId": "critical",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera twists Tom's words about chairs to make them sound evil, then attacks the twisted words. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Straw Man",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Ad Hominem",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hasty Generalization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Circular Reasoning",
        "isCorrect": false
      }
    ],
    "explanation": "Identifying logical fallacies.",
    "learningObjective": "Critical reasoning and logic.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-301",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If Grace invests ₦9000 at simple interest of 11% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦990",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦1100",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1040",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-302",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory buys 3 guitars at ₦43 each and sells them for ₦53 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦30",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦129",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦159",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-303",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A store offers a 18% discount on a ₦7000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦1260",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦7000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦180",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦6900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-304",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Yara earns ₦18000 monthly and saves 2%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦360",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦17998",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦200",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-305",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If inflation is 2% and Xena keeps ₦3000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦60",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦2",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-306",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A product costs ₦10000. Tax is 4%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦10400",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦10000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦400",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦10004",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-307",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie bought a stock at ₦10000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦7500",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦10000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-308",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If you save ₦12000 every month for a year, how much will you have in total (without interest)?",
    "options": [
      {
        "id": "o1",
        "text": "₦144000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦120000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦288000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦12000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-309",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You buy 5 items for ₦5000 total. What is the unit cost per item?",
    "options": [
      {
        "id": "o1",
        "text": "₦1000.00",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦5000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦25000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-310",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "An investment of ₦19000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦38000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦57000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦19000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦6333.333333333333",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-311",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If Sam invests ₦3000 at simple interest of 4% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦120",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦400",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦170",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-312",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Leo buys 10 tokens at ₦22 each and sells them for ₦32 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦100",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦220",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦320",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-313",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A store offers a 8% discount on a ₦6000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦480",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦6000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦80",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-314",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Noah earns ₦6000 monthly and saves 10%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦600",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦600",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦5990",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-315",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If inflation is 8% and Alice keeps ₦4000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦320",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦4000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦8",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-316",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A product costs ₦7000. Tax is 9%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦7630",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦7000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦630",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦7009",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-317",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Grace bought a stock at ₦11000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦8250",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦11000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦16500",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5500",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-318",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If you save ₦11000 every month for a year, how much will you have in total (without interest)?",
    "options": [
      {
        "id": "o1",
        "text": "₦132000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦110000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦264000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦11000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-319",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You buy 8 items for ₦8000 total. What is the unit cost per item?",
    "options": [
      {
        "id": "o1",
        "text": "₦1000.00",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦8000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦64000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦8",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-320",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "An investment of ₦12000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦24000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦36000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦4000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-321",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Alice invests ₦17000 at simple interest of 7% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦1190",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦17000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦700",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1240",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-322",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Judy buys 10 coins at ₦37 each and sells them for ₦47 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦100",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦370",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦470",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-323",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store offers a 14% discount on a ₦7000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦980",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦7000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦140",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦6900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-324",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Frank earns ₦9000 monthly and saves 5%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦450",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦1800",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦8995",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦500",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-325",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If inflation is 8% and Walter keeps ₦13000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦1040",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦13000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦8",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-326",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A product costs ₦7000. Tax is 10%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦7700",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦7000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦700",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦7010",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-327",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Yara bought a stock at ₦3000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦2250",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦4500",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1500",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-328",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You buy 13 items for ₦13000 total. What is the unit cost per item?",
    "options": [
      {
        "id": "o1",
        "text": "₦1000.00",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦13000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦169000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦13",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-329",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "An investment of ₦15000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦30000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦45000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-330",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Mallory invests ₦15000 at simple interest of 6% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦900",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦600",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦950",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-331",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom buys 7 phones at ₦22 each and sells them for ₦32 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦70",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦154",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦224",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-332",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store offers a 22% discount on a ₦17000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦3740",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦17000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦220",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦16900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-333",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Will earns ₦10000 monthly and saves 2%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦200",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦5000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦9998",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦200",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-334",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If inflation is 8% and Leo keeps ₦20000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦1600",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦20000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦8",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-335",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A product costs ₦9000. Tax is 5%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦9450",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦450",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦9005",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-336",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Eve bought a stock at ₦9000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦6750",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦13500",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦4500",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-337",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If you save ₦8000 every month for a year, how much will you have in total (without interest)?",
    "options": [
      {
        "id": "o1",
        "text": "₦96000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦80000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦192000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦8000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-338",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "An investment of ₦3000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦6000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-339",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Tom invests ₦15000 at simple interest of 10% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦1500",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦1000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1550",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-340",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Frank buys 13 chairs at ₦24 each and sells them for ₦34 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦130",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦312",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦442",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-341",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store offers a 12% discount on a ₦19000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦2280",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦19000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦120",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦18900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-342",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Ivan earns ₦15000 monthly and saves 7%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦1050",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦2142.8571428571427",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦14993",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦700",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-343",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If inflation is 8% and Bob keeps ₦12000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦960",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦8",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-344",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A product costs ₦12000. Tax is 5%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦12600",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦600",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦12005",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-345",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mia bought a stock at ₦11000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦8250",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦11000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦16500",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5500",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-346",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You buy 9 items for ₦9000 total. What is the unit cost per item?",
    "options": [
      {
        "id": "o1",
        "text": "₦1000.00",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦81000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦9",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-347",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "An investment of ₦6000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦12000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦18000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦6000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦2000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-348",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Oscar invests ₦3000 at simple interest of 3% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦90",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦300",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦140",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-349",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Peggy buys 11 bags at ₦48 each and sells them for ₦58 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦110",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦528",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦638",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-350",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store offers a 16% discount on a ₦20000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦3200",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦20000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦160",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦19900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-351",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Victor earns ₦9000 monthly and saves 5%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦450",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦1800",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦8995",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦500",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-352",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If inflation is 9% and Judy keeps ₦15000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦1350",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦9",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-353",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A product costs ₦11000. Tax is 4%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦11440",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦11000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦440",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦11004",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-354",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Sam bought a stock at ₦10000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦7500",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦10000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-355",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If you save ₦4000 every month for a year, how much will you have in total (without interest)?",
    "options": [
      {
        "id": "o1",
        "text": "₦48000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦40000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦96000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦4000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-356",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "An investment of ₦9000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦18000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦27000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦3000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-357",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Charlie invests ₦14000 at simple interest of 6% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦840",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦14000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦600",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦890",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-358",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Nina buys 3 apples at ₦42 each and sells them for ₦52 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦30",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦126",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦156",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-359",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store offers a 6% discount on a ₦8000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦480",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦8000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦60",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦7900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-360",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zack earns ₦18000 monthly and saves 6%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦1080",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦17994",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦600",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-361",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If inflation is 11% and Zara keeps ₦5000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦550",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦5000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦11",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-362",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A product costs ₦3000. Tax is 3%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦3090",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦90",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦3003",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-363",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Oscar bought a stock at ₦8000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦6000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦8000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦4000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-364",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If you save ₦14000 every month for a year, how much will you have in total (without interest)?",
    "options": [
      {
        "id": "o1",
        "text": "₦168000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦140000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦336000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦14000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-365",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You buy 15 items for ₦15000 total. What is the unit cost per item?",
    "options": [
      {
        "id": "o1",
        "text": "₦1000.00",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦225000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦15",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-366",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "An investment of ₦18000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦36000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦54000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦18000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦6000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-367",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If Oscar invests ₦12000 at simple interest of 11% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦1320",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦1100",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1370",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-368",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory buys 17 books at ₦24 each and sells them for ₦34 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦170",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦408",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦578",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-369",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A store offers a 20% discount on a ₦12000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦2400",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦200",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦11900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-370",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie earns ₦17000 monthly and saves 6%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦1020",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦2833.3333333333335",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦16994",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦600",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-371",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If inflation is 10% and Eve keeps ₦3000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦300",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦10",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-372",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A product costs ₦5000. Tax is 7%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦5350",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦5000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦350",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5007",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-373",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack bought a stock at ₦12000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦9000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦18000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦6000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-374",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If you save ₦17000 every month for a year, how much will you have in total (without interest)?",
    "options": [
      {
        "id": "o1",
        "text": "₦204000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦170000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦408000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦17000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-375",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You buy 12 items for ₦12000 total. What is the unit cost per item?",
    "options": [
      {
        "id": "o1",
        "text": "₦1000.00",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦144000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦12",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-376",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "An investment of ₦13000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦26000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦39000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦13000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦4333.333333333333",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-377",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If Zara invests ₦8000 at simple interest of 2% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦160",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦8000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦200",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦210",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-378",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah buys 17 cards at ₦22 each and sells them for ₦32 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦170",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦374",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦544",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-379",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A store offers a 8% discount on a ₦17000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦1360",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦17000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦80",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦16900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-380",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo earns ₦7000 monthly and saves 8%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦560",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦875",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦6992",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦800",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-381",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If inflation is 8% and Zack keeps ₦3000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦240",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦8",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-382",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A product costs ₦3000. Tax is 7%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦3210",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦3000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦210",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦3007",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-383",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo bought a stock at ₦9000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦6750",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦13500",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦4500",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-384",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If you save ₦6000 every month for a year, how much will you have in total (without interest)?",
    "options": [
      {
        "id": "o1",
        "text": "₦72000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦60000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦144000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦6000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-385",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If Walter invests ₦4000 at simple interest of 10% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦400",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦4000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦1000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦450",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-386",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Alice buys 17 books at ₦42 each and sells them for ₦52 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦170",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦714",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦884",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-387",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A store offers a 10% discount on a ₦7000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦700",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦7000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦100",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦6900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-388",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Alice earns ₦15000 monthly and saves 11%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦1650",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦1363.6363636363637",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦14989",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1100",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-389",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If inflation is 2% and Noah keeps ₦15000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦300",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦2",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-390",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A product costs ₦10000. Tax is 5%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦10500",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦10000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦500",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦10005",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-391",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma bought a stock at ₦11000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦8250",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦11000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦16500",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5500",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-392",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "An investment of ₦4000 triples in value. How much profit was made?",
    "options": [
      {
        "id": "o1",
        "text": "₦8000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦12000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦4000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1333.3333333333333",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-393",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Mallory invests ₦11000 at simple interest of 6% per year, what is the interest after 1 year?",
    "options": [
      {
        "id": "o1",
        "text": "₦660",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦11000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦600",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦710",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-394",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Sam buys 20 coins at ₦41 each and sells them for ₦51 each. Total profit?",
    "options": [
      {
        "id": "o1",
        "text": "₦200",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦820",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦1020",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-395",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store offers a 20% discount on a ₦9000 laptop. How much is the discount?",
    "options": [
      {
        "id": "o1",
        "text": "₦1800",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦9000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦200",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦8900",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-396",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Walter earns ₦3000 monthly and saves 7%. How much is saved in 1 month?",
    "options": [
      {
        "id": "o1",
        "text": "₦210",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦428.57142857142856",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦2993",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦700",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-397",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If inflation is 6% and Xena keeps ₦4000 under a mattress, what is the real purchasing power lost?",
    "options": [
      {
        "id": "o1",
        "text": "₦240",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "None",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦4000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦6",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-financial_math-gen-398",
    "categoryId": "financial_math",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A product costs ₦19000. Tax is 11%. What is the final price?",
    "options": [
      {
        "id": "o1",
        "text": "₦21090",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦19000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦2090",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦19011",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 20
  },
  {
    "id": "q-financial_math-gen-399",
    "categoryId": "financial_math",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Frank bought a stock at ₦10000. It drops by 50%, then rises by 50%. What is the current value?",
    "options": [
      {
        "id": "o1",
        "text": "₦7500",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦10000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦15000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦5000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 30
  },
  {
    "id": "q-financial_math-gen-400",
    "categoryId": "financial_math",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If you save ₦3000 every month for a year, how much will you have in total (without interest)?",
    "options": [
      {
        "id": "o1",
        "text": "₦36000",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "₦30000",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "₦72000",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "₦3000",
        "isCorrect": false
      }
    ],
    "explanation": "Basic financial mathematics application.",
    "learningObjective": "Financial literacy and math.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-401",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Walter saves ₦6500 monthly in a jar. With 7% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-402",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Grace finds ₦14000 and spends it on cups instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-403",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mallory buys a coffee every day for ₦1500. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-404",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Frank spreads their ₦43000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-405",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Grace gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-406",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Which of these is considered a 'Need' rather than a 'Want'?",
    "options": [
      {
        "id": "o1",
        "text": "Basic groceries",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A new black candies",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Designer shoes",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A cinema ticket",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-407",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Noah borrows ₦7000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-408",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "An emergency fund should ideally cover how many months of living expenses?",
    "options": [
      {
        "id": "o1",
        "text": "3 to 6 months",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "1 week",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "10 years",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-409",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Putting money into a retirement account early to benefit from interest on interest is called?",
    "options": [
      {
        "id": "o1",
        "text": "Compound Interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Day Trading",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-410",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If Judy buys a brand new car for ₦110000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-411",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Bob saves ₦8500 monthly in a jar. With 6% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-412",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Oscar finds ₦10000 and spends it on cards instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-413",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom buys a coffee every day for ₦1100. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-414",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo spreads their ₦45000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-415",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Tom gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-416",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Eve borrows ₦14000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-417",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If Bob buys a brand new car for ₦150000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-418",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah saves ₦3000 monthly in a jar. With 7% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-419",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Will finds ₦6000 and spends it on chairs instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-420",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mia buys a coffee every day for ₦500. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-421",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Eve spreads their ₦44000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-422",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mia gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-423",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Eve borrows ₦15000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-424",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Bob buys a brand new car for ₦30000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-425",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Noah saves ₦5500 monthly in a jar. With 5% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-426",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Sam finds ₦17000 and spends it on cups instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-427",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Leo buys a coffee every day for ₦1900. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-428",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack spreads their ₦35000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-429",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Vera gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-430",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Grace borrows ₦3000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-431",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If Will buys a brand new car for ₦130000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-432",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Zack saves ₦2500 monthly in a jar. With 7% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-433",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Walter finds ₦16000 and spends it on candies instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-434",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie buys a coffee every day for ₦1900. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-435",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Sam spreads their ₦41000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-436",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-437",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Xena borrows ₦5000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-438",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If Bob buys a brand new car for ₦40000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-439",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Heidi saves ₦9000 monthly in a jar. With 6% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-440",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera finds ₦8000 and spends it on keys instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-441",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Ivan buys a coffee every day for ₦900. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-442",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Judy spreads their ₦35000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-443",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "David gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-444",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Vera borrows ₦3000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-445",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Alice buys a brand new car for ₦140000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-446",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie saves ₦2000 monthly in a jar. With 5% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-447",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Peggy finds ₦13000 and spends it on pens instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-448",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Alice buys a coffee every day for ₦900. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-449",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Peggy spreads their ₦35000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-450",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Oscar borrows ₦9000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-451",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Zara buys a brand new car for ₦160000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-452",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Yara saves ₦10000 monthly in a jar. With 5% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-453",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Noah finds ₦20000 and spends it on cards instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-454",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Heidi buys a coffee every day for ₦700. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-455",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera spreads their ₦43000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-456",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Alice gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-457",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mia borrows ₦9000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-458",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If Sam buys a brand new car for ₦180000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-459",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Zara saves ₦2000 monthly in a jar. With 4% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-460",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Frank finds ₦17000 and spends it on tokens instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-461",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Alice buys a coffee every day for ₦300. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-462",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Judy spreads their ₦28000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-463",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Eve gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-464",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma borrows ₦15000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-465",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If Heidi buys a brand new car for ₦70000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-466",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Walter saves ₦4000 monthly in a jar. With 3% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-467",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Grace finds ₦12000 and spends it on tokens instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-468",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara buys a coffee every day for ₦1400. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-469",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Charlie spreads their ₦50000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-470",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-471",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Grace borrows ₦4000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-472",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Noah buys a brand new car for ₦200000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-473",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mallory saves ₦3000 monthly in a jar. With 5% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-474",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Nina finds ₦12000 and spends it on rings instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-475",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Ivan buys a coffee every day for ₦1600. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-476",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Nina spreads their ₦26000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-477",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Xena borrows ₦16000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-478",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If Nina buys a brand new car for ₦90000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-479",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mia saves ₦8500 monthly in a jar. With 5% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-480",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Tom finds ₦19000 and spends it on apples instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-481",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Sam buys a coffee every day for ₦1700. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-482",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Frank spreads their ₦42000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-483",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Zara gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-484",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Vera borrows ₦18000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-485",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If Walter buys a brand new car for ₦160000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-486",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Will saves ₦6500 monthly in a jar. With 6% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-487",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "David finds ₦17000 and spends it on cars instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-488",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Grace buys a coffee every day for ₦900. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-489",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo spreads their ₦44000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-490",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Walter borrows ₦11000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-491",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "If Judy buys a brand new car for ₦180000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-492",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Sam saves ₦7500 monthly in a jar. With 6% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-493",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mallory finds ₦14000 and spends it on guitars instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-494",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack buys a coffee every day for ₦600. Over a year, this is an example of what?",
    "options": [
      {
        "id": "o1",
        "text": "The Latte Factor (small recurring expenses)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hyperinflation",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Capital Gains",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Fixed Income",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-495",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Ivan spreads their ₦32000 across 5 different banks. What principle is this?",
    "options": [
      {
        "id": "o1",
        "text": "Diversification/Risk Reduction",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Tax Evasion",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Compound Interest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leverage",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-496",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Will gets a raise and immediately upgrades their car and house. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Lifestyle Creep",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Frugality",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Amortization",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deflation",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-497",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mia borrows ₦10000 on a credit card and only pays the minimum balance. What happens?",
    "options": [
      {
        "id": "o1",
        "text": "Debt grows rapidly due to high interest",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "The debt is forgiven",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Their credit score instantly becomes perfect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "No extra charges are applied",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-money-gen-498",
    "categoryId": "money",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "If Mia buys a brand new car for ₦180000, what happens the moment they drive it off the lot?",
    "options": [
      {
        "id": "o1",
        "text": "It depreciates in value",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It appreciates in value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "The value stays the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It stops consuming gas",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 20
  },
  {
    "id": "q-money-gen-499",
    "categoryId": "money",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Ivan saves ₦9000 monthly in a jar. With 6% inflation, what happens to it?",
    "options": [
      {
        "id": "o1",
        "text": "It loses purchasing power",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "It gains value",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "It stays exactly the same",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It doubles",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 30
  },
  {
    "id": "q-money-gen-500",
    "categoryId": "money",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack finds ₦14000 and spends it on phones instead of saving it. What behavioral trap is this?",
    "options": [
      {
        "id": "o1",
        "text": "Mental Accounting",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Diversification",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Compounding",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding core personal finance concepts.",
    "learningObjective": "Personal finance concepts.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-501",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Peggy's company sells keys. CAC is ₦1900, LTV is ₦950. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-502",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Will runs a bakery. Rent is ₦37000. If they sell 8 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-503",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Revenue is ₦8000, Expenses are ₦23500. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-504",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Bob buys chairs for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-505",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on cars. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-506",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "David scales production from 10 to 4200 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-507",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "The amount of cash a business actually has on hand to pay bills right now is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Liquidity/Cash Flow",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Accounts Receivable",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Valuation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Goodwill",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-508",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A business spends ₦9000 on advertising and makes ₦27000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-509",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Selling shares of ownership in a company to raise capital is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Equity financing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Debt financing",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bootstrapping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Crowdfunding",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-510",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "The unique feature that makes Charlie's desks better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-511",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Eve's company sells keys. CAC is ₦300, LTV is ₦150. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-512",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mia runs a bakery. Rent is ₦26000. If they sell 16 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-513",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Revenue is ₦7000, Expenses are ₦25000. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-514",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Eve buys laptops for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-515",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on tokens. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-516",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Eve scales production from 10 to 4800 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-517",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A business spends ₦19000 on advertising and makes ₦57000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-518",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "The unique feature that makes Alice's coins better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-519",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera's company sells phones. CAC is ₦800, LTV is ₦400. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-520",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Walter runs a bakery. Rent is ₦32000. If they sell 13 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-521",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Revenue is ₦6000, Expenses are ₦24500. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-522",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Bob buys apples for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-523",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Sam scales production from 10 to 2800 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-524",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "The unique feature that makes Frank's desks better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-525",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "David's company sells laptops. CAC is ₦600, LTV is ₦300. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-526",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Bob runs a bakery. Rent is ₦25000. If they sell 18 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-527",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Revenue is ₦11000, Expenses are ₦10500. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-528",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack buys watches for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-529",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on chairs. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-530",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Bob scales production from 10 to 3900 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-531",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A business spends ₦10000 on advertising and makes ₦30000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-532",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "The unique feature that makes Alice's rings better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-533",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Frank's company sells bags. CAC is ₦1100, LTV is ₦550. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-534",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Alice runs a bakery. Rent is ₦27000. If they sell 19 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-535",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Revenue is ₦19000, Expenses are ₦10500. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-536",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Will buys boxes for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-537",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zara scales production from 10 to 2300 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-538",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "The unique feature that makes Bob's laptops better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-539",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Yara's company sells chairs. CAC is ₦1200, LTV is ₦600. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-540",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Nina runs a bakery. Rent is ₦37000. If they sell 6 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-541",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Revenue is ₦18000, Expenses are ₦21500. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-542",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Oscar buys shoes for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-543",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on rings. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-544",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Ivan scales production from 10 to 4400 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-545",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A business spends ₦12000 on advertising and makes ₦36000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-546",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "The unique feature that makes Charlie's keys better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-547",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Ivan's company sells bags. CAC is ₦2000, LTV is ₦1000. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-548",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zara runs a bakery. Rent is ₦26000. If they sell 19 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-549",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Revenue is ₦9000, Expenses are ₦19000. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-550",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Charlie buys coins for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-551",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Charlie scales production from 10 to 2700 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-552",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A business spends ₦13000 on advertising and makes ₦39000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-553",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "The unique feature that makes Xena's phones better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-554",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Uma's company sells pens. CAC is ₦400, LTV is ₦200. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-555",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Walter runs a bakery. Rent is ₦42000. If they sell 4 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-556",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Revenue is ₦7000, Expenses are ₦17000. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-557",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Will buys cards for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-558",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on pens. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-559",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Ivan scales production from 10 to 2700 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-560",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "The unique feature that makes Victor's phones better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-561",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Leo's company sells rings. CAC is ₦1200, LTV is ₦600. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-562",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mia runs a bakery. Rent is ₦27000. If they sell 17 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-563",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Revenue is ₦13000, Expenses are ₦18000. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-564",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma buys apples for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-565",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on cards. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-566",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Sam scales production from 10 to 3200 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-567",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A business spends ₦15000 on advertising and makes ₦45000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-568",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "The unique feature that makes Oscar's candies better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-569",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zack's company sells phones. CAC is ₦800, LTV is ₦400. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-570",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zara runs a bakery. Rent is ₦32000. If they sell 8 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-571",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Revenue is ₦20000, Expenses are ₦18500. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-572",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Frank buys cars for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-573",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on bags. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-574",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Peggy scales production from 10 to 3200 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-575",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A business spends ₦11000 on advertising and makes ₦33000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-576",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "The unique feature that makes Tom's bags better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-577",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Noah's company sells cards. CAC is ₦1100, LTV is ₦550. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-578",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Alice runs a bakery. Rent is ₦35000. If they sell 13 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-579",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Revenue is ₦13000, Expenses are ₦15500. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-580",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Tom buys watches for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-581",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on cups. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-582",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Eve scales production from 10 to 3800 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-583",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A business spends ₦17000 on advertising and makes ₦51000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-584",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "The unique feature that makes Yara's cups better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-585",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mia's company sells cars. CAC is ₦800, LTV is ₦400. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-586",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Uma runs a bakery. Rent is ₦32000. If they sell 18 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-587",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Revenue is ₦11000, Expenses are ₦23000. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-588",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Grace buys guitars for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-589",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Eve scales production from 10 to 4300 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-590",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "The unique feature that makes Tom's keys better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-591",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Leo's company sells tokens. CAC is ₦500, LTV is ₦250. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-592",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Oscar runs a bakery. Rent is ₦50000. If they sell 3 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-593",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Revenue is ₦9000, Expenses are ₦11500. How is Profit calculated?",
    "options": [
      {
        "id": "o1",
        "text": "Revenue - Expenses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Revenue + Expenses",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Expenses / Revenue",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Revenue * Expenses",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-594",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zara buys desks for ₦100 and sells them for ₦200. The ₦100 difference is the...?",
    "options": [
      {
        "id": "o1",
        "text": "Gross Margin",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Net Loss",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Overhead",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sunk Cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-595",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A competitor opens across the street lowering prices on guitars. What business force is this?",
    "options": [
      {
        "id": "o1",
        "text": "Competition/Market Forces",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Monopoly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Inflation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Depreciation",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-596",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Alice scales production from 10 to 3200 units, lowering the cost per unit. This is called...?",
    "options": [
      {
        "id": "o1",
        "text": "Economies of Scale",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Diminishing Returns",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Opportunity Cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Bait and Switch",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-597",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A business spends ₦7000 on advertising and makes ₦21000 in new sales. The advertising was...?",
    "options": [
      {
        "id": "o1",
        "text": "A positive Return on Investment (ROI)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A waste of money",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A sunk cost",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A fixed cost",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-business-gen-598",
    "categoryId": "business",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "The unique feature that makes Walter's cards better than the competition is called its...?",
    "options": [
      {
        "id": "o1",
        "text": "Competitive Advantage / USP",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Liability",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depreciation",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Deficit",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 20
  },
  {
    "id": "q-business-gen-599",
    "categoryId": "business",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Heidi's company sells watches. CAC is ₦300, LTV is ₦150. Is this a good model?",
    "options": [
      {
        "id": "o1",
        "text": "No, CAC > LTV",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Yes, LTV is good",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Depends on the product",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yes, as long as sales grow",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 30
  },
  {
    "id": "q-business-gen-600",
    "categoryId": "business",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zara runs a bakery. Rent is ₦24000. If they sell 5 items, rent costs...",
    "options": [
      {
        "id": "o1",
        "text": "Remain the same (Fixed Cost)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Increase",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Decrease",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Disappear",
        "isCorrect": false
      }
    ],
    "explanation": "Business economics and accounting principles.",
    "learningObjective": "Business economics.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-601",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mia is arguing with you about 14 keys. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-602",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 29 tasks to do today, but only time for 28. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-603",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 14 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Uma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-604",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Victor gossips about Bob to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Victor",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-605",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦2500. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Victor",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-606",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You feel overwhelmed with 11 assignments. What is a healthy coping mechanism?",
    "options": [
      {
        "id": "o1",
        "text": "Take a short break and break tasks into steps",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Procrastinate until tomorrow",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Drink 32 energy drinks",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-607",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Eve offers you a \"guaranteed\" investment returning 42% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-608",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the cups project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-609",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Frank. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-610",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 50 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-611",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Walter is arguing with you about 9 laptops. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-612",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 42 tasks to do today, but only time for 41. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-613",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 16 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Sam",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-614",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Sam gossips about Walter to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Sam",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-615",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦2700. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Ivan",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-616",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You feel overwhelmed with 9 assignments. What is a healthy coping mechanism?",
    "options": [
      {
        "id": "o1",
        "text": "Take a short break and break tasks into steps",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Procrastinate until tomorrow",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Drink 50 energy drinks",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-617",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara offers you a \"guaranteed\" investment returning 49% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-618",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the books project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-619",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Oscar. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-620",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 31 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-621",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Walter is arguing with you about 6 cards. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-622",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack gossips about Bob to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Zack",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-623",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦3100. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Mallory",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-624",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You feel overwhelmed with 18 assignments. What is a healthy coping mechanism?",
    "options": [
      {
        "id": "o1",
        "text": "Take a short break and break tasks into steps",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Procrastinate until tomorrow",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Drink 28 energy drinks",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-625",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera offers you a \"guaranteed\" investment returning 28% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-626",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Grace. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-627",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 47 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-628",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Alice is arguing with you about 19 guitars. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-629",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 28 tasks to do today, but only time for 27. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-630",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 19 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Heidi",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-631",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Heidi gossips about Mia to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Heidi",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-632",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦4600. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Noah",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-633",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You feel overwhelmed with 17 assignments. What is a healthy coping mechanism?",
    "options": [
      {
        "id": "o1",
        "text": "Take a short break and break tasks into steps",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Procrastinate until tomorrow",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Drink 49 energy drinks",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-634",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Sam offers you a \"guaranteed\" investment returning 46% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-635",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the apples project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-636",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 33 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-637",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom is arguing with you about 13 watches. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-638",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 34 tasks to do today, but only time for 33. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-639",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 12 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Mallory",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-640",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Bob gossips about Will to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Bob",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-641",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦4800. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Vera",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-642",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You feel overwhelmed with 15 assignments. What is a healthy coping mechanism?",
    "options": [
      {
        "id": "o1",
        "text": "Take a short break and break tasks into steps",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Procrastinate until tomorrow",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Drink 35 energy drinks",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-643",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Nina offers you a \"guaranteed\" investment returning 27% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-644",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the phones project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-645",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Peggy. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-646",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 49 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-647",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Eve is arguing with you about 4 keys. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-648",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 32 tasks to do today, but only time for 31. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-649",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 7 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Zara",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-650",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Walter gossips about Ivan to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Walter",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-651",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You feel overwhelmed with 12 assignments. What is a healthy coping mechanism?",
    "options": [
      {
        "id": "o1",
        "text": "Take a short break and break tasks into steps",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Procrastinate until tomorrow",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Drink 41 energy drinks",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-652",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Yara offers you a \"guaranteed\" investment returning 48% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-653",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the bags project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-654",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Noah. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-655",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 32 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-656",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Sam is arguing with you about 5 boxes. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-657",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 22 tasks to do today, but only time for 21. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-658",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mallory gossips about Eve to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Mallory",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-659",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦2300. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Tom",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-660",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Xena offers you a \"guaranteed\" investment returning 40% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-661",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the boxes project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-662",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Ivan. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-663",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 35 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-664",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Grace is arguing with you about 19 chairs. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-665",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 8 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Victor",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-666",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Victor gossips about Peggy to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Victor",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-667",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦3600. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Charlie",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-668",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You feel overwhelmed with 7 assignments. What is a healthy coping mechanism?",
    "options": [
      {
        "id": "o1",
        "text": "Take a short break and break tasks into steps",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Procrastinate until tomorrow",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Drink 47 energy drinks",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-669",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah offers you a \"guaranteed\" investment returning 42% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-670",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the guitars project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-671",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Victor. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-672",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 44 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-673",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Nina is arguing with you about 11 watches. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-674",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 50 tasks to do today, but only time for 49. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-675",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 9 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Charlie",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-676",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zara gossips about Bob to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Zara",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-677",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦4100. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Eve",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-678",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zack offers you a \"guaranteed\" investment returning 32% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-679",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the candies project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-680",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Mallory. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-681",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Will is arguing with you about 19 desks. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-682",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 38 tasks to do today, but only time for 37. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-683",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 11 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Leo",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-684",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Grace gossips about Victor to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Grace",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-685",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦4000. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Judy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-686",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mia offers you a \"guaranteed\" investment returning 42% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-687",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Ivan is arguing with you about 19 coins. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-688",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 41 tasks to do today, but only time for 40. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-689",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Peggy gossips about Charlie to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Peggy",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-690",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You feel overwhelmed with 4 assignments. What is a healthy coping mechanism?",
    "options": [
      {
        "id": "o1",
        "text": "Take a short break and break tasks into steps",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Procrastinate until tomorrow",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Drink 40 energy drinks",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-691",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Walter offers you a \"guaranteed\" investment returning 26% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-692",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A coworker takes credit for your work on the pens project. What is a professional response?",
    "options": [
      {
        "id": "o1",
        "text": "Speak with them privately to correct the record",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Scream at them in a meeting",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Quit the job",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Sabotage their next project",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-693",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You are running 15 minutes late for an important meeting with Xena. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Call/message ahead immediately to inform them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sneak in and hope nobody notices",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Lie and say your car broke down",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Cancel the meeting entirely",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-694",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Someone online whom you've never met asks for 28 dollars to help them. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "A likely internet scam",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great opportunity to help",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A legal requirement",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bank error",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-695",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory is arguing with you about 20 phones. They are raising their voice. Best response?",
    "options": [
      {
        "id": "o1",
        "text": "Stay calm and validate their feelings",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Shout louder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Ignore them completely",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Insult their intelligence",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-696",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 46 tasks to do today, but only time for 45. How do you prioritize?",
    "options": [
      {
        "id": "o1",
        "text": "Urgent vs Important matrix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Easiest first",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Randomly",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Do nothing",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-697",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You receive an email from \"Bank\" asking for your password for 15 accounts. What do you do?",
    "options": [
      {
        "id": "o1",
        "text": "Do not reply and report as phishing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Send the password",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward to Walter",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Click the link to check",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-real_life-gen-698",
    "categoryId": "real_life",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Ivan gossips about Sam to you. What is the most mature response?",
    "options": [
      {
        "id": "o1",
        "text": "Change the subject or excuse yourself",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Join in the gossip",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Spread it further",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Yell at Ivan",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 20
  },
  {
    "id": "q-real_life-gen-699",
    "categoryId": "real_life",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You make a mistake at work costing ₦4900. What is the best action?",
    "options": [
      {
        "id": "o1",
        "text": "Admit it immediately and propose a fix",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Hide it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame Uma",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Quit your job",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 30
  },
  {
    "id": "q-real_life-gen-700",
    "categoryId": "real_life",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Eve offers you a \"guaranteed\" investment returning 22% a week. What should you think?",
    "options": [
      {
        "id": "o1",
        "text": "It's likely a scam (too good to be true)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Invest immediately",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Borrow money to invest",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "It's a standard bank rate",
        "isCorrect": false
      }
    ],
    "explanation": "Practical life skills and emotional intelligence.",
    "learningObjective": "Life skills.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-701",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 13 rings. You take away 2. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "11",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-702",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Some months have 31 days. How many have 28 days?",
    "options": [
      {
        "id": "o1",
        "text": "All 12 of them",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "1",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-703",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If a plane crashes on the border of Nigeria and Benin, where do they bury the survivors?",
    "options": [
      {
        "id": "o1",
        "text": "You don't bury survivors",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Nigeria",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Benin",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Half and half",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-704",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "How many guitars can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "41",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-705",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Before Mount Everest was discovered, what was the highest mountain on Earth?",
    "options": [
      {
        "id": "o1",
        "text": "Mount Everest (it just wasn't discovered)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Mount Kilimanjaro",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "K2",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "The Alps",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-706",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If you're running a race and pass the person in second place, what place are you in?",
    "options": [
      {
        "id": "o1",
        "text": "Second place",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "First place",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Third place",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Last place",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-707",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Mary's father has 4 children: Up, Down, Left, and...?",
    "options": [
      {
        "id": "o1",
        "text": "Mary",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Right",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Forward",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Back",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-708",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "What goes up but never comes down?",
    "options": [
      {
        "id": "o1",
        "text": "Your age",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A balloon",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "An airplane",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A bird",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-709",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If a red house is made of red bricks, what is a greenhouse made of?",
    "options": [
      {
        "id": "o1",
        "text": "Glass",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Green bricks",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Wood",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Leaves",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-710",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 14 sheep and all but 9 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "9",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "14",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-711",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 13 cars. You take away 10. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "10",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-712",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many candies can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "11",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "28",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-713",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 17 sheep and all but 12 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "12",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-714",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 16 apples. You take away 12. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "12",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "16",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-715",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many tokens can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "48",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-716",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 6 sheep and all but 3 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-717",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 13 keys. You take away 8. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-718",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many cups can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "11",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "32",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-719",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 13 sheep and all but 1 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-720",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 7 cups. You take away 5. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "5",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-721",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many cars can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "19",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "37",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-722",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 14 sheep and all but 8 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "14",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-723",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 18 shoes. You take away 4. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "18",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "14",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-724",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many boxes can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "21",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-725",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 15 sheep and all but 8 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-726",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 19 phones. You take away 15. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "15",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "19",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-727",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many books can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "20",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "30",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-728",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 10 rings. You take away 5. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "5",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-729",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 7 sheep and all but 4 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-730",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 12 laptops. You take away 11. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "11",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-731",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "How many rings can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "47",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-732",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 4 sheep and all but 2 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-733",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 10 laptops. You take away 4. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-734",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 17 sheep and all but 10 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "10",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-735",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 10 books. You take away 4. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-736",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many bags can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "22",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-737",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 10 sheep and all but 2 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-738",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 18 desks. You take away 13. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "13",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "18",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-739",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many shoes can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "32",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-740",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 6 sheep and all but 1 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-741",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 14 phones. You take away 10. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "10",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "14",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-742",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A farmer has 14 sheep and all but 7 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "7",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "14",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-743",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 15 chairs. You take away 10. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "10",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-744",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 10 sheep and all but 5 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "5",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-745",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 6 pens. You take away 1. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-746",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "How many pens can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "11",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "47",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-747",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 17 sheep and all but 15 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "15",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-748",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 15 coins. You take away 13. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "13",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-749",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 12 sheep and all but 6 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "6",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-750",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 10 watches. You take away 1. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-751",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many cards can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "19",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "42",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-752",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 20 guitars. You take away 1. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "20",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "19",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-753",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 17 sheep and all but 7 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "7",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-754",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 5 cards. You take away 3. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-755",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 17 desks. You take away 10. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "10",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "17",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-756",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 13 sheep and all but 12 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "12",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-757",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 19 phones. You take away 9. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "9",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "19",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-758",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 15 sheep and all but 6 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "6",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-759",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 8 rings. You take away 2. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-760",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A farmer has 5 sheep and all but 4 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-761",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 8 apples. You take away 1. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-762",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 18 keys. You take away 9. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "9",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "18",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-763",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many keys can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "42",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-764",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 16 sheep and all but 15 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "15",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "16",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-765",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 4 chairs. You take away 2. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-766",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A farmer has 16 sheep and all but 8 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "16",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-767",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 4 cards. You take away 3. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "1",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-768",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "How many chairs can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "18",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "42",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-769",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A farmer has 6 sheep and all but 2 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-770",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 19 books. You take away 6. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "6",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "19",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-771",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "How many coins can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "42",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-772",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 5 phones. You take away 1. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-773",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 9 sheep and all but 7 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "7",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "9",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-774",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 6 watches. You take away 4. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-775",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "How many watches can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "28",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-776",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 18 sheep and all but 8 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "18",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-777",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 16 desks. You take away 3. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "16",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-778",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A farmer has 7 sheep and all but 2 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "7",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-779",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 15 boxes. You take away 11. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "11",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-780",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 11 sheep and all but 9 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "9",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "11",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-781",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A farmer has 13 sheep and all but 3 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-782",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 19 tokens. You take away 9. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "9",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "19",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-783",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 19 sheep and all but 2 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "19",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-784",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 12 tokens. You take away 7. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "7",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-785",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 14 sheep and all but 12 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "12",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "14",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-786",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 15 cups. You take away 7. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "7",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-787",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A farmer has 8 sheep and all but 3 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-788",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 6 desks. You take away 3. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "3",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "6",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-789",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 12 sheep and all but 5 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "5",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-790",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 12 candies. You take away 4. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "4",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "12",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "8",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-791",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "How many laptops can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "13",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "26",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-792",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 11 sheep and all but 1 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "11",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-793",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 5 apples. You take away 2. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-794",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "How many apples can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "5",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "39",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-795",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A farmer has 11 sheep and all but 2 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "11",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-796",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 3 tokens. You take away 1. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "1",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "3",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-797",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A farmer has 15 sheep and all but 13 die. How many are left?",
    "options": [
      {
        "id": "o1",
        "text": "13",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "0",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "None",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-tricky-gen-798",
    "categoryId": "tricky",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 4 watches. You take away 2. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "2",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "4",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "2",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 20
  },
  {
    "id": "q-tricky-gen-799",
    "categoryId": "tricky",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 18 shoes. You take away 8. How many do YOU have?",
    "options": [
      {
        "id": "o1",
        "text": "8",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "18",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "10",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "0",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 30
  },
  {
    "id": "q-tricky-gen-800",
    "categoryId": "tricky",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "How many desks can you put in an empty box?",
    "options": [
      {
        "id": "o1",
        "text": "One (then it's not empty)",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "15",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "23",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Zero",
        "isCorrect": false
      }
    ],
    "explanation": "Read carefully to avoid assumptions.",
    "learningObjective": "Attention to detail.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-801",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A machine making chairs breaks down 8 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-802",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Zara encounters a problem with 33 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-803",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You need to move 11 chairs, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-804",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-805",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Noah looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-806",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "If a problem seems impossible, what lateral thinking technique might help?",
    "options": [
      {
        "id": "o1",
        "text": "Work backwards from the goal",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Stare at it harder",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Rush the decision",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Increase the budget",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-807",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the bags issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-808",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 15 rings, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-809",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zara's code about cards is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-810",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A system has 43 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-811",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A machine making chairs breaks down 7 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-812",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Leo encounters a problem with 50 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-813",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You need to move 4 watches, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-814",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-815",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Charlie looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-816",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the rings issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-817",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 20 cups, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-818",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Bob's code about rings is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-819",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A system has 36 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-820",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A machine making bags breaks down 18 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-821",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Ivan encounters a problem with 21 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-822",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You need to move 9 cars, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-823",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Walter tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-824",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Nina looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-825",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the desks issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-826",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 16 tokens, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-827",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Eve's code about watches is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-828",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A system has 27 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-829",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Heidi encounters a problem with 49 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-830",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You need to move 11 cups, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-831",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-832",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Peggy looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-833",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the coins issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-834",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 4 bags, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-835",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Judy's code about candies is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-836",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A system has 42 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-837",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A machine making cars breaks down 18 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-838",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Nina encounters a problem with 40 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-839",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You need to move 8 tokens, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-840",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Leo tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-841",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, David looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-842",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the cars issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-843",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 5 rings, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-844",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Xena's code about books is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-845",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A system has 31 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-846",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A machine making books breaks down 5 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-847",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Peggy encounters a problem with 48 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-848",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You need to move 18 books, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-849",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Will tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-850",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Eve looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-851",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the candies issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-852",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 14 apples, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-853",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Oscar's code about coins is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-854",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A system has 39 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-855",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A machine making cards breaks down 4 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-856",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Peggy encounters a problem with 40 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-857",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You need to move 13 phones, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-858",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Vera tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-859",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Bob looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-860",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the pens issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-861",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 20 cards, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-862",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Alice's code about books is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-863",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A system has 38 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-864",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A machine making chairs breaks down 4 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-865",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "David encounters a problem with 35 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-866",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You need to move 17 tokens, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-867",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Eve tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-868",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Mallory looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-869",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 5 keys, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-870",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Sam's code about pens is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-871",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A machine making watches breaks down 20 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-872",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Xena encounters a problem with 23 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-873",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You need to move 6 rings, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-874",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Peggy tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-875",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Alice looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-876",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 5 coins, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-877",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mia's code about shoes is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-878",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A system has 26 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-879",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A machine making coins breaks down 3 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-880",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Bob encounters a problem with 26 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-881",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You need to move 10 chairs, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-882",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Xena tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-883",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the keys issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-884",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 14 laptops, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-885",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom's code about cards is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-886",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A system has 47 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-887",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A machine making cups breaks down 7 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-888",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Victor encounters a problem with 22 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-889",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You need to move 18 phones, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-890",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Frank looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-891",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "When solving a complex math problem about 14 tokens, what is a good visual strategy?",
    "options": [
      {
        "id": "o1",
        "text": "Draw a diagram or model",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Close your eyes",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Write it in a different language",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Use a calculator immediately",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-892",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara's code about desks is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-893",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A system has 29 bugs. Fixing one bug introduces two new ones. This is a sign of...?",
    "options": [
      {
        "id": "o1",
        "text": "Technical debt / tightly coupled systems",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "A great developer",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "A feature, not a bug",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Machine learning",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-894",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A machine making phones breaks down 8 times a week. First step using \"5 Whys\"?",
    "options": [
      {
        "id": "o1",
        "text": "Ask why it broke the first time",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Replace it",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Fire operator",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Report",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-895",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara encounters a problem with 35 variables. Good approach?",
    "options": [
      {
        "id": "o1",
        "text": "Break it into smaller parts",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Guess randomly",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Solve all at once",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Give up",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-896",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You need to move 13 candies, but can only carry 2 at a time. This is a constraint of...?",
    "options": [
      {
        "id": "o1",
        "text": "Capacity/Bandwidth",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Gravity",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Friction",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Volume",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-897",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Bob tries a solution and it fails. What is the most productive next step?",
    "options": [
      {
        "id": "o1",
        "text": "Analyze why it failed and adjust",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Try the exact same thing again",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blame the tools",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Abandon the project",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-problem_solving-gen-898",
    "categoryId": "problem_solving",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "To find the root cause of a server crash, Sam looks at logs from right before the crash. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Tracing/Diagnostic analysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Brainstorming",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Prototyping",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "A/B Testing",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 20
  },
  {
    "id": "q-problem_solving-gen-899",
    "categoryId": "problem_solving",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You have 3 solutions for the boxes issue. How do you choose the best one?",
    "options": [
      {
        "id": "o1",
        "text": "Evaluate pros/cons and test hypotheses",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Pick the cheapest one always",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Pick the fastest one always",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Flip a coin",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 30
  },
  {
    "id": "q-problem_solving-gen-900",
    "categoryId": "problem_solving",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Peggy's code about guitars is failing. They explain it line-by-line to a rubber duck. What is this called?",
    "options": [
      {
        "id": "o1",
        "text": "Rubber Duck Debugging",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Madness",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Outsourcing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Rubber-banding",
        "isCorrect": false
      }
    ],
    "explanation": "Methodical problem resolution frameworks.",
    "learningObjective": "Methodical problem resolution.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-901",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Oscar chooses between 14 identical candies for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-902",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Yara bought a non-refundable ticket for ₦35000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-903",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Yara only reads news that agrees with their existing view on keys. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-904",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A store shows a ₦15000 shirt next to a ₦175000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-905",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-906",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Sam assumes Noah is good at math just because Noah is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-907",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "To make a better decision about buying a car, what should you do?",
    "options": [
      {
        "id": "o1",
        "text": "Gather objective data and compare total cost of ownership",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Buy the reddest one",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Buy the first one you see",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Let the salesperson decide",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-908",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You lose ₦15000 and feel much worse than the joy of finding ₦15000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-909",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about apples because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-910",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "After an unpredictable event happens, Mallory claims they \"knew it all along\". What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hindsight Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Foresight",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Optimism Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Recency Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-911",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Victor chooses between 13 identical boxes for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-912",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Walter bought a non-refundable ticket for ₦36000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-913",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Uma only reads news that agrees with their existing view on cups. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-914",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store shows a ₦18000 shirt next to a ₦250000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-915",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Oscar thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-916",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Tom assumes Oscar is good at math just because Oscar is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-917",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You lose ₦10000 and feel much worse than the joy of finding ₦10000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-918",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about tokens because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-919",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "After an unpredictable event happens, David claims they \"knew it all along\". What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hindsight Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Foresight",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Optimism Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Recency Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-920",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Frank chooses between 5 identical tokens for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-921",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Nina bought a non-refundable ticket for ₦45000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-922",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Peggy only reads news that agrees with their existing view on tokens. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-923",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store shows a ₦11000 shirt next to a ₦105000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-924",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Nina thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-925",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Peggy assumes Mallory is good at math just because Mallory is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-926",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You lose ₦3000 and feel much worse than the joy of finding ₦3000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-927",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "After an unpredictable event happens, Charlie claims they \"knew it all along\". What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hindsight Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Foresight",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Optimism Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Recency Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-928",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Grace chooses between 20 identical cards for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-929",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Ivan bought a non-refundable ticket for ₦31000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-930",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Victor only reads news that agrees with their existing view on phones. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-931",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A store shows a ₦10000 shirt next to a ₦215000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-932",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Tom thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-933",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Judy assumes Zack is good at math just because Zack is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-934",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You lose ₦11000 and feel much worse than the joy of finding ₦11000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-935",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about pens because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-936",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "After an unpredictable event happens, Xena claims they \"knew it all along\". What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hindsight Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Foresight",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Optimism Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Recency Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-937",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Walter chooses between 11 identical coins for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-938",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Zack bought a non-refundable ticket for ₦37000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-939",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Victor only reads news that agrees with their existing view on cups. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-940",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A store shows a ₦9000 shirt next to a ₦220000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-941",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Bob thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-942",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zara assumes Zack is good at math just because Zack is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-943",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You lose ₦5000 and feel much worse than the joy of finding ₦5000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-944",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about phones because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-945",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "After an unpredictable event happens, Peggy claims they \"knew it all along\". What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hindsight Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Foresight",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Optimism Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Recency Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-946",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Sam chooses between 12 identical phones for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-947",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Alice bought a non-refundable ticket for ₦48000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-948",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Alice only reads news that agrees with their existing view on shoes. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-949",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A store shows a ₦7000 shirt next to a ₦230000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-950",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Noah thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-951",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Grace assumes Zack is good at math just because Zack is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-952",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about coins because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-953",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "After an unpredictable event happens, Will claims they \"knew it all along\". What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hindsight Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Foresight",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Optimism Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Recency Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-954",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Zara chooses between 3 identical cups for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-955",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Noah bought a non-refundable ticket for ₦21000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-956",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Eve only reads news that agrees with their existing view on cards. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-957",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A store shows a ₦8000 shirt next to a ₦225000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-958",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-959",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Judy assumes Victor is good at math just because Victor is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-960",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You lose ₦18000 and feel much worse than the joy of finding ₦18000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-961",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about watches because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-962",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "After an unpredictable event happens, Victor claims they \"knew it all along\". What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hindsight Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Foresight",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Optimism Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Recency Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-963",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Noah chooses between 6 identical rings for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-964",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "David bought a non-refundable ticket for ₦33000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-965",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Frank only reads news that agrees with their existing view on coins. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-966",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A store shows a ₦17000 shirt next to a ₦195000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-967",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Frank thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-968",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Uma assumes Yara is good at math just because Yara is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-969",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You lose ₦16000 and feel much worse than the joy of finding ₦16000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-970",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about candies because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-971",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "After an unpredictable event happens, Alice claims they \"knew it all along\". What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Hindsight Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Foresight",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Optimism Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Recency Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-972",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Walter chooses between 7 identical desks for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-973",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Alice bought a non-refundable ticket for ₦28000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-974",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Heidi only reads news that agrees with their existing view on laptops. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-975",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A store shows a ₦17000 shirt next to a ₦145000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-976",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-977",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Leo assumes Frank is good at math just because Frank is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-978",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "You lose ₦17000 and feel much worse than the joy of finding ₦17000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-979",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about cups because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-980",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Nina chooses between 20 identical candies for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-981",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Vera bought a non-refundable ticket for ₦35000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-982",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Charlie only reads news that agrees with their existing view on pens. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-983",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "A store shows a ₦20000 shirt next to a ₦170000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-984",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Eve thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-985",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "David assumes Walter is good at math just because Walter is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-986",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "You lose ₦14000 and feel much worse than the joy of finding ₦14000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-987",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about cars because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-988",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Peggy chooses between 11 identical candies for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-989",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Walter bought a non-refundable ticket for ₦25000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-990",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Sam only reads news that agrees with their existing view on keys. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-991",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "A store shows a ₦3000 shirt next to a ₦165000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-992",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Zara thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Availability Heuristic",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Survivorship Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Dunning-Kruger Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Optimism Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-993",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Mia assumes Walter is good at math just because Walter is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-994",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "You lose ₦12000 and feel much worse than the joy of finding ₦12000. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Loss Aversion",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Framing",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-995",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Everyone in a meeting agrees to a bad idea about rings because nobody wants to be the dissenting voice. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Groupthink",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Bandwagon",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-996",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "Oscar chooses between 9 identical chairs for 5 hours. What is this?",
    "options": [
      {
        "id": "o1",
        "text": "Analysis Paralysis",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Confirmation Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Sunk Cost Fallacy",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Anchoring",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-997",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Sam bought a non-refundable ticket for ₦41000 to an event they now hate, but goes anyway. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "Sunk Cost Fallacy",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Status Quo Bias",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Hindsight Bias",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Availability Heuristic",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  },
  {
    "id": "q-decision_making-gen-998",
    "categoryId": "decision_making",
    "ageGroups": [
      "13-16",
      "18+"
    ],
    "difficulty": "Medium",
    "type": "multiple_choice",
    "text": "Mallory only reads news that agrees with their existing view on cups. This is...?",
    "options": [
      {
        "id": "o1",
        "text": "Confirmation Bias",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Halo Effect",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Placebo Effect",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 20
  },
  {
    "id": "q-decision_making-gen-999",
    "categoryId": "decision_making",
    "ageGroups": [
      "18+"
    ],
    "difficulty": "Hard",
    "type": "multiple_choice",
    "text": "A store shows a ₦14000 shirt next to a ₦120000 suit to make the shirt look cheap. Tactic?",
    "options": [
      {
        "id": "o1",
        "text": "Anchoring / Framing",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Blind Study",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Loss Aversion",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 30
  },
  {
    "id": "q-decision_making-gen-1000",
    "categoryId": "decision_making",
    "ageGroups": [
      "10-12",
      "13-16",
      "18+"
    ],
    "difficulty": "Easy",
    "type": "multiple_choice",
    "text": "Zack assumes Uma is good at math just because Uma is very tall and attractive. Bias?",
    "options": [
      {
        "id": "o1",
        "text": "The Halo Effect",
        "isCorrect": true
      },
      {
        "id": "o2",
        "text": "Sunk Cost",
        "isCorrect": false
      },
      {
        "id": "o3",
        "text": "Anchoring",
        "isCorrect": false
      },
      {
        "id": "o4",
        "text": "Confirmation Bias",
        "isCorrect": false
      }
    ],
    "explanation": "Understanding cognitive biases and heuristics.",
    "learningObjective": "Understanding decision-making biases.",
    "xpReward": 10
  }
];

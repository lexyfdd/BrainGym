const fs = require('fs');

const categories = [
  'logical', 'brain_teasers', 'critical', 'financial_math', 'money', 
  'business', 'real_life', 'tricky', 'problem_solving', 'decision_making'
];

const ageGroups = [['10-12', '13-16', '18+'], ['13-16', '18+'], ['18+']];
const difficulties = ['Easy', 'Medium', 'Hard'];

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Mallory", "Nina", "Oscar", "Peggy", "Victor", "Walter", "Zara", "Leo", "Mia", "Noah", "Sam", "Tom", "Uma", "Vera", "Will", "Xena", "Yara", "Zack"];
const items = ["apples", "books", "laptops", "shoes", "cars", "candies", "phones", "guitars", "pens", "cups", "coins", "keys", "boxes", "cards", "tokens", "watches", "rings", "bags", "desks", "chairs"];
const colors = ["red", "blue", "green", "yellow", "black", "white", "purple", "orange", "pink", "brown", "gray", "silver", "gold"];

function getRandomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function getRandomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

const seenQuestions = new Set();
let questions = [];
let idCounter = 1;

categories.forEach(cat => {
  let count = 0;
  let templateIndexCounter = 0;
  
  while (count < 100) { // Increased to 100
    const diff = difficulties[count % 3];
    const age = ageGroups[count % 3];
    
    let text = '';
    let options = [];
    let explanation = '';
    let learningObjective = '';
    
    const n1 = getRandomItem(names);
    let n2 = getRandomItem(names); while(n2 === n1) n2 = getRandomItem(names);
    let n3 = getRandomItem(names); while(n3 === n1 || n3 === n2) n3 = getRandomItem(names);
    
    const i1 = getRandomItem(items);
    const i2 = getRandomItem(items);
    const c1 = getRandomItem(colors);
    const num1 = getRandomNumber(3, 20);
    const num2 = getRandomNumber(21, 50);
    
    // Cycle through 10 distinct templates per category
    const tIdx = (templateIndexCounter % 10) + 1;
    templateIndexCounter++;

    switch(cat) {
      case 'logical':
        if (tIdx === 1) {
          const rels = [{a: "taller", o: "shorter", n: "tallest"}, {a: "heavier", o: "lighter", n: "heaviest"}, {a: "older", o: "younger", n: "oldest"}];
          const r = getRandomItem(rels);
          text = `${n1} is ${r.a} than ${n2}. ${n3} is ${r.o} than ${n2}. Who is the ${r.n}?`;
          options = [{ id: 'o1', text: n1, isCorrect: true }, { id: 'o2', text: n2, isCorrect: false }, { id: 'o3', text: n3, isCorrect: false }, { id: 'o4', text: `Cannot be determined`, isCorrect: false }];
          explanation = `${n1} is ${r.a} than ${n2}, and ${n3} is ${r.o} than ${n2}, making ${n1} the ${r.n}.`;
        } else if (tIdx === 2) {
          text = `If all ${c1} ${i1} are heavy, and ${n1} has a ${c1} ${i1}, is it heavy?`;
          options = [{ id: 'o1', text: `Yes`, isCorrect: true }, { id: 'o2', text: `No`, isCorrect: false }, { id: 'o3', text: `Maybe`, isCorrect: false }, { id: 'o4', text: `Depends on ${n1}`, isCorrect: false }];
          explanation = `By deductive logic, if all are heavy, then a specific one is also heavy.`;
        } else if (tIdx === 3) {
          text = `There are ${num1} doors. Behind door ${num1 % 4 + 1} is a trap. Behind the next is safety. Which door is safe?`;
          options = [{ id: 'o1', text: `Door ${(num1 % 4 + 1)}`, isCorrect: false }, { id: 'o2', text: `Door ${(num1 % 4 + 2)}`, isCorrect: true }, { id: 'o3', text: `Door 1`, isCorrect: false }, { id: 'o4', text: `None`, isCorrect: false }];
          explanation = `The door next to the trap is safe.`;
        } else if (tIdx === 4) {
          text = `${n1} sits directly left of ${n2}. ${n3} sits directly right of ${n2}. Who is in the middle?`;
          options = [{ id: 'o1', text: n2, isCorrect: true }, { id: 'o2', text: n1, isCorrect: false }, { id: 'o3', text: n3, isCorrect: false }, { id: 'o4', text: `No one`, isCorrect: false }];
          explanation = `With ${n1} on the left and ${n3} on the right, ${n2} must be in the middle.`;
        } else if (tIdx === 5) {
          text = `Every time ${n1} eats ${i1}, they get happy. ${n1} is not happy right now. Did they just eat ${i1}?`;
          options = [{ id: 'o1', text: `No`, isCorrect: true }, { id: 'o2', text: `Yes`, isCorrect: false }, { id: 'o3', text: `Maybe`, isCorrect: false }, { id: 'o4', text: `Cannot be known`, isCorrect: false }];
          explanation = `Modus tollens: If P then Q. Not Q, therefore not P.`;
        } else if (tIdx === 6) {
          text = `A pattern repeats: ${c1}, blue, green, ${c1}, blue... What is the 4th item?`;
          options = [{ id: 'o1', text: c1, isCorrect: true }, { id: 'o2', text: `blue`, isCorrect: false }, { id: 'o3', text: `green`, isCorrect: false }, { id: 'o4', text: `yellow`, isCorrect: false }];
          explanation = `The pattern resets every 3 items. The 4th is the same as the 1st.`;
        } else if (tIdx === 7) {
          text = `If some ${i1} are ${c1}, and all ${c1} things are valuable, are some ${i1} valuable?`;
          options = [{ id: 'o1', text: `Yes`, isCorrect: true }, { id: 'o2', text: `No`, isCorrect: false }, { id: 'o3', text: `Maybe`, isCorrect: false }, { id: 'o4', text: `Never`, isCorrect: false }];
          explanation = `Syllogism: Since some overlap with ${c1}, and all ${c1} are valuable, those specific ones are valuable.`;
        } else if (tIdx === 8) {
          text = `${n1} runs faster than ${n2}, but slower than ${n3}. Who is the slowest?`;
          options = [{ id: 'o1', text: n2, isCorrect: true }, { id: 'o2', text: n1, isCorrect: false }, { id: 'o3', text: n3, isCorrect: false }, { id: 'o4', text: `Equal speed`, isCorrect: false }];
          explanation = `${n1} > ${n2}, ${n3} > ${n1}. Therefore ${n3} > ${n1} > ${n2}. ${n2} is slowest.`;
        } else if (tIdx === 9) {
          text = `If it rains, the grass is wet. The grass is not wet. Did it rain?`;
          options = [{ id: 'o1', text: `No`, isCorrect: true }, { id: 'o2', text: `Yes`, isCorrect: false }, { id: 'o3', text: `Maybe`, isCorrect: false }, { id: 'o4', text: `Unrelated`, isCorrect: false }];
          explanation = `If it rained, the grass would be wet. Since it isn't wet, it could not have rained.`;
        } else {
          text = `Only ${c1} ${i1} are allowed in the room. ${n1} brings a blue ${i2}. Are they allowed in?`;
          options = [{ id: 'o1', text: `No`, isCorrect: true }, { id: 'o2', text: `Yes`, isCorrect: false }, { id: 'o3', text: `Only on Tuesdays`, isCorrect: false }, { id: 'o4', text: `Depends on ${n1}`, isCorrect: false }];
          explanation = `The rule specifies ONLY ${c1} ${i1}. A blue ${i2} does not fit.`;
        }
        learningObjective = `Deductive and spatial reasoning.`;
        break;

      case 'brain_teasers':
        const teasers = [
          {q: `I have ${num1} keys but no locks, space but no room. What am I?`, a: `A Keyboard`, o1: `A map`, o2: `A puzzle`, o3: `A safe`},
          {q: `${n1}'s parent has 3 kids: ${n2}, ${n3}, and...?`, a: n1, o1: `Unknown`, o2: n2, o3: n3},
          {q: `What must be broken before you can use it to make ${num1} cakes?`, a: `An egg`, o1: `A coconut`, o2: `A promise`, o3: `Flour`},
          {q: `I am tall when I'm young, and short when I'm old. What am I?`, a: `A candle`, o1: `A tree`, o2: `A human`, o3: `A mountain`},
          {q: `What month of the year has 28 days?`, a: `All of them`, o1: `February`, o2: `None`, o3: `December`},
          {q: `What is full of holes but still holds water?`, a: `A sponge`, o1: `A bucket`, o2: `A net`, o3: `A cloud`},
          {q: `If you drop me I'm sure to crack, but give me a smile and I'll always smile back. What am I?`, a: `A mirror`, o1: `An egg`, o2: `A phone`, o3: `A person`},
          {q: `What runs but never walks, has a mouth but never talks?`, a: `A river`, o1: `A clock`, o2: `A baby`, o3: `A wind`},
          {q: `What has words, but never speaks?`, a: `A book`, o1: `A teacher`, o2: `A radio`, o3: `A sign`},
          {q: `I follow you all the time and copy your every move, but you can't touch me or catch me. What am I?`, a: `A shadow`, o1: `A ghost`, o2: `A reflection`, o3: `A dream`}
        ];
        const tz = teasers[tIdx - 1];
        text = tz.q;
        options = [{ id: 'o1', text: tz.a, isCorrect: true }, { id: 'o2', text: tz.o1, isCorrect: false }, { id: 'o3', text: tz.o2, isCorrect: false }, { id: 'o4', text: tz.o3, isCorrect: false }];
        explanation = `Lateral thinking riddle.`;
        learningObjective = `Lateral thinking.`;
        break;

      case 'critical':
        if (tIdx === 1) {
          text = `${n1} says: "I saw ${num1} people doing X, so everyone does X." What fallacy is this?`;
          options = [{ id: 'o1', text: `Hasty Generalization`, isCorrect: true }, { id: 'o2', text: `Ad Hominem`, isCorrect: false }, { id: 'o3', text: `Straw Man`, isCorrect: false }, { id: 'o4', text: `Red Herring`, isCorrect: false }];
        } else if (tIdx === 2) {
          text = `Because ${n2} failed a test, ${n3} says ${n2}'s opinion on ${i1} is invalid. What fallacy is this?`;
          options = [{ id: 'o1', text: `Ad Hominem`, isCorrect: true }, { id: 'o2', text: `Slippery Slope`, isCorrect: false }, { id: 'o3', text: `Appeal to Authority`, isCorrect: false }, { id: 'o4', text: `False Dilemma`, isCorrect: false }];
        } else if (tIdx === 3) {
          text = `"${n1}, if we ban ${i1}, next they'll ban everything!" What fallacy is this?`;
          options = [{ id: 'o1', text: `Slippery Slope`, isCorrect: true }, { id: 'o2', text: `Straw Man`, isCorrect: false }, { id: 'o3', text: `Bandwagon`, isCorrect: false }, { id: 'o4', text: `Circular Reasoning`, isCorrect: false }];
        } else if (tIdx === 4) {
          text = `${n2} says: "Either you buy ${num1} ${i1}, or you hate our company." What fallacy is this?`;
          options = [{ id: 'o1', text: `False Dilemma`, isCorrect: true }, { id: 'o2', text: `Ad Hominem`, isCorrect: false }, { id: 'o3', text: `Sunk Cost`, isCorrect: false }, { id: 'o4', text: `Appeal to Nature`, isCorrect: false }];
        } else if (tIdx === 5) {
          text = `${n3} argues ${c1} is the best color because it's their favorite. What is wrong here?`;
          options = [{ id: 'o1', text: `Subjective opinion used as objective fact`, isCorrect: true }, { id: 'o2', text: `Math error`, isCorrect: false }, { id: 'o3', text: `False Dilemma`, isCorrect: false }, { id: 'o4', text: `Nothing is wrong`, isCorrect: false }];
        } else if (tIdx === 6) {
          text = `"Everyone in town is buying ${i1}, so you should too!" What fallacy is this?`;
          options = [{ id: 'o1', text: `Bandwagon (Ad Populum)`, isCorrect: true }, { id: 'o2', text: `Straw Man`, isCorrect: false }, { id: 'o3', text: `Slippery Slope`, isCorrect: false }, { id: 'o4', text: `Red Herring`, isCorrect: false }];
        } else if (tIdx === 7) {
          text = `${n1} twists ${n2}'s words about ${i1} to make them sound evil, then attacks the twisted words. What is this?`;
          options = [{ id: 'o1', text: `Straw Man`, isCorrect: true }, { id: 'o2', text: `Ad Hominem`, isCorrect: false }, { id: 'o3', text: `Hasty Generalization`, isCorrect: false }, { id: 'o4', text: `Circular Reasoning`, isCorrect: false }];
        } else if (tIdx === 8) {
          text = `"${n1} says this medicine works, and they are a famous actor!" What fallacy is this?`;
          options = [{ id: 'o1', text: `Appeal to False Authority`, isCorrect: true }, { id: 'o2', text: `Ad Hominem`, isCorrect: false }, { id: 'o3', text: `Straw Man`, isCorrect: false }, { id: 'o4', text: `Slippery Slope`, isCorrect: false }];
        } else if (tIdx === 9) {
          text = `Changing the subject when asked a difficult question about ${num2} ${i1} is an example of what?`;
          options = [{ id: 'o1', text: `Red Herring`, isCorrect: true }, { id: 'o2', text: `False Dilemma`, isCorrect: false }, { id: 'o3', text: `Bandwagon`, isCorrect: false }, { id: 'o4', text: `Sunk Cost`, isCorrect: false }];
        } else {
          text = `Assuming that because Event B happened after Event A, A caused B. What fallacy is this?`;
          options = [{ id: 'o1', text: `Post Hoc (False Cause)`, isCorrect: true }, { id: 'o2', text: `Ad Hominem`, isCorrect: false }, { id: 'o3', text: `Straw Man`, isCorrect: false }, { id: 'o4', text: `Appeal to Nature`, isCorrect: false }];
        }
        explanation = `Identifying logical fallacies.`;
        learningObjective = `Critical reasoning and logic.`;
        break;

      case 'financial_math':
        const p = num1 * 1000;
        const r = num2 % 10 + 2;
        if (tIdx === 1) {
          text = `If ${n1} invests ₦${p} at simple interest of ${r}% per year, what is the interest after 1 year?`;
          options = [{ id: 'o1', text: `₦${(p * r) / 100}`, isCorrect: true }, { id: 'o2', text: `₦${p}`, isCorrect: false }, { id: 'o3', text: `₦${r * 100}`, isCorrect: false }, { id: 'o4', text: `₦${((p * r) / 100) + 50}`, isCorrect: false }];
        } else if (tIdx === 2) {
          text = `${n2} buys ${num1} ${i1} at ₦${num2} each and sells them for ₦${num2 + 10} each. Total profit?`;
          options = [{ id: 'o1', text: `₦${num1 * 10}`, isCorrect: true }, { id: 'o2', text: `₦${num1 * num2}`, isCorrect: false }, { id: 'o3', text: `₦${10}`, isCorrect: false }, { id: 'o4', text: `₦${num1 * (num2 + 10)}`, isCorrect: false }];
        } else if (tIdx === 3) {
          text = `A store offers a ${r * 2}% discount on a ₦${p} laptop. How much is the discount?`;
          options = [{ id: 'o1', text: `₦${(p * (r * 2)) / 100}`, isCorrect: true }, { id: 'o2', text: `₦${p}`, isCorrect: false }, { id: 'o3', text: `₦${r * 20}`, isCorrect: false }, { id: 'o4', text: `₦${p - 100}`, isCorrect: false }];
        } else if (tIdx === 4) {
          text = `${n3} earns ₦${p} monthly and saves ${r}%. How much is saved in 1 month?`;
          options = [{ id: 'o1', text: `₦${(p * r) / 100}`, isCorrect: true }, { id: 'o2', text: `₦${p / r}`, isCorrect: false }, { id: 'o3', text: `₦${p - r}`, isCorrect: false }, { id: 'o4', text: `₦${r * 100}`, isCorrect: false }];
        } else if (tIdx === 5) {
          text = `If inflation is ${r}% and ${n1} keeps ₦${p} under a mattress, what is the real purchasing power lost?`;
          options = [{ id: 'o1', text: `₦${(p * r) / 100}`, isCorrect: true }, { id: 'o2', text: `None`, isCorrect: false }, { id: 'o3', text: `₦${p}`, isCorrect: false }, { id: 'o4', text: `₦${r}`, isCorrect: false }];
        } else if (tIdx === 6) {
          text = `A product costs ₦${p}. Tax is ${r}%. What is the final price?`;
          options = [{ id: 'o1', text: `₦${p + (p * r) / 100}`, isCorrect: true }, { id: 'o2', text: `₦${p}`, isCorrect: false }, { id: 'o3', text: `₦${(p * r) / 100}`, isCorrect: false }, { id: 'o4', text: `₦${p + r}`, isCorrect: false }];
        } else if (tIdx === 7) {
          text = `${n2} bought a stock at ₦${p}. It drops by 50%, then rises by 50%. What is the current value?`;
          options = [{ id: 'o1', text: `₦${p * 0.5 * 1.5}`, isCorrect: true }, { id: 'o2', text: `₦${p}`, isCorrect: false }, { id: 'o3', text: `₦${p * 1.5}`, isCorrect: false }, { id: 'o4', text: `₦${p * 0.5}`, isCorrect: false }];
        } else if (tIdx === 8) {
          text = `If you save ₦${p} every month for a year, how much will you have in total (without interest)?`;
          options = [{ id: 'o1', text: `₦${p * 12}`, isCorrect: true }, { id: 'o2', text: `₦${p * 10}`, isCorrect: false }, { id: 'o3', text: `₦${p * 24}`, isCorrect: false }, { id: 'o4', text: `₦${p}`, isCorrect: false }];
        } else if (tIdx === 9) {
          text = `You buy ${num1} items for ₦${p} total. What is the unit cost per item?`;
          options = [{ id: 'o1', text: `₦${(p / num1).toFixed(2)}`, isCorrect: true }, { id: 'o2', text: `₦${p}`, isCorrect: false }, { id: 'o3', text: `₦${p * num1}`, isCorrect: false }, { id: 'o4', text: `₦${num1}`, isCorrect: false }];
        } else {
          text = `An investment of ₦${p} triples in value. How much profit was made?`;
          options = [{ id: 'o1', text: `₦${p * 2}`, isCorrect: true }, { id: 'o2', text: `₦${p * 3}`, isCorrect: false }, { id: 'o3', text: `₦${p}`, isCorrect: false }, { id: 'o4', text: `₦${p / 3}`, isCorrect: false }];
        }
        explanation = `Basic financial mathematics application.`;
        learningObjective = `Financial literacy and math.`;
        break;

      case 'money':
        if (tIdx === 1) {
          text = `${n3} saves ₦${num1 * 500} monthly in a jar. With ${num2 % 5 + 3}% inflation, what happens to it?`;
          options = [{ id: 'o1', text: `It loses purchasing power`, isCorrect: true }, { id: 'o2', text: `It gains value`, isCorrect: false }, { id: 'o3', text: `It stays exactly the same`, isCorrect: false }, { id: 'o4', text: `It doubles`, isCorrect: false }];
        } else if (tIdx === 2) {
          text = `${n1} finds ₦${num1 * 1000} and spends it on ${i1} instead of saving it. What behavioral trap is this?`;
          options = [{ id: 'o1', text: `Mental Accounting`, isCorrect: true }, { id: 'o2', text: `Sunk Cost`, isCorrect: false }, { id: 'o3', text: `Diversification`, isCorrect: false }, { id: 'o4', text: `Compounding`, isCorrect: false }];
        } else if (tIdx === 3) {
          text = `${n2} buys a coffee every day for ₦${num1 * 100}. Over a year, this is an example of what?`;
          options = [{ id: 'o1', text: `The Latte Factor (small recurring expenses)`, isCorrect: true }, { id: 'o2', text: `Hyperinflation`, isCorrect: false }, { id: 'o3', text: `Capital Gains`, isCorrect: false }, { id: 'o4', text: `Fixed Income`, isCorrect: false }];
        } else if (tIdx === 4) {
          text = `${n3} spreads their ₦${num2 * 1000} across 5 different banks. What principle is this?`;
          options = [{ id: 'o1', text: `Diversification/Risk Reduction`, isCorrect: true }, { id: 'o2', text: `Tax Evasion`, isCorrect: false }, { id: 'o3', text: `Compound Interest`, isCorrect: false }, { id: 'o4', text: `Leverage`, isCorrect: false }];
        } else if (tIdx === 5) {
          text = `${n1} gets a raise and immediately upgrades their car and house. What is this called?`;
          options = [{ id: 'o1', text: `Lifestyle Creep`, isCorrect: true }, { id: 'o2', text: `Frugality`, isCorrect: false }, { id: 'o3', text: `Amortization`, isCorrect: false }, { id: 'o4', text: `Deflation`, isCorrect: false }];
        } else if (tIdx === 6) {
          text = `Which of these is considered a 'Need' rather than a 'Want'?`;
          options = [{ id: 'o1', text: `Basic groceries`, isCorrect: true }, { id: 'o2', text: `A new ${c1} ${i1}`, isCorrect: false }, { id: 'o3', text: `Designer shoes`, isCorrect: false }, { id: 'o4', text: `A cinema ticket`, isCorrect: false }];
        } else if (tIdx === 7) {
          text = `${n2} borrows ₦${num1 * 1000} on a credit card and only pays the minimum balance. What happens?`;
          options = [{ id: 'o1', text: `Debt grows rapidly due to high interest`, isCorrect: true }, { id: 'o2', text: `The debt is forgiven`, isCorrect: false }, { id: 'o3', text: `Their credit score instantly becomes perfect`, isCorrect: false }, { id: 'o4', text: `No extra charges are applied`, isCorrect: false }];
        } else if (tIdx === 8) {
          text = `An emergency fund should ideally cover how many months of living expenses?`;
          options = [{ id: 'o1', text: `3 to 6 months`, isCorrect: true }, { id: 'o2', text: `1 week`, isCorrect: false }, { id: 'o3', text: `10 years`, isCorrect: false }, { id: 'o4', text: `Zero`, isCorrect: false }];
        } else if (tIdx === 9) {
          text = `Putting money into a retirement account early to benefit from interest on interest is called?`;
          options = [{ id: 'o1', text: `Compound Interest`, isCorrect: true }, { id: 'o2', text: `Depreciation`, isCorrect: false }, { id: 'o3', text: `Inflation`, isCorrect: false }, { id: 'o4', text: `Day Trading`, isCorrect: false }];
        } else {
          text = `If ${n3} buys a brand new car for ₦${num1 * 10000}, what happens the moment they drive it off the lot?`;
          options = [{ id: 'o1', text: `It depreciates in value`, isCorrect: true }, { id: 'o2', text: `It appreciates in value`, isCorrect: false }, { id: 'o3', text: `The value stays the same`, isCorrect: false }, { id: 'o4', text: `It stops consuming gas`, isCorrect: false }];
        }
        explanation = `Understanding core personal finance concepts.`;
        learningObjective = `Personal finance concepts.`;
        break;

      case 'business':
        if (tIdx === 1) {
          text = `${n2}'s company sells ${i1}. CAC is ₦${num1 * 100}, LTV is ₦${num1 * 50}. Is this a good model?`;
          options = [{ id: 'o1', text: `No, CAC > LTV`, isCorrect: true }, { id: 'o2', text: `Yes, LTV is good`, isCorrect: false }, { id: 'o3', text: `Depends on the product`, isCorrect: false }, { id: 'o4', text: `Yes, as long as sales grow`, isCorrect: false }];
        } else if (tIdx === 2) {
          text = `${n1} runs a bakery. Rent is ₦${num2 * 1000}. If they sell ${num1} items, rent costs...`;
          options = [{ id: 'o1', text: `Remain the same (Fixed Cost)`, isCorrect: true }, { id: 'o2', text: `Increase`, isCorrect: false }, { id: 'o3', text: `Decrease`, isCorrect: false }, { id: 'o4', text: `Disappear`, isCorrect: false }];
        } else if (tIdx === 3) {
          text = `Revenue is ₦${num1 * 1000}, Expenses are ₦${num2 * 500}. How is Profit calculated?`;
          options = [{ id: 'o1', text: `Revenue - Expenses`, isCorrect: true }, { id: 'o2', text: `Revenue + Expenses`, isCorrect: false }, { id: 'o3', text: `Expenses / Revenue`, isCorrect: false }, { id: 'o4', text: `Revenue * Expenses`, isCorrect: false }];
        } else if (tIdx === 4) {
          text = `${n3} buys ${i1} for ₦100 and sells them for ₦200. The ₦100 difference is the...?`;
          options = [{ id: 'o1', text: `Gross Margin`, isCorrect: true }, { id: 'o2', text: `Net Loss`, isCorrect: false }, { id: 'o3', text: `Overhead`, isCorrect: false }, { id: 'o4', text: `Sunk Cost`, isCorrect: false }];
        } else if (tIdx === 5) {
          text = `A competitor opens across the street lowering prices on ${i1}. What business force is this?`;
          options = [{ id: 'o1', text: `Competition/Market Forces`, isCorrect: true }, { id: 'o2', text: `Monopoly`, isCorrect: false }, { id: 'o3', text: `Inflation`, isCorrect: false }, { id: 'o4', text: `Depreciation`, isCorrect: false }];
        } else if (tIdx === 6) {
          text = `${n1} scales production from 10 to ${num2 * 100} units, lowering the cost per unit. This is called...?`;
          options = [{ id: 'o1', text: `Economies of Scale`, isCorrect: true }, { id: 'o2', text: `Diminishing Returns`, isCorrect: false }, { id: 'o3', text: `Opportunity Cost`, isCorrect: false }, { id: 'o4', text: `Bait and Switch`, isCorrect: false }];
        } else if (tIdx === 7) {
          text = `The amount of cash a business actually has on hand to pay bills right now is called...?`;
          options = [{ id: 'o1', text: `Liquidity/Cash Flow`, isCorrect: true }, { id: 'o2', text: `Accounts Receivable`, isCorrect: false }, { id: 'o3', text: `Valuation`, isCorrect: false }, { id: 'o4', text: `Goodwill`, isCorrect: false }];
        } else if (tIdx === 8) {
          text = `A business spends ₦${num1 * 1000} on advertising and makes ₦${num1 * 3000} in new sales. The advertising was...?`;
          options = [{ id: 'o1', text: `A positive Return on Investment (ROI)`, isCorrect: true }, { id: 'o2', text: `A waste of money`, isCorrect: false }, { id: 'o3', text: `A sunk cost`, isCorrect: false }, { id: 'o4', text: `A fixed cost`, isCorrect: false }];
        } else if (tIdx === 9) {
          text = `Selling shares of ownership in a company to raise capital is called...?`;
          options = [{ id: 'o1', text: `Equity financing`, isCorrect: true }, { id: 'o2', text: `Debt financing`, isCorrect: false }, { id: 'o3', text: `Bootstrapping`, isCorrect: false }, { id: 'o4', text: `Crowdfunding`, isCorrect: false }];
        } else {
          text = `The unique feature that makes ${n2}'s ${i1} better than the competition is called its...?`;
          options = [{ id: 'o1', text: `Competitive Advantage / USP`, isCorrect: true }, { id: 'o2', text: `Liability`, isCorrect: false }, { id: 'o3', text: `Depreciation`, isCorrect: false }, { id: 'o4', text: `Deficit`, isCorrect: false }];
        }
        explanation = `Business economics and accounting principles.`;
        learningObjective = `Business economics.`;
        break;

      case 'real_life':
        if (tIdx === 1) {
          text = `${n3} is arguing with you about ${num1} ${i1}. They are raising their voice. Best response?`;
          options = [{ id: 'o1', text: `Stay calm and validate their feelings`, isCorrect: true }, { id: 'o2', text: `Shout louder`, isCorrect: false }, { id: 'o3', text: `Ignore them completely`, isCorrect: false }, { id: 'o4', text: `Insult their intelligence`, isCorrect: false }];
        } else if (tIdx === 2) {
          text = `You have ${num2} tasks to do today, but only time for ${num2 - 1}. How do you prioritize?`;
          options = [{ id: 'o1', text: `Urgent vs Important matrix`, isCorrect: true }, { id: 'o2', text: `Easiest first`, isCorrect: false }, { id: 'o3', text: `Randomly`, isCorrect: false }, { id: 'o4', text: `Do nothing`, isCorrect: false }];
        } else if (tIdx === 3) {
          text = `You receive an email from "Bank" asking for your password for ${num1} accounts. What do you do?`;
          options = [{ id: 'o1', text: `Do not reply and report as phishing`, isCorrect: true }, { id: 'o2', text: `Send the password`, isCorrect: false }, { id: 'o3', text: `Forward to ${n1}`, isCorrect: false }, { id: 'o4', text: `Click the link to check`, isCorrect: false }];
        } else if (tIdx === 4) {
          text = `${n2} gossips about ${n1} to you. What is the most mature response?`;
          options = [{ id: 'o1', text: `Change the subject or excuse yourself`, isCorrect: true }, { id: 'o2', text: `Join in the gossip`, isCorrect: false }, { id: 'o3', text: `Spread it further`, isCorrect: false }, { id: 'o4', text: `Yell at ${n2}`, isCorrect: false }];
        } else if (tIdx === 5) {
          text = `You make a mistake at work costing ₦${num2 * 100}. What is the best action?`;
          options = [{ id: 'o1', text: `Admit it immediately and propose a fix`, isCorrect: true }, { id: 'o2', text: `Hide it`, isCorrect: false }, { id: 'o3', text: `Blame ${n3}`, isCorrect: false }, { id: 'o4', text: `Quit your job`, isCorrect: false }];
        } else if (tIdx === 6) {
          text = `You feel overwhelmed with ${num1} assignments. What is a healthy coping mechanism?`;
          options = [{ id: 'o1', text: `Take a short break and break tasks into steps`, isCorrect: true }, { id: 'o2', text: `Procrastinate until tomorrow`, isCorrect: false }, { id: 'o3', text: `Drink ${num2} energy drinks`, isCorrect: false }, { id: 'o4', text: `Give up entirely`, isCorrect: false }];
        } else if (tIdx === 7) {
          text = `${n1} offers you a "guaranteed" investment returning ${num2}% a week. What should you think?`;
          options = [{ id: 'o1', text: `It's likely a scam (too good to be true)`, isCorrect: true }, { id: 'o2', text: `Invest immediately`, isCorrect: false }, { id: 'o3', text: `Borrow money to invest`, isCorrect: false }, { id: 'o4', text: `It's a standard bank rate`, isCorrect: false }];
        } else if (tIdx === 8) {
          text = `A coworker takes credit for your work on the ${i1} project. What is a professional response?`;
          options = [{ id: 'o1', text: `Speak with them privately to correct the record`, isCorrect: true }, { id: 'o2', text: `Scream at them in a meeting`, isCorrect: false }, { id: 'o3', text: `Quit the job`, isCorrect: false }, { id: 'o4', text: `Sabotage their next project`, isCorrect: false }];
        } else if (tIdx === 9) {
          text = `You are running 15 minutes late for an important meeting with ${n2}. What do you do?`;
          options = [{ id: 'o1', text: `Call/message ahead immediately to inform them`, isCorrect: true }, { id: 'o2', text: `Sneak in and hope nobody notices`, isCorrect: false }, { id: 'o3', text: `Lie and say your car broke down`, isCorrect: false }, { id: 'o4', text: `Cancel the meeting entirely`, isCorrect: false }];
        } else {
          text = `Someone online whom you've never met asks for ${num2} dollars to help them. What is this?`;
          options = [{ id: 'o1', text: `A likely internet scam`, isCorrect: true }, { id: 'o2', text: `A great opportunity to help`, isCorrect: false }, { id: 'o3', text: `A legal requirement`, isCorrect: false }, { id: 'o4', text: `A bank error`, isCorrect: false }];
        }
        explanation = `Practical life skills and emotional intelligence.`;
        learningObjective = `Life skills.`;
        break;

      case 'tricky':
        if (tIdx === 1) {
          const taken = num2 % (num1-1) + 1;
          text = `You have ${num1} ${i1}. You take away ${taken}. How many do YOU have?`;
          options = [{ id: 'o1', text: `${taken}`, isCorrect: true }, { id: 'o2', text: `${num1}`, isCorrect: false }, { id: 'o3', text: `${num1 - taken}`, isCorrect: false }, { id: 'o4', text: `0`, isCorrect: false }];
        } else if (tIdx === 2) {
          text = `Some months have 31 days. How many have 28 days?`;
          options = [{ id: 'o1', text: `All 12 of them`, isCorrect: true }, { id: 'o2', text: `1`, isCorrect: false }, { id: 'o3', text: `6`, isCorrect: false }, { id: 'o4', text: `0`, isCorrect: false }];
        } else if (tIdx === 3) {
          text = `If a plane crashes on the border of Nigeria and Benin, where do they bury the survivors?`;
          options = [{ id: 'o1', text: `You don't bury survivors`, isCorrect: true }, { id: 'o2', text: `Nigeria`, isCorrect: false }, { id: 'o3', text: `Benin`, isCorrect: false }, { id: 'o4', text: `Half and half`, isCorrect: false }];
        } else if (tIdx === 4) {
          text = `How many ${i1} can you put in an empty box?`;
          options = [{ id: 'o1', text: `One (then it's not empty)`, isCorrect: true }, { id: 'o2', text: `${num1}`, isCorrect: false }, { id: 'o3', text: `${num2}`, isCorrect: false }, { id: 'o4', text: `Zero`, isCorrect: false }];
        } else if (tIdx === 5) {
          text = `Before Mount Everest was discovered, what was the highest mountain on Earth?`;
          options = [{ id: 'o1', text: `Mount Everest (it just wasn't discovered)`, isCorrect: true }, { id: 'o2', text: `Mount Kilimanjaro`, isCorrect: false }, { id: 'o3', text: `K2`, isCorrect: false }, { id: 'o4', text: `The Alps`, isCorrect: false }];
        } else if (tIdx === 6) {
          text = `If you're running a race and pass the person in second place, what place are you in?`;
          options = [{ id: 'o1', text: `Second place`, isCorrect: true }, { id: 'o2', text: `First place`, isCorrect: false }, { id: 'o3', text: `Third place`, isCorrect: false }, { id: 'o4', text: `Last place`, isCorrect: false }];
        } else if (tIdx === 7) {
          text = `Mary's father has 4 children: Up, Down, Left, and...?`;
          options = [{ id: 'o1', text: `Mary`, isCorrect: true }, { id: 'o2', text: `Right`, isCorrect: false }, { id: 'o3', text: `Forward`, isCorrect: false }, { id: 'o4', text: `Back`, isCorrect: false }];
        } else if (tIdx === 8) {
          text = `What goes up but never comes down?`;
          options = [{ id: 'o1', text: `Your age`, isCorrect: true }, { id: 'o2', text: `A balloon`, isCorrect: false }, { id: 'o3', text: `An airplane`, isCorrect: false }, { id: 'o4', text: `A bird`, isCorrect: false }];
        } else if (tIdx === 9) {
          text = `If a red house is made of red bricks, what is a greenhouse made of?`;
          options = [{ id: 'o1', text: `Glass`, isCorrect: true }, { id: 'o2', text: `Green bricks`, isCorrect: false }, { id: 'o3', text: `Wood`, isCorrect: false }, { id: 'o4', text: `Leaves`, isCorrect: false }];
        } else {
          text = `A farmer has ${num1} sheep and all but ${num2 % (num1-1) + 1} die. How many are left?`;
          options = [{ id: 'o1', text: `${num2 % (num1-1) + 1}`, isCorrect: true }, { id: 'o2', text: `0`, isCorrect: false }, { id: 'o3', text: `${num1}`, isCorrect: false }, { id: 'o4', text: `None`, isCorrect: false }];
        }
        explanation = `Read carefully to avoid assumptions.`;
        learningObjective = `Attention to detail.`;
        break;

      case 'problem_solving':
        if (tIdx === 1) {
          text = `A machine making ${i1} breaks down ${num1} times a week. First step using "5 Whys"?`;
          options = [{ id: 'o1', text: `Ask why it broke the first time`, isCorrect: true }, { id: 'o2', text: `Replace it`, isCorrect: false }, { id: 'o3', text: `Fire operator`, isCorrect: false }, { id: 'o4', text: `Report`, isCorrect: false }];
        } else if (tIdx === 2) {
          text = `${n1} encounters a problem with ${num2} variables. Good approach?`;
          options = [{ id: 'o1', text: `Break it into smaller parts`, isCorrect: true }, { id: 'o2', text: `Guess randomly`, isCorrect: false }, { id: 'o3', text: `Solve all at once`, isCorrect: false }, { id: 'o4', text: `Give up`, isCorrect: false }];
        } else if (tIdx === 3) {
          text = `You need to move ${num1} ${i1}, but can only carry 2 at a time. This is a constraint of...?`;
          options = [{ id: 'o1', text: `Capacity/Bandwidth`, isCorrect: true }, { id: 'o2', text: `Gravity`, isCorrect: false }, { id: 'o3', text: `Friction`, isCorrect: false }, { id: 'o4', text: `Volume`, isCorrect: false }];
        } else if (tIdx === 4) {
          text = `${n2} tries a solution and it fails. What is the most productive next step?`;
          options = [{ id: 'o1', text: `Analyze why it failed and adjust`, isCorrect: true }, { id: 'o2', text: `Try the exact same thing again`, isCorrect: false }, { id: 'o3', text: `Blame the tools`, isCorrect: false }, { id: 'o4', text: `Abandon the project`, isCorrect: false }];
        } else if (tIdx === 5) {
          text = `To find the root cause of a server crash, ${n3} looks at logs from right before the crash. This is...?`;
          options = [{ id: 'o1', text: `Tracing/Diagnostic analysis`, isCorrect: true }, { id: 'o2', text: `Brainstorming`, isCorrect: false }, { id: 'o3', text: `Prototyping`, isCorrect: false }, { id: 'o4', text: `A/B Testing`, isCorrect: false }];
        } else if (tIdx === 6) {
          text = `If a problem seems impossible, what lateral thinking technique might help?`;
          options = [{ id: 'o1', text: `Work backwards from the goal`, isCorrect: true }, { id: 'o2', text: `Stare at it harder`, isCorrect: false }, { id: 'o3', text: `Rush the decision`, isCorrect: false }, { id: 'o4', text: `Increase the budget`, isCorrect: false }];
        } else if (tIdx === 7) {
          text = `You have 3 solutions for the ${i1} issue. How do you choose the best one?`;
          options = [{ id: 'o1', text: `Evaluate pros/cons and test hypotheses`, isCorrect: true }, { id: 'o2', text: `Pick the cheapest one always`, isCorrect: false }, { id: 'o3', text: `Pick the fastest one always`, isCorrect: false }, { id: 'o4', text: `Flip a coin`, isCorrect: false }];
        } else if (tIdx === 8) {
          text = `When solving a complex math problem about ${num1} ${i1}, what is a good visual strategy?`;
          options = [{ id: 'o1', text: `Draw a diagram or model`, isCorrect: true }, { id: 'o2', text: `Close your eyes`, isCorrect: false }, { id: 'o3', text: `Write it in a different language`, isCorrect: false }, { id: 'o4', text: `Use a calculator immediately`, isCorrect: false }];
        } else if (tIdx === 9) {
          text = `${n1}'s code about ${i1} is failing. They explain it line-by-line to a rubber duck. What is this called?`;
          options = [{ id: 'o1', text: `Rubber Duck Debugging`, isCorrect: true }, { id: 'o2', text: `Madness`, isCorrect: false }, { id: 'o3', text: `Outsourcing`, isCorrect: false }, { id: 'o4', text: `Rubber-banding`, isCorrect: false }];
        } else {
          text = `A system has ${num2} bugs. Fixing one bug introduces two new ones. This is a sign of...?`;
          options = [{ id: 'o1', text: `Technical debt / tightly coupled systems`, isCorrect: true }, { id: 'o2', text: `A great developer`, isCorrect: false }, { id: 'o3', text: `A feature, not a bug`, isCorrect: false }, { id: 'o4', text: `Machine learning`, isCorrect: false }];
        }
        explanation = `Methodical problem resolution frameworks.`;
        learningObjective = `Methodical problem resolution.`;
        break;

      case 'decision_making':
        if (tIdx === 1) {
          text = `${n2} chooses between ${num1} identical ${i1} for 5 hours. What is this?`;
          options = [{ id: 'o1', text: `Analysis Paralysis`, isCorrect: true }, { id: 'o2', text: `Confirmation Bias`, isCorrect: false }, { id: 'o3', text: `Sunk Cost Fallacy`, isCorrect: false }, { id: 'o4', text: `Anchoring`, isCorrect: false }];
        } else if (tIdx === 2) {
          text = `${n3} bought a non-refundable ticket for ₦${num2 * 1000} to an event they now hate, but goes anyway. Bias?`;
          options = [{ id: 'o1', text: `Sunk Cost Fallacy`, isCorrect: true }, { id: 'o2', text: `Status Quo Bias`, isCorrect: false }, { id: 'o3', text: `Hindsight Bias`, isCorrect: false }, { id: 'o4', text: `Availability Heuristic`, isCorrect: false }];
        } else if (tIdx === 3) {
          text = `${n1} only reads news that agrees with their existing view on ${i1}. This is...?`;
          options = [{ id: 'o1', text: `Confirmation Bias`, isCorrect: true }, { id: 'o2', text: `Anchoring`, isCorrect: false }, { id: 'o3', text: `Halo Effect`, isCorrect: false }, { id: 'o4', text: `Placebo Effect`, isCorrect: false }];
        } else if (tIdx === 4) {
          text = `A store shows a ₦${num1 * 1000} shirt next to a ₦${num2 * 5000} suit to make the shirt look cheap. Tactic?`;
          options = [{ id: 'o1', text: `Anchoring / Framing`, isCorrect: true }, { id: 'o2', text: `Sunk Cost`, isCorrect: false }, { id: 'o3', text: `Blind Study`, isCorrect: false }, { id: 'o4', text: `Loss Aversion`, isCorrect: false }];
        } else if (tIdx === 5) {
          text = `${n2} thinks flying is dangerous because of a recent news story, ignoring safe statistics. Bias?`;
          options = [{ id: 'o1', text: `Availability Heuristic`, isCorrect: true }, { id: 'o2', text: `Survivorship Bias`, isCorrect: false }, { id: 'o3', text: `Dunning-Kruger Effect`, isCorrect: false }, { id: 'o4', text: `Optimism Bias`, isCorrect: false }];
        } else if (tIdx === 6) {
          text = `${n3} assumes ${n1} is good at math just because ${n1} is very tall and attractive. Bias?`;
          options = [{ id: 'o1', text: `The Halo Effect`, isCorrect: true }, { id: 'o2', text: `Sunk Cost`, isCorrect: false }, { id: 'o3', text: `Anchoring`, isCorrect: false }, { id: 'o4', text: `Confirmation Bias`, isCorrect: false }];
        } else if (tIdx === 7) {
          text = `To make a better decision about buying a car, what should you do?`;
          options = [{ id: 'o1', text: `Gather objective data and compare total cost of ownership`, isCorrect: true }, { id: 'o2', text: `Buy the reddest one`, isCorrect: false }, { id: 'o3', text: `Buy the first one you see`, isCorrect: false }, { id: 'o4', text: `Let the salesperson decide`, isCorrect: false }];
        } else if (tIdx === 8) {
          text = `You lose ₦${num1 * 1000} and feel much worse than the joy of finding ₦${num1 * 1000}. What is this?`;
          options = [{ id: 'o1', text: `Loss Aversion`, isCorrect: true }, { id: 'o2', text: `Sunk Cost`, isCorrect: false }, { id: 'o3', text: `Framing`, isCorrect: false }, { id: 'o4', text: `Anchoring`, isCorrect: false }];
        } else if (tIdx === 9) {
          text = `Everyone in a meeting agrees to a bad idea about ${i1} because nobody wants to be the dissenting voice. What is this?`;
          options = [{ id: 'o1', text: `Groupthink`, isCorrect: true }, { id: 'o2', text: `Halo Effect`, isCorrect: false }, { id: 'o3', text: `Bandwagon`, isCorrect: false }, { id: 'o4', text: `Confirmation Bias`, isCorrect: false }];
        } else {
          text = `After an unpredictable event happens, ${n1} claims they "knew it all along". What is this?`;
          options = [{ id: 'o1', text: `Hindsight Bias`, isCorrect: true }, { id: 'o2', text: `Foresight`, isCorrect: false }, { id: 'o3', text: `Optimism Bias`, isCorrect: false }, { id: 'o4', text: `Recency Bias`, isCorrect: false }];
        }
        explanation = `Understanding cognitive biases and heuristics.`;
        learningObjective = `Understanding decision-making biases.`;
        break;
    }

    if (!seenQuestions.has(text)) {
      seenQuestions.add(text);
      questions.push({
        id: `q-${cat}-gen-${idCounter++}`,
        categoryId: cat,
        ageGroups: age,
        difficulty: diff,
        type: 'multiple_choice',
        text: text,
        options: options,
        explanation: explanation,
        learningObjective: learningObjective,
        xpReward: diff === 'Hard' ? 30 : diff === 'Medium' ? 20 : 10
      });
      count++;
    }
  }
});

const fileContent = `import { Question } from '../types';

export const generatedSet: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('src/data/generated_set.ts', fileContent);
console.log('Successfully generated exactly 1000 highly varied unique questions (100 per category)!');

const { log } = console;

log("%c **** The Logs below are from the tips.js file ****", "color:blue;font-size: 20px");

// 1. No Concatenation use Template string
{
  let name = "Charlse";
  let place = "India";
  let isPrime = (bit) => {
    return bit === "P" ? "Prime" : "Nom-Prime";
  };

  let messageConcat =
    "Mr. " +
    name +
    " is from " +
    place +
    ". He is a" +
    " " +
    isPrime("P") +
    " member.";
  log(messageConcat);

  let messageTemplateStr = `Mr. ${name} is from ${place}. He is a ${isPrime(
    "P"
  )} member.`;
  log(messageTemplateStr);
}

// 2. isNumber
{
  let mynum = 123;
  let mynumStr = "123";
  let myNumFloat = 123.45;

  log(`${mynum} is a number?`, Number.isInteger(mynum));
  log(`${mynumStr} is a number?`, Number.isInteger(mynumStr));
  log(`${myNumFloat} is a number?`, Number.isInteger(myNumFloat));
}

// 3. Value as Number
function trackChange(event) {
  let value = event.target.value;
  log(`is ${value} a number?: With target.value`, Number.isInteger(value));

  let valueAsNumber = event.target.valueAsNumber;
  log(
    `is ${value} a number?: With target.valueAsNumber`,
    Number.isInteger(valueAsNumber)
  );
}

// 4. Short hand with AND
{
  let isPrime = true;
  const startWatching = () => {
    log("Started Watching!");
  };
  if (isPrime) {
    startWatching();
  }

  isPrime && startWatching();
}

// 5. Default values with OR
{
  let person = { name: "Jack" };
  let age = person.age || 35;
  log(`Age of ${person.name} is ${age}`);
}

// 6. Randoms
{
  let planets = [
    "Mercury ",
    "Mars",
    "Venus",
    "Earth",
    "Neptune",
    "Uranus",
    "Saturn",
    "Jupiter",
  ];
  let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
  log("Random Planet", randomPlanet);

  let getRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  log("Get random", getRandom(0, 10));
}

// 7. Function default params
{
  let greetings = (name, message = "Hello,") => {
    return `${message} ${name}`;
  };

  log(greetings("Jack"));
  log(greetings("Jack", "Hola!"));
}

// 8. Required Function Params
{
  let isRequired = () => {
    throw new Error("This is a mandatory parameter.");
  };

  let greetings = (name = isRequired(), message = "Hello,") => {
    return `${message} ${name}`;
  };
  log(greetings("Jack"));
}

// 9. Comma Operator
{
  let count = 1;
  let ret = (count++, count);
  log(count);
}

// 10. Merging multiple objects
{
  let emp = {
    id: "E_01",
    name: "Jack",
    age: 32,
    addr: "India",
  };

  let job = {
    title: "Software Dev",
    location: "Paris",
  };

  // spread operator
  let merged = { ...emp, ...job };
  log("Spread merged", merged);

  log("Object assign", Object.assign({}, emp, job));

  // for deep merge use _merge of lodash
}

// 11. Destructuring
{
  // array
  let emojis = ["🔥", "⏲️", "🏆", "🍉"];
  let [fire, clock, , watermelon] = emojis;
  log(fire, clock, watermelon);

  let [f, ...rest] = emojis;
  log(f);
  log(rest);

  // object
  let shape = {
    name: "rect",
    sides: 4,
    height: 300,
    width: 500,
  };

  let { name, sides, ...restObj } = shape;
  log(name, sides);
  log(restObj);
}

// 12. Swap variables
{
  let fire = "🔥";
  let fruit = "🍉";

  [fruit, fire] = [fire, fruit];
  log(fire, fruit);
}

// 13. isArray
{
  let emojis = ["🔥", "⏲️", "🏆", "🍉"];
  log(Array.isArray(emojis));
  let obj = {};
  log(Array.isArray(obj));
}

// 14. undefined vs null
{
  undefined == null; // true
  undefined === null; // false
}

// 15. Get Query Params
{
  let project = new URLSearchParams(location.search).get("project");
}

// 16. Tagged Template Literals
{
  function introduce(strings, ...values) {
    let msg = `<span style="color:${values[1]}">
                        Hello ${values[0]}, Have a Nice Day! We know your favorite color is <u>${values[1]}</u>
                    </span>`;

    return msg;
  }

  const name = "Joe";
  const color = "green";

  const message = introduce`Hello, I'm ${name} and ${color} is my favorite color!`;

  log(message);
  document.getElementById("tagged-template").innerHTML = message;
}

import keywords from "./keywords";

const generateMarkupText = (input) => {
  const elements = input.match(/\w+|\s+|[^\s\w]+/g);
  console.log(elements);

  let skipNext = 0;
  let currentWeapon = "";
  let currentDamageType = "";

  if (elements) {
    return elements
      .map((element, index) => {
        if (skipNext) {
          skipNext--;
        } else {
          // conditions
          if (keywords.conditions.includes(element)) {
            return `[condition]${element}[/condition]`;
          }

          // set weapon and damage type for the next attack roll
          for (let type in keywords.weapons) {
            if (keywords.weapons[type].includes(element.toLowerCase())) {
              currentWeapon = element;
              currentDamageType = type;
              return element;
            }
          }

          // attack roll
          if (
            element === "+" &&
            parseInt(elements[index + 1]) &&
            elements[index + 3] === "to" &&
            elements[index + 5] === "hit"
          ) {
            skipNext = 5;

            const attackRollBonus = elements[index + 1];

            return `[rollable]+${attackRollBonus};{"diceNotation":"1d20+${attackRollBonus}","rollType":"to hit","rollAction":"${currentWeapon}"}[/rollable] to hit`;
          }

          // damage roll
          if (element.match(/^[0-9]+[d][0-9]+/g)) {
            let startingExpression = `[rollable](${element}`;
            let expression = `{"diceNotation":"${element}`;

            // add '+' if there is a bonus to the roll
            // TO-DO: repeat less code
            if (elements[index + 1] === "+") {
              expression += "+";
              startingExpression += " + ";
              skipNext++;
            } else if (elements[index + 2] === "+") {
              expression += "+";
              startingExpression += " + ";
              skipNext += 2;
            }

            // add bonus value
            // TO-DO: repeat less code
            if (parseInt(elements[index + 2])) {
              expression += elements[index + 2];
              startingExpression += elements[index + 2];
              skipNext += 2;
            } else if (parseInt(elements[index + 3])) {
              expression += elements[index + 3];
              startingExpression += elements[index + 3];
              skipNext += 3;
            } else if (parseInt(elements[index + 4])) {
              expression += elements[index + 4];
              startingExpression += elements[index + 4];
              skipNext += 4;
            }
            startingExpression += ");";

            expression += `","rollType":"damage","rollAction":"${currentWeapon}","rollDamageType":"${currentDamageType}"}[/rollable] `;
            return startingExpression + expression;
          }

          // spells
          let currentSpell = '';
          keywords.spells.forEach(spell => {
            const spellElements = spell.split(' ');
            const elementArrayLength = (2 * spellElements.length) - 1; // to account for spaces

            if (spellElements[0] === element && spellElements[spellElements.length - 1] === elements[index + elementArrayLength - 1]) {
              skipNext += elementArrayLength - 1;
              currentSpell = spell;
            }
          })

          if (currentSpell)
          {
            return `[spell]${currentSpell}[/spell]`;
          }

          return element;
        }
      })
      .join("")
      .replace("([", "[")
      .replace(" )", "");
  }

  return "";
};

export default generateMarkupText;

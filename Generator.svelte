<script>
  import generateMarkupText from "./mixins/generateMarkupText.js";

  let inputText = `Multiattack. The archon makes two Greatsword attacks.

Greatsword. Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.

Spellcasting. The archon casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 14):
At will: aid, continual flame
1/day: magic circle, purify food and drink`;
</script>

<style>
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    margin-bottom: 50px;
  }

  div {
    float: left;
    width: 400px;
  }

  p {
    font-size: large;
    font-weight: 600;
    color: #C3073F;
  }

  textarea {
    height: 200px;
    width: 400px;
    background-color: #1A1A1D;
    color: white;
  }

  .static {
    color: gray;
  }
</style>

<span>
  <div>
    <p>Enter Stat Section here:</p>
    <textarea bind:value={inputText} />
  </div>
  
  <div>
    <p>Output:</p>
    <div class=static>{generateMarkupText(inputText)}</div>
  </div>
</span>

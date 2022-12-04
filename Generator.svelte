<script>
  import generateMarkupText from "./mixins/generateMarkupText.js";

  let inputText = "Cantrips (at will): light, sacred flame, thaumaturgy";
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
    <div class=static><i>{generateMarkupText(inputText)}</i></div>
  </div>
</span>

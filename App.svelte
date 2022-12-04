<script>
  import Generator from "./Generator.svelte";
</script>

<style>
  main {
    display:flex;
    flex-direction: row;
    justify-content: center;
    color:gray;
    font-family: Cambria;
    background-color: black;
    min-height: 100vh;
    max-height: fit-content;
  }

  .main-container {
    width: 400px;
  }

  h1 {
    color: #C3073F;
    font-size: xx-large;
  }

  .header-box {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .title-box {
    display: flex;
    flex-direction: row;
    font-size: smaller;
    gap: 10px;
  }

  .signature {
    margin-top: 40px;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<main>
  <span class=main-container>
    <div class=header-box>
        <div class=title-box>
          <h1>BEYONDER</h1> <div class=signature>by Arsalan B. M. (function_argument)</div>
        </div>
        
        <div>Automatically adds markup for dice rolls, as well as for spell/condition references.</div>
    </div>

    <div>
      <Generator />
    </div>
  </span>
  
</main>


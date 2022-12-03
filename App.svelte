<script>
  import Interpreter from "./Interpreter.svelte";
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
    
  }

  .header-box {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 25px;
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
        <h1>BEYONDER</h1>
        <div>Automatically adds markup for dice rolls, as well as for spell/condition references.</div>
    </div>

    <div>
      <Interpreter />
    </div>
  </span>
  
</main>


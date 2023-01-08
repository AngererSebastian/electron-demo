<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  import type { Program } from "ps-node";

  let programs = window.api.getProcesses() as Promise<Program[]>;

  function killProgram(pid: number) {
    alert(pid);
    window.api.killProcess(pid);
  }
</script>

<main>
  <h1>Programs running:</h1>

  {#await programs}
    <p>loading</p>
  {:then ps}
    {#each ps as p}
      <p>{p.pid} - {p.command} {p.arguments}</p>
      <button on:click="{() => killProgram(p.pid)}">Kill</button>
    {/each}
  {/await}
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

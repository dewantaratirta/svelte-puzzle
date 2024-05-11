<script>
	import Puzzle from './components/puzzle.svelte';

	let puzzle_el;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<button on:click={() => {puzzle_el.shuffle()}}> Shuffle</button>
	<button on:click={() => {puzzle_el.solve()}}> Solve</button>
	<button on:click={() => {puzzle_el.draw()}}> Image 1</button>
	<button on:click={() => {puzzle_el.draw('/chest2.jpg')}}> Image 2</button>
	<Puzzle bind:this={puzzle_el}/>
</section>

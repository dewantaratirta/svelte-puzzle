<script>
	import Header from '$components/Header.svelte';
	import './styles.css';
</script>

<html data-theme="light" lang="en">
	<Header />
	<main class="container">
		<slot />
	</main>
</html>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="color-scheme" content="light dark" />
	<link rel="stylesheet" href="pico.min.css" />
</svelte:head>


<style>
	main.container{
		min-height: 80vh;
	}
</style>
<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.svg" />
	<meta name="description" content="Andrei Zidariu - Developer & Creator" />
	<title>Andrei Zidariu</title>
</svelte:head>

<div class="app">
	<Nav />
	<main>{@render children()}</main>
</div>

<style>
	.app {
		min-height: 100vh;
	}

	main {
		padding-top: 80px;
	}
</style>

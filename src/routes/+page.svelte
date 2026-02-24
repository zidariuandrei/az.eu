<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
	<Hero />
	<Experience id="experience" />
	<Projects id="projects" />
	<Skills id="skills" />
	<Blog id="blog" />
	<Footer />
</div>

<style>
	.container {
		padding-top: 0;
	}
</style>

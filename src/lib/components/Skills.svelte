<script lang="ts">
	import { onMount } from 'svelte';

	let { id = '' } = $props();

	let sectionElement: HTMLElement;
	let revealed = $state(false);

	const skills = [
		'SvelteKit',
		'Vue',
		'Nuxt',
		'Bun',
		'Node.js',
		'Strapi',
		'GraphQL',
		'REST API',
		'TypeScript',
		'JavaScript',
		'Drizzle',
		'SQL',
		'Material Design',
		'Tailwind CSS',
		'PHP'
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						revealed = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionElement) {
			observer.observe(sectionElement);
		}

		return () => observer.disconnect();
	});
</script>

<section class="section" bind:this={sectionElement} {id}>
	<div class="section-header reveal" class:active={revealed}>
		<div class="section-number">
			<span class="section-kanji">四</span>
			Skills
		</div>
		<h2 class="section-title">Arsenal</h2>
	</div>
	<div class="skills-grid">
		{#each skills as skill}
			<span class="skill">{skill}</span>
		{/each}
	</div>
</section>

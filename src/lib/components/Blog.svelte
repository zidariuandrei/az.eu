<script lang="ts">
	import { onMount } from 'svelte';
	import { getPosts, type Post } from '$lib/posts';

	let { id = '' } = $props();

	let sectionElement: HTMLElement;
	let revealed = $state(false);
	let posts: Post[] = $state([]);

	onMount(() => {
		posts = getPosts();
		
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

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<section class="section" bind:this={sectionElement} {id}>
	<div class="section-header reveal" class:active={revealed}>
		<div class="section-number">
			<span class="section-kanji">五</span>
			Writing
		</div>
		<h2 class="section-title">Words</h2>
	</div>
	<div class="blog-list">
		{#each posts as post}
			<a href="/blog/{post.slug}" class="blog-item">
				<span class="blog-date">{formatDate(post.date)}</span>
				<span class="blog-title">{post.title}</span>
			</a>
		{/each}
	</div>
</section>

<style>
	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 1px;
		background: var(--border);
		border-radius: 2px;
		overflow: hidden;
	}

	.blog-item {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 1rem;
		padding: 1.25rem 1.5rem;
		background: var(--bg);
		transition: all 0.3s ease;
		text-decoration: none;
		align-items: baseline;
	}

	.blog-item:hover {
		background: var(--bg-secondary);
		padding-left: 1.8rem;
	}

	.blog-date {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.7rem;
		color: var(--text-muted);
		letter-spacing: 0.05em;
	}

	.blog-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.25rem;
		font-weight: 400;
		color: var(--text);
		transition: color 0.3s ease;
	}

	.blog-item:hover .blog-title {
		color: var(--accent);
	}
</style>

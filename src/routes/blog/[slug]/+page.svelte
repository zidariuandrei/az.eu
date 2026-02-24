<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.post.title} | Andrei Zidariu</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<article class="post">
	<a href="/#blog" class="back-link">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
			<path d="M19 12H5M12 19l-7-7 7-7"/>
		</svg>
		Back to Writing
	</a>
	
	<header class="post-header">
		<time class="post-date">{formatDate(data.post.date)}</time>
		<h1 class="post-title">{data.post.title}</h1>
		<p class="post-description">{data.post.description}</p>
		<div class="post-tags">
			{#each data.post.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</header>
	
	<div class="post-content">
		<data.post.content />
	</div>
</article>

<style>
	.post {
		max-width: 720px;
		margin: 0 auto;
		padding: 120px 2rem 4rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--text-secondary);
		font-size: 0.85rem;
		margin-bottom: 3rem;
		transition: color 0.2s ease;
	}

	.back-link:hover {
		color: var(--accent);
	}

	.post-header {
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--border);
	}

	.post-date {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.75rem;
		color: var(--text-muted);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.post-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 300;
		line-height: 1.2;
		margin: 1rem 0;
		color: var(--text);
	}

	.post-description {
		font-size: 1.1rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.65rem;
		padding: 0.35rem 0.75rem;
		background: var(--bg-secondary);
		border: 1px solid var(--border);
		border-radius: 2px;
		color: var(--text-secondary);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.post-content {
		font-size: 1.05rem;
		line-height: 1.85;
		color: var(--text-secondary);
	}

	.post-content :global(h1),
	.post-content :global(h2),
	.post-content :global(h3) {
		font-family: 'Cormorant Garamond', serif;
		color: var(--text);
		margin: 2.5rem 0 1rem;
		font-weight: 400;
	}

	.post-content :global(h1) { font-size: 2rem; }
	.post-content :global(h2) { font-size: 1.6rem; }
	.post-content :global(h3) { font-size: 1.3rem; }

	.post-content :global(p) {
		margin-bottom: 1.5rem;
	}

	.post-content :global(a) {
		color: var(--accent);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.post-content :global(ul),
	.post-content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
	}

	.post-content :global(li) {
		margin-bottom: 0.5rem;
	}

	.post-content :global(code) {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.9em;
	}

	.post-content :global(pre) {
		background: var(--code-bg) !important;
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 1.25rem;
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.post-content :global(pre code) {
		background: none !important;
		padding: 0;
		font-size: 0.85rem;
		line-height: 1.6;
	}

	/* Dual theme support via CSS variables - shiki outputs both themes */
	.post-content :global(pre.shiki) {
		background: var(--code-bg) !important;
	}

	.post-content :global(html[data-theme='light'] pre.shiki) {
		--shiki-light-bg: #fdf6e3;
	}

	.post-content :global(html[data-theme='light'] pre.shiki code) {
		color: #586e75 !important;
	}

	.post-content :global(html:not([data-theme='light']) pre.shiki code) {
		color: #d3c6aa !important;
	}

	.post-content :global(blockquote) {
		border-left: 2px solid var(--accent);
		padding-left: 1.5rem;
		margin: 1.5rem 0;
		color: var(--text-muted);
		font-style: italic;
	}

	.post-content :global(strong) {
		color: var(--text);
		font-weight: 500;
	}

	.post-content :global(hr) {
		border: none;
		border-top: 1px solid var(--border);
		margin: 2.5rem 0;
	}

	@media (max-width: 768px) {
		.post {
			padding: 100px 1.5rem 3rem;
		}

		.post-title {
			font-size: 2rem;
		}
	}
</style>

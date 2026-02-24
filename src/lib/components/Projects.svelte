<script lang="ts">
	let { id = '' } = $props();

	const projects = [
		{
			title: 'tane· (種)',
			description:
				'AI-powered startup idea validator and incubator. Acts as "Chief Product Officer" to research markets, analyze competitors, and generate validation reports.',
			tags: ['SvelteKit', 'Pi Agent', 'AI', 'SQLite'],
			link: 'https://github.com/zidariuandrei/tane'
		},
		{
			title: 'zu· (図)',
			description:
				'AI-powered System Architect that transforms validated ideas into concrete technical specifications. Generates DB schemas, API specs, and UI flow diagrams.',
			tags: ['SvelteKit', 'Mermaid', 'Architecture', 'AI'],
			link: 'https://github.com/zidariuandrei/zu'
		},
		{
			title: 'shiori· (栞)',
			description:
				'AI-assisted travel journaling application. Acts as intelligent travel companion, helping you document adventures and plan new ones with local-first data storage.',
			tags: ['SvelteKit', 'Pi Agent', 'SQLite', 'Travel'],
			link: 'https://github.com/zidariuandrei/shiori'
		},
		{
			title: 'sumi· (墨)',
			description:
				'Lightweight, high-performance ebook reader for Desktop (Linux, Windows, macOS) and Mobile (Android). Built with Tauri v2 and Svelte 5.',
			tags: ['Tauri', 'Svelte 5', 'Rust', 'Desktop'],
			link: 'https://github.com/zidariuandrei/sumi'
		},
		{
			title: 'kigo· (季)',
			description:
				'Terminal-based typing tutor (TUI) written in Go. Designed for split keyboards with real-time statistics, multiple themes, and local leaderboards.',
			tags: ['Go', 'TUI', 'Terminal', 'CLI'],
			link: 'https://github.com/zidariuandrei/kigo'
		}
	];
</script>

<section class="section" {id}>
	<div class="section-header">
		<div class="section-number">
			<span class="section-kanji">三</span>
			Projects
		</div>
		<h2 class="section-title">Creations</h2>
	</div>
	<div class="projects-grid">
		{#each projects as project}
			<a href={project.link} class="card project-card" target="_blank" rel="noopener">
				<h3 class="card-title">{project.title}</h3>
				<p class="card-description">{project.description}</p>
				<div class="tags">
					{#each project.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
	}

	.project-card {
		text-decoration: none;
		display: block;
	}

	.project-card:hover .card-title {
		color: var(--accent);
	}
</style>

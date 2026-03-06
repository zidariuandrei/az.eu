<script lang="ts">
	let { id = '' } = $props();

	const projects = [
		{
			title: 'tane· (種)',
			mvp: true,
			description:
				'AI-powered startup idea validator and incubator. Acts as "Chief Product Officer" to research markets, analyze competitors, and generate validation reports.',
			tags: ['SvelteKit', 'Pi Agent', 'AI', 'SQLite'],
			link: 'https://github.com/zidariuandrei/tane'
		},
		{
			title: 'zu· (図)',
			mvp: false,
			description:
				'AI-powered System Architect that transforms validated ideas into concrete technical specifications. Generates DB schemas, API specs, and UI flow diagrams.',
			tags: ['SvelteKit', 'Mermaid', 'Architecture', 'AI'],
			link: 'https://github.com/zidariuandrei/zu'
		},
		{
			title: 'shiori· (栞)',
			mvp: false,
			description:
				'AI-assisted travel journaling application. Acts as intelligent travel companion, helping you document adventures and plan new ones with local-first data storage.',
			tags: ['SvelteKit', 'Pi Agent', 'SQLite', 'Travel'],
			link: 'https://github.com/zidariuandrei/shiori'
		},
		{
			title: 'sumi· (墨)',
			mvp: false,
			description:
				'Lightweight, high-performance ebook reader for Desktop (Linux, Windows, macOS) and Mobile (Android). Built with Tauri v2 and Svelte 5.',
			tags: ['Tauri', 'Svelte 5', 'Rust', 'Desktop'],
			link: 'https://github.com/zidariuandrei/sumi'
		},
		{
			title: 'kigo· (季)',
			mvp: true,
			description:
				'Terminal-based typing tutor (TUI) written in Go. Designed for split keyboards with real-time statistics, multiple themes, and local leaderboards.',
			tags: ['Go', 'TUI', 'Terminal', 'CLI'],
			link: 'https://github.com/zidariuandrei/kigo'
		},
		{
			title: 'hachi· (八)',
			mvp: true,
			description:
				'A high-performance, pixel-perfect CHIP-8 interpreter written in Go using the Ebitengine game framework. Focused on clean architectural patterns and precise hardware emulation.',
			tags: ['Go', 'Emulation', 'Ebitengine', 'Systems'],
			link: 'https://github.com/zidariuandrei/CHIP-8'
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
				<div class="card-header">
					<h3 class="card-title">{project.title}</h3>
					{#if project.mvp}
						<div class="mvp-badge" title="MVP Ready">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
								/>
								<path d="m9 12 2 2 4-4" />
							</svg>
							<span>MVP</span>
						</div>
					{/if}
				</div>
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
		display: flex;
		flex-direction: column;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
		gap: 0.75rem;
	}

	.card-title {
		margin-bottom: 0;
	}

	.mvp-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--bg);
		background-color: var(--accent);
		padding: 0.2rem 0.65rem 0.2rem 0.5rem;
		border-radius: 99px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		flex-shrink: 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		margin-top: 0.2rem;
	}

	.project-card:hover .card-title {
		color: var(--accent);
	}
</style>

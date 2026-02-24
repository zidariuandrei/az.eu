<script lang="ts">
	import { onMount } from 'svelte';

	let heroElement: HTMLElement;

	onMount(() => {
		setTimeout(() => {
			if (heroElement) {
				heroElement.classList.add('active');
			}
		}, 100);

		const handleScroll = () => {
			const nav = document.querySelector('.nav');
			if (nav) {
				if (window.scrollY > 50) {
					nav.classList.add('scrolled');
				} else {
					nav.classList.remove('scrolled');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section class="hero" bind:this={heroElement}>
	<div class="hero-japanese">
		<div class="japanese-number">一</div>
		<div class="japanese-kanji-container">
			<svg class="kanji-svg" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
				<!-- 改善 (kaizen) - actual kanji with ink effects -->
				<text
					class="kanji-text kai"
					x="100"
					y="140"
					text-anchor="middle"
					filter="url(#inkBleed)"
				>改</text>

				<text
					class="kanji-text zen"
					x="100"
					y="265"
					text-anchor="middle"
					filter="url(#inkBleed)"
				>善</text>
			</svg>
			<div class="ink-mist"></div>
		</div>
	</div>
	<div class="hero-content">
		<h1 class="hero-title">Andrei Zidariu</h1>
		<p class="hero-subtitle">Senior Frontend Developer</p>
		<p class="hero-location">Timisoara, Romania · d.velop Eastern Europe</p>
		<div class="hero-about">
			<p>
				Architecting and developing a Contract Management System using SvelteKit with microservices architecture. I create open-source tools like <strong>tane·</strong> (AI startup validator), <strong>zu·</strong> (System Architect), <strong>shiori·</strong> (travel journaling), <strong>sumi·</strong> (ebook reader), and <strong>kigo·</strong> (typing tutor).
			</p>
			<p>
				Previously led development of complex healthcare applications, navigating regulatory requirements while delivering scalable solutions. A hands-on expert in modern JavaScript ecosystems, driving engineering excellence through collaborative leadership.
			</p>
		</div>
		<div class="hero-links">
			<a href="#projects" class="hero-link">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
					/>
				</svg>
				Projects
			</a>
			<a href="https://github.com/zidariuandrei" target="_blank" rel="noopener" class="hero-link">
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12z"
					/>
				</svg>
				GitHub
			</a>
			<a href="mailto:zidariuandrei@proton.me" class="hero-link">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				Contact
			</a>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 90vh;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 80px 0 1rem;
		position: relative;
		gap: 4rem;
	}

	.hero-japanese {
		position: static;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		flex-shrink: 0;
		height: fit-content;
		padding-top: 2rem;
	}

	.japanese-number {
		font-family: 'Noto Serif JP', serif;
		font-size: 2.5rem;
		font-weight: 200;
		color: var(--text-muted);
		opacity: 0.3;
		line-height: 1;
	}

	.japanese-kanji-container {
		position: relative;
		width: 120px;
		height: 260px;
	}

	.kanji-svg {
		width: 100%;
		height: 100%;
	}

	.kanji-text {
		font-family: 'Noto Serif JP', serif;
		font-size: 4.5rem;
		font-weight: 200;
		fill: var(--accent);
		opacity: 0;
		animation-fill-mode: forwards;
	}

	.kanji-text.kai {
		animation: inkReveal 2s ease-out forwards;
	}

	.kanji-text.zen {
		animation: inkReveal 2s ease-out forwards;
		animation-delay: 0.6s;
	}

	@keyframes inkReveal {
		0% {
			opacity: 0;
			filter: blur(8px);
		}
		100% {
			opacity: 0.85;
			filter: blur(0);
		}
	}
	.hero-content {
		flex: 1;
		opacity: 0;
		animation: fadeIn 1s ease forwards 0.2s;
	}

	.hero-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: clamp(2rem, 6vw, 3.5rem);
		font-weight: 300;
		letter-spacing: -0.04em;
		line-height: 0.95;
		margin-bottom: 1rem;
		color: var(--text);
	}

	.hero-subtitle {
		font-size: clamp(1.25rem, 2.5vw, 1.5rem);
		font-weight: 400;
		color: var(--text);
		margin-bottom: 0.5rem;
	}

	.hero-location {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.8rem;
		color: var(--text-secondary);
		letter-spacing: 0.05em;
		margin-bottom: 3rem;
	}

	.hero-about {
		max-width: 650px;
		margin-bottom: 3rem;
		opacity: 0;
		animation: fadeIn 1s ease forwards 0.4s;
	}

	.hero-about p {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.8;
		margin-bottom: 1.5rem;
		font-weight: 300;
	}

	.hero-about strong {
		color: var(--text);
		font-weight: 500;
	}

	.hero-links {
		display: flex;
		gap: 1rem;
		opacity: 0;
		animation: fadeIn 1s ease forwards 0.6s;
	}

	.hero-link {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.75rem 1.5rem;
		border: 1px solid var(--border);
		border-radius: 100px;
		font-size: 0.7rem;
		font-weight: 400;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		transition: all 0.3s ease;
	}

	.hero-link:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.hero-link svg {
		width: 14px;
		height: 14px;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.hero {
			flex-direction: col;
			gap: 1rem;
			padding: 30px 0 1rem;
		}

		.hero-japanese {
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;
			flex-shrink: 0;
		}

		.japanese-number {
			font-size: 1.2rem;
		}

		.japanese-kanji-container {
			width: 45px;
			height: 90px;
		}

		.hero-content {
			flex: 1;
			min-width: 0;
		}

		.hero-about {
			max-width: 100%;
		}

		.hero-links {
			flex-direction: column;
			width: 100%;
		}

		.hero-link {
			justify-content: center;
		}
	}
</style>

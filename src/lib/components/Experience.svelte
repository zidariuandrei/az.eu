<script lang="ts">
let { id = "" } = $props();

let sectionElement: HTMLElement;
let expandedJob = $state<number | null>(null);

const experiences = [
	{
		company: "d.velop Eastern Europe",
		role: "Senior Frontend Developer",
		location: "Timişoara, Timiş, Romania · Hybrid",
		period: "Jul 2025 - Present",
		points: [
			"Developing a Contract Management System using SvelteKit with microservices architecture.",
			"Deep in component design and structural implementation, establishing consistent design systems and reusable UI components.",
			"Owning and delivering multiple critical functionalities, ensuring robust implementation and seamless integration with backend services.",
			"Implementing Material Design principles to create intuitive, accessible user interfaces.",
		],
	},
	{
		company: "IkonSoft",
		role: "Senior Fullstack Engineer",
		location: "Cluj-Napoca (Remote)",
		period: "Jan 2024 - Jun 2025",
		points: [
			"Developed core functionalities for clinical studies projects in US Healthcare sector, ensuring strict compliance with 21CFR-Part 11 and HIPAA.",
			"Collaborated effectively within a fast-paced environment, developing features using Strapi, Apollo GraphQL, TypeScript, Vue, Nuxt, and Tailwind CSS.",
			"Designed and implemented robust, human-readable audit trails with redundancy checks, significantly enhancing system security and data integrity.",
			"Implemented key backend security middlewares to fortify server defenses and prevent unauthorized access.",
			"Implemented end-to-end Clinical Subject Portal, enabling subjects to autonomously schedule and manage visits.",
			"Engineered a system-wide UI/UX overhaul, implementing modern design principles to ensure consistency and meet accessibility standards.",
		],
	},
	{
		company: "IkonSoft",
		role: "Team Lead Developer",
		location: "Cluj-Napoca (Remote)",
		period: "Jan 2022 - Jan 2024",
		points: [
			"Promoted to Team Lead Developer to spearhead rapid onboarding and upskilling of two junior engineers.",
			"Led, mentored, and managed a growing team (from 4 to 6 members), directly contributing to a doubling of client base.",
			"Orchestrated and managed development across diverse projects with varied technology stacks, fostering strong team synergy.",
		],
	},
	{
		company: "IkonSoft",
		role: "Junior Developer",
		location: "Cluj-Napoca (Remote)",
		period: "Mar 2021 - Jan 2022",
		points: [
			"Engineered and maintained a critical Patient Portal as a fullstack developer.",
			"Developed and integrated highly complex features such as decision tree systems, modular plugin architectures, and secure payment gateways.",
			"Maintained and optimized system performance to handle peak loads exceeding 1 million user interactions per month.",
		],
	},
];

function toggleJob(index: number) {
	expandedJob = expandedJob === index ? null : index;
}
</script>

<section class="section" {id}>
	<div class="section-header">
		<div class="section-number">
			<span class="section-kanji">二</span>
			Experience
		</div>
		<h2 class="section-title">Work History</h2>
	</div>
	<div class="experience-list">
		{#each experiences as exp, i}
			<article class="experience-item" class:expanded={expandedJob === i}>
				<div class="experience-wrapper">
					<button
						class="experience-header"
						onclick={() => toggleJob(i)}
						onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? toggleJob(i) : null}
						aria-expanded={expandedJob === i}
						aria-controls={`exp-content-${i}`}
					>
						<div class="experience-row">
							<h3 class="experience-title">{exp.role}</h3>
							<div class="experience-toggle">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
								</svg>
							</div>
						</div>
						<div class="experience-meta">
							<span class="experience-company">{exp.company}</span>
							<span class="experience-location">{exp.location}</span>
							<span class="experience-period">{exp.period}</span>
						</div>
					</button>
				</div>
				<ul class="experience-points" class:visible={expandedJob === i}>
					{#each exp.points as point}
						<li class="experience-point">{point}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>

<style>
	.experience-list {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.experience-item {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.experience-wrapper {
		border-bottom: 1px solid var(--border);
	}

	.experience-wrapper:last-child {
		border-bottom: none;
	}

	.experience-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1.5rem 0;
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
		width: 100%;
		text-align: left;
		font-family: inherit;
		color: inherit;
		background: transparent;
	}

	.experience-item.expanded .experience-wrapper {
		border-color: var(--accent);
	}

	.experience-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.experience-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.5rem;
		font-weight: 400;
		letter-spacing: 0.01em;
		transition: color 0.3s ease;
	}

	.experience-item:hover .experience-title {
		color: var(--accent);
	}

	.experience-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		font-size: 0.8rem;
		color: var(--text-secondary);
	}

	.experience-toggle {
		transition: transform 0.3s ease;
		flex-shrink: 0;
	}

	.experience-toggle svg {
		width: 20px;
		height: 20px;
		color: var(--text-muted);
	}

	.experience-item.expanded .experience-toggle {
		transform: rotate(180deg);
	}

	.experience-item.expanded .experience-toggle svg {
		color: var(--accent);
	}

	.experience-company {
		font-weight: 400;
		color: var(--text);
	}

	.experience-location {
		color: var(--text-muted);
	}

	.experience-period {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.7rem;
		color: var(--text-muted);
		letter-spacing: 0.05em;
	}

	.experience-points {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin: 0;
		padding: 0 0 0 1.5rem;
		list-style: none;
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, padding 0.3s ease;
	}

	.experience-points.visible {
		max-height: 600px;
		opacity: 1;
		padding-top: 1.5rem;
	}

	.experience-point {
		position: relative;
		padding-left: 1.5rem;
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.experience-point::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.5em;
		width: 6px;
		height: 1px;
		background: var(--accent);
		opacity: 0.5;
	}

	@media (max-width: 640px) {
		.experience-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.experience-meta {
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>

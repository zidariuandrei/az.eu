<script lang="ts">
	let { kanji } = $props();
</script>

<div class="section-delimiter">
	<span class="delimiter-kanji">{kanji}</span>
</div>

<style>
	.section-delimiter {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}

	.delimiter-kanji {
		font-family: 'Noto Serif JP', serif;
		font-size: 5rem;
		font-weight: 200;
		opacity: 0.08;
	}
</style>

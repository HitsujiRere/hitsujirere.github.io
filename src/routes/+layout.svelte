<script lang="ts">
	import '../app.css';
	import '@fontsource/zen-maru-gothic';
	import '@fontsource/zen-maru-gothic/500.css';
	import '@fontsource/zen-maru-gothic/700.css';

	import { page } from '$app/stores';
	import { title } from '$lib/stores/title';
	import Link from './Link.svelte';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<div class="flex h-screen">
	<div class="relative flex min-w-[20rem] justify-center">
		<div class="absolute h-full w-[calc(20rem+tan(6deg)*100vh)] -skew-x-[6deg] bg-white" />
		<div class="z-10 flex flex-col justify-center gap-12">
			<h1 class="text-3xl text-black">
				<a href="/">ひつじれれ</a>
			</h1>
			<ul class="flex flex-col items-end gap-6">
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/works">Works</Link>
				</li>
			</ul>
		</div>
	</div>
	<div class="min-w-[calc(tan(6deg)*100vh)]" />
	
	<div class="flex-1">
		<div class="h-full -skew-x-[6deg] overflow-y-auto space-y-8 p-4">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	:global(body) {
		background-color: theme(colors.gray.100);
		font-family: 'Zen Maru Gothic';
	}
</style>

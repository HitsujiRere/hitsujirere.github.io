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
	<div class="flex w-1/3 justify-center max-xl:w-1/3" class:max-lg:hidden={$page.route.id !== ''}>
		<div class="flex flex-col justify-center gap-12">
			<h1 class="text-3xl">
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
	<div class="flex-1">
		<div class="h-full space-y-8 overflow-y-auto p-4">
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

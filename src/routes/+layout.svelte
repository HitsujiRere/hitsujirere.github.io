<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';

	import '@fontsource/zen-maru-gothic';
	import '@fontsource/zen-maru-gothic/700.css';

	import Link from './Link.svelte';
</script>

<div class="flex">
	<div class="w-1/2 flex justify-center">
		<div class="h-screen flex flex-col justify-center gap-12">
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
	<div class="w-1/2 p-2">
		<div class="h-full p-2 overflow-y-auto">
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

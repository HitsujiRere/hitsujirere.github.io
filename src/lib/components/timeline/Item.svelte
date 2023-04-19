<li class="item">
	<div class="circle" />
	<slot />
</li>

<style lang="postcss">
	.item {
		--timeline-space-width: 1rem;
		margin-left: var(--timeline-space-width);
		@apply relative my-4;
	}

	.circle {
		--timeline-circle-size: 1rem;
		width: var(--timeline-circle-size);
		height: var(--timeline-circle-size);
		left: calc(
			0px - var(--timeline-space-width) - var(--timeline-circle-size) / 2 -
				var(--timeline-line-width) / 2
		);
		@apply absolute rounded-full border-4 border-green-500 bg-white;
	}
</style>

<ol class="timeline"><slot /></ol>

<style lang="postcss">
	.timeline {
		--timeline-line-width: 4px;
		border-left-width: var(--timeline-line-width);
		@apply border-l-green-500;
	}
</style>

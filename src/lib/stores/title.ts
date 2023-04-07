import { writable } from 'svelte/store';

const createTitle = () => {
	const { subscribe, set } = writable(`ひつじれれ🐏`);

	return {
		subscribe,
		setSubtitle: (subtitle: string) => {
			set(`ひつじれれ🐏 - ${subtitle}`);
		},
		clearSubtitle: () => {
			set(`ひつじれれ🐏`);
		}
	};
};

export const title = createTitle();

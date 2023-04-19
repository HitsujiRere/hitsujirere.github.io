import { writable } from 'svelte/store';

const createTitle = () => {
	const { subscribe, set } = writable(`ひつじれれ🐏`);

	return {
		subscribe,
		setSubtitle: (subtitle: string) => {
			set(`${subtitle} - ひつじれれ🐏`);
		},
		clearSubtitle: () => {
			set(`ひつじれれ🐏`);
		}
	};
};

export const title = createTitle();

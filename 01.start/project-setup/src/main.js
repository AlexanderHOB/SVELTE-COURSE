import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		userName: 'Alexander',
	}
});

export default app;
<script lang="ts">
	import { initialiseDatabase } from '$lib';
	import type { Database } from 'sql.js';
	import { onMount } from 'svelte';
	let db: Database;
	let sqlQuery: string = 'SELECT * FROM periods';

	onMount(async () => {
		db = await initialiseDatabase();
	});

	function executeQuery() {
		const stmt = db.prepare(sqlQuery);
		while (stmt.step()) {
			console.log(stmt.getAsObject());
		}
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<textarea rows="12" bind:value={sqlQuery}></textarea>

<button disabled={!db} on:click={executeQuery}> Execute </button>

<style>
	textarea {
		width: 100%;
	}
</style>

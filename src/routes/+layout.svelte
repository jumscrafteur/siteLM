<script>
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />
<div>
	<slot />
</div>

<style>
	div {
		/* padding-top: 3rem; */
		height: 100%;
	}
</style>

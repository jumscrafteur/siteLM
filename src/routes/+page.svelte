<script lang="ts">
	import Gallery from '$lib/Gallery.svelte';
	import SectionSelector from '$lib/SectionSelector.svelte';
	import Selection from '$lib/Selection.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	// let categories = {
	// 	Photographie: ['Portraits', 'Paysages', 'Automobiles', 'Postprod'],
	// 	Vidéo: ['Vidéhaut', 'Vidébas', 'Vidédessus', 'Vidédessouuuuuuuuuuuuuuuuuuuus'],
	// 	Lorem: ['ipsum', 'dolor', 'sit', 'amet']
	// };

	const categories = data.categories;
	const images = data.images;

	let selectedCategory: string | null;
	let selectedSubCategory: string;
	let selectedImage: string | null;

	$: filteredImages = images.filter((img) => {
		const matchCategory = img.cat == selectedCategory;
		const matchSubcategory =
			selectedSubCategory == `${selectedCategory}-all` || img.subcat.includes(selectedSubCategory);
		return matchCategory && matchSubcategory;
	});
</script>

<main>
	<SectionSelector {categories} bind:selectedCategory bind:selectedSubCategory />
	{#if filteredImages.length == 0}
		<p style="padding-top: 5rem;">ok i pull up</p>
	{:else}
		<Gallery images={filteredImages} bind:selectedImage />
	{/if}

	{#if selectedImage}
		<Selection image={images.filter((image) => image.id == selectedImage)[0]} />
	{/if}
</main>

<svelte:window
	on:keydown={(e) => {
		if (e.key != 'Escape') return;

		if (selectedImage) {
			selectedImage = null;
			return;
		}

		if (!selectedSubCategory.endsWith('-all')) {
			selectedSubCategory = `${selectedCategory}-all`;
			return;
		}

		if (selectedCategory) {
			selectedCategory = null;
			return;
		}
	}}
/>

<style>
	main {
		display: flex;
		height: 100%;
	}
</style>

<script lang="ts">
	export let images: GalleryImage[];
	export let selectedImage: string | null;

	let rr = (min: number, max: number) => min + Math.random() * max;
</script>

<section>
	{#each images as image}
		<img
			src={image.src}
			alt="cover"
			on:click={() => {
				selectedImage = image.id;
			}}
		/>
	{/each}
</section>

<style>
	section {
		position: relative;
		/* padding: var(--blur-size) 5rem; */
		padding: var(--blur-size) 0rem;
		/* padding: calc(10rem + var(--blur-size)) 5rem; */
		width: 100%;
		height: 100%;

		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-content: flex-start;
		/* justify-content: center; */

		overflow-y: scroll;
		/* overflow-x: hidden; */

		/* gap: 2.5rem 5vw; */

		--blur-size: 5rem;
	}

	section::before,
	section::after {
		content: '';
		position: fixed;

		z-index: 2;

		right: 50px;

		width: 100%;
		height: calc(var(--blur-size) * 2);

		/* background-color: rgba(255, 0, 0, 0.351); */
		background-color: rgba(255, 255, 255, 0);

		backdrop-filter: blur(3px);

		filter: blur(5px);

		pointer-events: none;
	}

	section::before {
		top: calc(var(--blur-size) * -1);
	}

	section::after {
		bottom: calc(var(--blur-size) * -1);
	}

	img {
		/* width: 15vw;
		height: 15vw; */

		height: 200px;

		position: relative;

		cursor: pointer;
	}
</style>

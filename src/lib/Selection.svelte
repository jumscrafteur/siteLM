<script lang="ts">
	export let image: GalleryImage;
</script>

<div class="selection">
	<img src={image.src} alt="cover" />
	<p class="desc">
		{image.desc}
		<span class="anchor anchor-1" />
		<span class="anchor anchor-2" />
		<span class="anchor anchor-3" />
		<span class="anchor anchor-4" />
		<span class="anchor anchor-5" />
		<span class="anchor anchor-6" />
		<span class="anchor anchor-7" />
		<span class="anchor anchor-8" />
	</p>
</div>

<style>
	.selection {
		position: fixed;
		top: 50%;
		right: 50%;

		transform: translate(50%, -50%);

		z-index: 3;
	}

	.selection img {
		max-height: 50vh;
		max-width: 50vw;

		box-shadow: 0.2px 0.2px 2.2px rgba(0, 0, 0, 0.02), 0.9px 0.9px 5.3px rgba(0, 0, 0, 0.028),
			2.3px 2.3px 10px rgba(0, 0, 0, 0.035), 5px 5px 17.9px rgba(0, 0, 0, 0.042),
			11.8px 11.8px 33.4px rgba(0, 0, 0, 0.05), 50px 50px 80px rgba(0, 0, 0, 0.07);
	}

	.selection .desc {
		position: absolute;

		top: 100%;
		left: 100%;

		background-color: black;
		color: white;

		width: 30vw;
		transform: translate(-10vw, -50%);

		padding: 0.5rem 1rem;

		border-radius: 0.1rem;

		overflow: visible;
	}

	.selection .desc:after {
		content: '';
		position: absolute;
		top: -5px;
		left: -5px;
		right: -5px;
		bottom: -5px;
		border: grey 1px solid;
	}

	.selection .desc .anchor {
		position: absolute;

		width: 10px;
		height: 10px;

		border: grey 1px solid;
	}

	.selection .desc .anchor-1 {
		bottom: 100%;
		right: 100%;
	}

	.selection .desc .anchor-2 {
		bottom: 100%;
		left: calc(50% - 5px);
	}

	.selection .desc .anchor-3 {
		bottom: 100%;
		left: 100%;
	}

	.selection .desc .anchor-4 {
		top: calc(50% - 5px);
		left: calc(100%);
	}

	.selection .desc .anchor-5 {
		top: 100%;
		left: 100%;
	}

	.selection .desc .anchor-6 {
		top: 100%;
		left: calc(50% - 5px);
	}

	.selection .desc .anchor-7 {
		top: 100%;
		right: 100%;
	}

	.selection .desc .anchor-8 {
		top: calc(50% - 5px);
		right: 100%;
	}
</style>

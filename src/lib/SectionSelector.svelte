<script lang="ts">
	export let categories: { [key: string]: string[] };

	export let selectedCategory: string | null;
	export let selectedSubCategory: string | null;

	const changeSection = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		selectedCategory = e.currentTarget.value;
		selectedSubCategory = `${selectedCategory}-all`;
	};
</script>

<ul class="sections">
	{#each Object.entries(categories) as [sectionName, subsections]}
		<li>
			<input
				type="radio"
				name="sections"
				id={sectionName}
				value={sectionName}
				bind:group={selectedCategory}
				on:change={changeSection}
			/>
			<label for={sectionName}>{sectionName}</label>
			<ul class="subsections">
				<li>
					<input
						type="radio"
						name="{sectionName}-subsection"
						id="{sectionName}-all"
						value="{sectionName}-all"
						bind:group={selectedSubCategory}
					/>
					<label for="{sectionName}-all">Tout voir</label>
				</li>
				{#each subsections as subsectionName}
					<li>
						<input
							type="radio"
							name="{sectionName}-subsection"
							id="{sectionName}-{subsectionName}"
							value={subsectionName}
							bind:group={selectedSubCategory}
						/>
						<label for="{sectionName}-{subsectionName}">{subsectionName}</label>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
	<!-- <li>
		<input type="radio" name="a" id="Photographie" />
		<label for="Photographie">Photographie</label>
		<ul class="subsections">
			<li>Tout voir</li>
			<li>Portraits</li>
			<li>Paysages</li>
			<li>Automobiles</li>
			<li>Postprod</li>
		</ul>
	</li>
	<li>
		<input type="radio" name="a" id="Vidéo" />
		<label for="Vidéo">Vidéo</label>
		<ul class="subsections">
			<li>Tout voir</li>
			<li>Vidéhaut</li>
			<li>Vidébas</li>
			<li>Vidédessus</li>
			<li>Vidédessous</li>
		</ul>
	</li>
	<li>
		<input type="radio" name="a" id="Lorem" />
		<label for="Lorem">Lorem</label>
		<ul class="subsections">
			<li>Tout voir</li>
			<li>ipsum</li>
			<li>dolor</li>
			<li>sit</li>
			<li>amet</li>
		</ul>
	</li> -->
</ul>

<style>
	.sections {
		/* padding-left: 1rem;
		padding-top: 25vh; */
		padding: 25vh 1rem 0;
		list-style: none;

		display: flex;
		gap: 0.2rem;
		flex-direction: column;

		height: 500px;
		overflow: none;

		z-index: 3;
	}

	.subsections {
		border-left: 2px solid black;
		list-style: none;

		margin-left: 0.75rem;
		padding-left: 0.75rem;

		max-height: 0;
		overflow: hidden;

		transition: max-height 0.25s ease-out;
	}

	.sections input {
		display: none;
	}

	label {
		padding: 0.1rem 0.3rem;
		border-radius: 0.05rem;
	}

	.sections input:focus ~ label {
		background-color: grey;
		color: white;
	}

	.sections input:checked ~ label {
		background-color: black;
		color: white;
	}

	.sections input:checked ~ label ~ .subsections {
		max-height: 200px;
		/* transition: max-height 0.25s ease-in; */
	}
</style>

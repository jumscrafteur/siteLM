<nav>
	<div class="logo"><a href="/">Louis-Marie Pantanacce</a></div>
	<ul class="pages">
		<li><a href="/about">A propos</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		width: 100%;

		display: flex;
		justify-content: space-between;

		padding: 0.5rem 2rem;

		z-index: 999;
	}

	nav > * {
		z-index: inherit;
	}

	.pages {
		display: flex;
		gap: 1rem;
	}

	.pages li {
		list-style: none;
	}

	a {
		color: black;
		text-decoration: none;
		position: relative;

		background-color: rgba(255, 255, 255, 0.5);
		padding: 0 0.5rem;
		border-radius: 0.1rem;
	}

	a::after {
		content: '';
		display: block;
		position: absolute;

		height: 1px;
		background: #000;
	}

	a:hover::after {
		animation: identifier 0.5s;
		right: 100%;
		width: 0%;
	}

	@keyframes identifier {
		0% {
			left: 100%;
			width: 0;
		}
		50% {
			left: 0;
			width: 100%;
		}
		100% {
			left: 0%;
			width: 0%;
		}
	}
</style>

<script>
    import {interpret} from 'xstate';
    import {toggleMachine} from './machine';
	import visualize from '@karfau/xstate-plantuml';
	import encoder from "plantuml-encoder";

	const toggleService = interpret(toggleMachine, { devTools: true }).start();

	const plantuml = visualize(toggleMachine);
	const url = "http://www.plantuml.com/plantuml/svg/" + encoder.encode(plantuml);
	console.log(plantuml);

</script>

<main>
	<h1>Svelte XState Inspect Plantuml Example</h1>
	<button on:click={() => toggleService.send('TOGGLE')}>
		{$toggleService.matches('inactive') ? 'Off' : 'On'}
	</button>
	<div>
		<img alt="toggle" src={url}/>
	</div>	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
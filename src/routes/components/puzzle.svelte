<script>
	// https://flbulgarelli.github.io/headbreaker/#labels
	// https://flbulgarelli.github.io/headbreaker/
	import { onMount } from 'svelte';
	import headbreaker from 'headbreaker';

	let canvas;
	let canvas_container;

	onMount(async () => {
		window.headbreaker = headbreaker;
		draw();
	});

	const draw = () => {
		const initialWidth = 800;
		const responsive = new headbreaker.Canvas(canvas.id, {
			width: 800,
			height: 650,
			pieceSize: 100,
			proximity: 20,
			borderFill: 10,
			strokeWidth: 1.5,
			lineSoftness: 0.18
		});

		responsive.autogenerate({
			horizontalPiecesCount: 3,
			verticalPiecesCount: 3,
			metadata: [
				{ color: '#6F04C7' },
				{ color: '#0498D1' },
				{ color: '#16BA0D' },
				{ color: '#000000' },
				{ color: '#6F04C7' },
				{ color: '#0498D1' },
				{ color: '#16BA0D' },
				{ color: '#000000' },
				{ color: '#6F04C7' }
			]
		});
		responsive.draw();

		['resize', 'DOMContentLoaded'].forEach((event) => {
			window.addEventListener(event, () => {
				console.log(canvas_container.offsetWidth, canvas_container.clientHeight);
				responsive.resize(canvas_container.offsetWidth, canvas_container.clientHeight);
				responsive.scale(canvas_container.offsetWidth / initialWidth);
				responsive.redraw();
			});
		});
	};
</script>

<div id="canvas_container" bind:this={canvas_container}>
	<div id="canvas" bind:this={canvas}></div>
</div>

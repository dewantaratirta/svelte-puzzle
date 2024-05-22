<script>
	// https://flbulgarelli.github.io/headbreaker/#labels
	// https://flbulgarelli.github.io/headbreaker/
	import { onMount } from 'svelte';
	import headbreaker from 'headbreaker';

	let canvas;
	let canvas_container;

	/**
	 * @type Canvas
	 */
	let headbreaker_canvas;

	export const shuffle = () => {
		headbreaker_canvas.shuffle(0.7);
		headbreaker_canvas.redraw();
	};
	export const solve = () => {
		headbreaker_canvas.solve();
		headbreaker_canvas.redraw();
	};

	onMount(async () => {
		window.headbreaker = headbreaker;
		draw();
	});

	export const draw = (src_image = '/3_2.jpg') => {
		let img = new Image();
		img.src = src_image;

		img.onload = () => {
			const initialWidth = canvas_container.clientWidth;
			console.log(canvas_container.clientWidth)
			headbreaker_canvas = new headbreaker.Canvas(canvas.id, {
				width: canvas_container.clientWidth,
				height: 650,
				image: img,
				preventOffstageDrag: true,
				pieceSize: 200,
				// lineSoftness: 0.18,
				fixed: true,
				proximity: 20,
				borderFill: 20,
				strokeWidth: 0,
				strokeColor: 'black'
				// pieceSize: 40
			});

			headbreaker_canvas.adjustImagesToPuzzleHeight();
			headbreaker_canvas.autogenerate({
				horizontalPiecesCount: 3,
				verticalPiecesCount: 2
			});

			headbreaker_canvas.shuffle(0.7);
			headbreaker_canvas.draw();

			[('resize', 'DOMContentLoaded')].forEach((event) => {
				window.addEventListener(event, () => {
					// console.log(canvas_container.offsetWidth, canvas_container.clientHeight);
					headbreaker_canvas.resize(canvas_container.offsetWidth, canvas_container.clientHeight);
					headbreaker_canvas.scale(canvas_container.offsetWidth / initialWidth);
					headbreaker_canvas.redraw();
				});
			});
		};
	};
</script>

<div id="canvas_container" bind:this={canvas_container} on:shuffle={shuffle}>
	<div id="canvas" bind:this={canvas}></div>
</div>

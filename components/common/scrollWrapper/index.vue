<template>
	<div class="scroll-wrapper" ref="wrapper">
		<div class="scroll-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ScrollWrapper',
		props: {
      onPullDown: Function
		},
		mounted () {
			const BetterScroll = require('better-scroll').default;

			this.scroll = new BetterScroll(this.$refs.wrapper, {
        mouseWheel: true,
        click: true,
        tap: true,
        pullDownRefresh: {
        	threshold: 50,
        	stop: 50
        }
			});

			this.scroll.on('pullingDown', this.onPullDown.bind(null, this.scroll))
		}
	}
</script>
<template>
	<div class="cooperation-item">
		<a 
		  :href="item.link"
		  target="_blank"
		  class="item-lk"
		>
			<img 
			  :src="IMG_BASE + item.logoUrl" 
			  :alt="item.title"
			  class="logo-img"
			/>
			<p class="tt">{{item.title}}</p>
		</a>
	</div>
</template>

<script>
	import { URL } from '@/config/config';

	export default {
		name: 'CooperationItem',
		props: {
			item: Object
		},
		data () {
			return {
				IMG_BASE: URL.IMG_BASE
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cooperation-item {
		display: flex;
		flex: 1;
		padding: .15rem 0;

		.item-lk {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
		}

		.logo-img {
			width: .4rem;
			height: .4rem;
		}

		.tt {
			font-size: .12rem;
			margin-top: .1rem;
		}
	}
</style>










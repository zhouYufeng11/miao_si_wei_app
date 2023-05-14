<template>
	<div class="main-title">
		<h1 class="tt">{{title}}</h1>
		<nuxt-link
      to="/list"
      v-show="linkShow"
      class="lk"
		>
			更多 <i class="iconfont icon-arrow-right"></i>
		</nuxt-link>
	</div>
</template>

<script>
	export default {
		name: 'MainTitle',
		props: {
			title: String,
			linkShow: {
				type: Boolean,
				default () {
					return true;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: .44rem;
		margin-top: .1rem;
		padding: 0 .1rem;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: .01rem solid #ddd;
		font-size: .16rem;

		.tt {
			color: #000;
		}

		.lk {
			font-size: .12rem;
			color: #999;

			.iconfont {
				font-size: .12rem;
			}
		}
	}
</style>















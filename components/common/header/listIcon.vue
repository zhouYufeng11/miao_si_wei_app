<template>
	<div class="list-icon">
		<nuxt-link 
		  to="./list" 
		  class="link-wrap">
			<i 
			  class="iconfont icon-list"
			  v-show="listIconShow"></i>
		</nuxt-link>
	</div>
</template>

<script>
	
	export default {
		name: 'HeaderListIcon',
		props: {
			listIconShow: {
				type: Boolean,
				default () {
					return true;
				}
			}
		}
	}

</script>

<style lang="scss" scoped>
	.list-icon {
		display: flex;
		width: .44rem;
		height: .44rem;
		justify-content: center;
		align-items: center;
		color: #666;

		.iconfont {
			font-size: .25rem;
		}
	}
</style>









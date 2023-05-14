<template>
	<div class="nav-wrapper">
		<nav-item
      v-for="(item, index) of navData"
      :key="index"
      :item="item"
		/>
	</div>
</template>

<script>
	import NavItem from './navItem';

	export default {
		name: 'CourseNav',
		props: {
			navData: Array
		},
		components: {
			NavItem
		}
	}
</script>

<style lang="scss" scoped>
	.nav-wrapper {
		display: flex;
		flex-direction: row;
		background-color: #fff;
		border-bottom: .01rem solid #ddd;
		padding: .15rem .1rem .15rem 0;
	}
</style>
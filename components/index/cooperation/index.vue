<template>
	<div class="cooperation-wrapper">
		<cooperation-item
      v-for="(item, index) of linkData"
      :item="item"
      :key="index"
		/>
	</div>
</template>

<script>
	import CooperationItem from './cooperationItem';

	export default {
		name: 'Cooperation',
		props: {
			linkData: Array
		},
		components: {
			CooperationItem
		}
	}
</script>

<style lang="scss" scoped>
	.cooperation-wrapper {
		display: flex;
		flex-direction: row;
		background-color: #fff;
		border-bottom: .01rem solid #ddd;
	}
</style>
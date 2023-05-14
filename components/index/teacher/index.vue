<template>
	<div class="teacher-wrapper">
		<teacher-item
      v-for="(item, index) of teacherData"
      :key="index"
      :item="item"
		/>
	</div>
</template>

<script>
	import TeacherItem from './teacherItem';

	export default {
		name: 'Teacher',
		props: {
			teacherData: Array
		},
		components: {
			TeacherItem
		}
	}
</script>

<style lang="scss" scoped>
	.teacher-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: .1rem 0 .1rem .1rem;
		background-color: #fff;
		border-bottom: .01rem solid #ddd;
	}
</style>
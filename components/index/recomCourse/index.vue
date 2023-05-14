<template>
	<div class="course-wrapper">
		<recom-course-item
      v-for="(item, index) of recomCourseData"
      :key="index"
      :item="item"
		/>
	</div>
</template>

<script>
	import RecomCourseItem from './recomCourseItem';

	export default {
		name: 'RecomCourse',
		props: {
			recomCourseData: Array
		},
		components: {
			RecomCourseItem
		}
	}
</script>

<style lang="scss" scoped>
	.course-wrapper {
		display: flex;
		flex-direction: row;
		padding: .15rem .1rem .15rem 0;
		background-color: #fff;
		border-bottom: .01rem solid #ddd;
	}
</style>
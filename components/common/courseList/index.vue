<template>
	<div class="course-wrapper">
		<course-item
      v-for="(item, index) of courseData"
      :item="item"
      :key="index"
		/>
	</div>
</template>

<script>
	import CourseItem from './courseItem';

	export default {
		name: 'CourseList',
		props: {
			courseData: Array
		},
		components: {
			CourseItem
		}
	}
</script>
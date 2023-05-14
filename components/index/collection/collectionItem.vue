<template>
	<div class="collection-item">
		<main-title 
      :title="item.title"
      :linkShow="true"
		/>
		
		<course-list :courseData="item.courseDataList" />
	</div>
</template>

<script>
	import MainTitle from '@/components/common/mainTitle';
	import CourseList from '@/components/common/courseList';

	export default {
		name: 'CollectionItem',
		props: {
			item: Object
		},
		components: {
			MainTitle,
			CourseList
		}
	}
</script>
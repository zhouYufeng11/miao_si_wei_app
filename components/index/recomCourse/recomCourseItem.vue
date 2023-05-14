<template>
	<div class="recom-course-item">
		<a 
		   :href="item.href"
       target="_blank"
		>
		  <div class="cover">
		  	<img 
		  	  v-lazy="IMG_BASE + item.posterKey" 
		  	  :alt="item.title" />
		  </div>
			<h1 class="course-tt">{{item.title}}</h1>
			<div class="info">
				<img 
				   v-lazy="IMG_BASE + item.teacherImgKey" 
				   :alt="item.teacherName"
				   class="teacher-img"
				/>
				<span class="name">{{item.teacherName}}</span>
			</div>
		</a>
	</div>
</template>

<script>
	import { URL } from '@/config/config';

	export default {
		name: 'CourseItem',
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
	.recom-course-item {
		width: 50%;
		padding-left: .1rem;

		.course-tt {
			display: -webkit-box;
			height: .36rem;
			margin: .05rem 0;
			font-size: .14rem;
			line-height: .18rem;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}

		.info {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.teacher-img {
        width: .25rem;
        height: .25rem;
        border-radius: 50%;
			}

			.name {
				font-size: .12rem;
				color: #999;
			}
		}
	}
</style>












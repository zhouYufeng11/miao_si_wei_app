<template>
	<div class="teacher-item">
		<a 
		  :href="item.href"
		  target="_blank"
		  class="item-lk"
		>
			<div class="cover">
				<img 
				  :src="IMG_BASE + item.teacherImgKey" 
				  :alt="item.teacherName"
				  class="teacher-img"
				/>
			</div>
			<h1 class="teacher-name">{{item.teacherName}}</h1>
			<div class="info">
				<p class="line-1">课程数：{{item.courseCount}}</p>
				<p class="line-2">学生数：{{item.studentCount}}</p>
			</div>
		</a>
	</div>
</template>

<script> 
	import { URL } from '@/config/config';

  export default {
  	name: 'TeacherItem',
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
	.teacher-item {
		width: 47.2%;
		padding-right: .1rem;
		margin-bottom: .1rem;

		.item-lk {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.cover {
				width: 1.2rem;
				height: 1.2rem;

				.teacher-img {
					border-radius: 50%;
				}
			}

			.teacher-name {
				font-size: .16rem;
				margin-top: .15rem;
			}

			.info {
				font-size: .14rem;

				p {
					margin: .1rem 0;
					color: #666;
				}
			}
		}
	}
</style>













<template>
	<div class="course-item">
		<a 
		  :href="item.href"
		  target="_blank"
		  class="course-lk"
		>
			<div class="cover">
				<img 
				  v-lazy="IMG_BASE + item.posterKey" 
				  :alt="item.courseName"
				  class="cover-img"
				/>
			</div>
			<div class="info">
				<h1 class="course-tt">{{item.courseName}}</h1>
				<p class="course-desc">{{item.description.replace(/（.*?）/, '')}}</p>
				<p
          :class="['course-price', { 'free': item.price === '0' }]"
				>
					{{item.price === '0' ? '免费' : `￥${item.price}`}}
				</p>
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
	.course-item {
		height: 1rem;
		background-color: #fff;
		padding: .1rem;
		margin-bottom: .1rem;
		box-sizing: border-box;
		border-bottom: .01rem solid #ddd;

		.course-lk {
			position: relative;
			display: block;
			width: 100%;
			height: 100%;

			.cover {
				width: 1.42rem;
				height: 100%;
				background-color: #efefef;
			}

			.info {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				padding-left: 1.52rem;
				box-sizing: border-box;

				.course-tt {
					display: -webkit-box;
					height: .36rem;
					font-size: .14rem;
					line-height: .18rem;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}

				.course-desc {
					height: .25rem;
					line-height: .25rem;
					font-size: .12rem;
					color: #666;
				}

				.course-price {
					display: flex;
					justify-content: flex-end;
					font-size: .16rem;
					color: #f40;

					&.free {
						color: #5fb41b;
					}
				}
			}
		}
	}
</style>








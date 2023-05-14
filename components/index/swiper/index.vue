<template>
	<swiper :options="swiperOption" ref="indexSwiper">
    <swiper-slide
      v-for="(item, index) of sliderData"
      :key="index"
    >
      <swiper-item :item="item"></swiper-item>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
	import SwiperItem from './swiperItem';

	export default {
		name: 'MSwiper',
		props: {
			sliderData: Array
		},
		components: {
			Swiper,
			SwiperSlide,
			SwiperItem
		},
		data () {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					},
					loop: true,
					loopedSlides: 1,
					autoplay: true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .swiper-pagination-bullet-active {
		background-color: #fff;
	}
</style>
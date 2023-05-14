<template>
	<a 
	   :href="item.href"
	   target="_blank">
	  <img 
	     :src="IMG_BASE + item.imgKey" 
	     :alt="item.title" />  
	</a>
</template>

<script>
	import { URL } from '@/config/config';

	export default {
		name: 'SwiperItem',
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
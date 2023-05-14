<template>
	<div class="collection-wrapper">
		<collection-item
      v-for="(item, index) of collectionData"
      :key="index"
      :item="item"
		/>
	</div>
</template>

<script>
	import CollectionItem from './collectionItem';

	export default {
		name: 'Collection',
		props: {
			collectionData: Array
		},
		components: {
			CollectionItem
		}
	}
</script>
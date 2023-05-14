<template>
	<div class="nav-item">
		<a 
		  :href="item.link"
		  target="_blank"
		  class="nav-lk">
		  {{item.title}}  
		</a>
	</div>
</template>

<script>
	export default {
		name: 'NavItem',
		props: {
			item: Object
		}
	}
</script>

<style lang="scss" scoped>
	.nav-item {
		width: 25%;
		padding-left: .1rem;
		box-sizing: border-box;

		.nav-lk {
			display: flex;
			justify-content: center;
			align-items: center;
			height: .44rem;
			font-size: .14rem;
		}

    &:nth-child(1) {
    	.nav-lk {
    		background-color: #dff0d8;
    	}
    }

    &:nth-child(2) {
    	.nav-lk {
    		background-color: #d9edf7;
    	}
    }

    &:nth-child(3) {
    	.nav-lk {
    		background-color: #fcf8e3;
    	}
    }

    &:nth-child(4) {
    	.nav-lk {
    		background-color: #f2dede;
    	}
    }
	}
</style>











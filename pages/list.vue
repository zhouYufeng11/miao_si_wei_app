<template>
  <div class="container">
    <m-header
      :backIconShow="true"
      :listIconShow="false"
    />
    <list-tab :tabData="tabData" />
    <pull-down-loading-text
      :loadingText="loadingText"
      :topPosition=".79"
    />
    <scroll-wrapper
      :onPullDown="onPullDown"
    >
      <course-list :courseData="currentCourseData" />
    </scroll-wrapper>
  </div>
</template>

<script>

  import { mapState } from 'vuex';

	import MHeader from '@/components/common/header';
	import ScrollWrapper from '@/components/common/scrollWrapper';
	import PullDownLoadingText from '@/components/common/pullDownLoadingText';
  import ListTab from '@/components/list/listTab';
  import CourseList from '@/components/common/courseList';

  import { PULL_DOWN_TEXT } from '@/config/config';
  import { filterData } from '@/utils/tools';

  import ListModel from '@/models/Index';

  const listModel = new ListModel();

	export default {
	  name: 'ListPage',
	  components: {
	  	MHeader,
	  	ScrollWrapper,
	  	PullDownLoadingText,
      ListTab,
      CourseList
	  },

	  data () {
	  	return {
	  		tabData: [],
        courseData: [],
        currentCourseData: [],
	  		loadingText: PULL_DOWN_TEXT.PULLING
	  	}
	  },
    
    async asyncData () {
      const {
      	tabData,
        courseData
      } = await listModel.getListData();

      return {
      	tabData: [{ id: 0, title: '全部课程' }].concat(tabData),
        courseData,
        currentCourseData: courseData
      }
    },

    computed: {
      ...mapState(['id'])
    },

    watch: {
      id () {
        this.currentCourseData = filterData(this.courseData, this.id);
      }
    },

	  methods: {
	  	async getCourseData () {
        const courseData = await listModel.getCourseData();
        
        this.courseData = courseData;
        this.currentCourseData = filterData(this.courseData, this.id);
	  	},

      onPullDown (scroll) {
        this.loadingText = PULL_DOWN_TEXT.PULLING;
        this.getCourseData();

        setTimeout(() => {
          this.loadingText= PULL_DOWN_TEXT.FINISHED;

          setTimeout(() => {
            this.loadingText= PULL_DOWN_TEXT.FINISHED;
            scroll.finishPullDown();
          }, 500);

          setTimeout(() => {
            this.loadingText = PULL_DOWN_TEXT.ORIGIN;
          }, 1000);
        }, 1500);
      }
	  }
	}
</script>

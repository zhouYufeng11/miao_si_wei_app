<template>
  <div class="container">
    <m-header :backIconShow="false" :listIconShow="true" />
    <pull-down-loading-text :loadingText="loadingText" :topPosition="0.44" />
    <scroll-wrapper :onPullDown="onPullDown">
      <m-swiper :sliderData="sliderData" />

      <main-title title="前端进修班" :linkShow="true" />

      <course-nav :navData="navData" />

      <main-title title="平台合作方" :linkShow="true" />

      <cooperation :linkData="linkData" />

      <main-title title="官方推荐课程" :linkShow="true" />

      <recom-course :recomCourseData="recomCourseData" />

      <collection :collectionData="collectionData" />

      <main-title title="全网优秀老师" :linkShow="false" />
      
      <teacher :teacherData="teacherData" />
      <m-footer />
    </scroll-wrapper>
  </div>
</template>

<script>
import MHeader from '@/components/common/header';
import ScrollWrapper from '@/components/common/scrollWrapper';
import MFooter from '@/components/common/footer';
import MSwiper from '@/components/index/swiper';
import MainTitle from '@/components/common/mainTitle';
import CourseNav from '@/components/index/courseNav';
import Cooperation from '@/components/index/cooperation';
import RecomCourse from '@/components/index/recomCourse';
import Collection from '@/components/index/collection';
import Teacher from '@/components/index/teacher';
import PullDownLoadingText from '@/components/common/pullDownLoadingText';

import { PULL_DOWN_TEXT } from '@/config/config';

import IndexModel from '@/models/Index';

const indexModel = new IndexModel();

export default {
  name: 'IndexPage',
  components: {
    MHeader,
    ScrollWrapper,
    MFooter,
    MSwiper,
    MainTitle,
    CourseNav,
    Cooperation,
    RecomCourse,
    Collection,
    Teacher,
    PullDownLoadingText,
  },

  data() {
    return {
      sliderData: [],
      navData: [],
      linkData: [],
      recomCourseData: [],
      collectionData: [],
      teacherData: [],
      loadingText: PULL_DOWN_TEXT.PULLING,
    };
  },

  async asyncData() {
    const { sliderData, navData, linkData, recomCourseData, collectionData, teacherData } = await indexModel.getHomeData();

    return {
      sliderData,
      navData,
      linkData,
      recomCourseData,
      collectionData,
      teacherData,
    };
  },

  methods: {
    // 获取首页的数据
    async getHomeData() {
      const { sliderData, navData, linkData, recomCourseData, collectionData, teacherData } = await indexModel.getHomeData();

      // 数据请求完成
      this.sliderData = sliderData;
      this.navData = navData;
      this.linkData = linkData;
      this.recomCourseData = recomCourseData;
      this.collectionData = collectionData;
      this.teacherData = teacherData;
    },

    onPullDown(scroll) {
      // 1. 正在加载中...
      this.loadingText = PULL_DOWN_TEXT.PULLING;
      // 发起网络请i去
      this.getHomeData();

      setTimeout(() => {
        // 2. 加载完成
        this.loadingText = PULL_DOWN_TEXT.FINISHED;

        setTimeout(() => {
          // 3. 加载完成
          this.loadingText = PULL_DOWN_TEXT.FINISHED;
          scroll.finishPullDown();
        }, 500);

        setTimeout(() => {
          // 4. 重新加载
          this.loadingText = PULL_DOWN_TEXT.ORIGIN;
        }, 1000);
      }, 1500);
    },
  },
};
</script>

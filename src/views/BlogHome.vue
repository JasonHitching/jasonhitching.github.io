<template>
  <b-container fluid style="background-color: #353849" class="pt-5">
    <b-row class="justify-content-center">
      <b-col
        class="border border-success rounded p-4 mb-3"
        lg="8"
        md="10"
        v-for="(post, index) in posts"
        :key="post.slug + '_' + index"
      >
        <router-link :to="'/blog/' + post.slug">
          <b-card fluid class="post-card rounded p-0">
            <b-img
              style="border-radius: 0.5rem"
              :src="post.featured_image"
              fluid
            ></b-img>

            <b-card-title class="h2 text-white mt-4 font-weight-bold">{{
              post.title
            }}</b-card-title>
            <b-card-text class="mb-2 text-monospace text-white">
              {{ post.summary }}
            </b-card-text>
            <div>
              <span class="mr-2 badge badge-pill badge-primary">Example</span>
              <span class="mr-2 badge badge-pill badge-primary">Example</span>
            </div>
            <small class="font-italic text-muted">{{ post.published }}</small>
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { butter } from '@/buttercms.js';

export default {
  name: 'blog-home',
  data() {
    return {
      page_title: 'Blog',
      posts: []
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
        })
        .then((res) => {
          this.posts = res.data.data;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style scoped>
.post-card {
  background-color: #232734;
}

.card-body {
  transition: 0.6s;
  padding: 5px;
}

.card-body:hover {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  background-color: #ccc9c93a;
  text-decoration: none !important;
}
</style>

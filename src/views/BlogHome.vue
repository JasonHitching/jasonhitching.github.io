<template>
  <b-container>
    <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
      <b-row>
        <b-col class="mx-auto col-lg-8 col-md-10">
          <b-card class="mb-5 border-0">
            <router-link :to="'/blog/' + post.slug">
              <b-card-title class="mt-3">{{ post.title }}</b-card-title>
              <b-card-text>
                {{ post.summary }}
              </b-card-text>
              <small class="text-muted">{{ post.published }}</small>
            </router-link>
          </b-card>
          <hr class="blog-hr" />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import { butter } from "@/buttercms.js";
export default {
  name: "blog-home",
  data() {
    return {
      page_title: "Blog",
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
hr.blog-hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
</style>

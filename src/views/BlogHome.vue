<template>
  <b-container>
    <div style="width: 66%" class="text-center mx-auto mt-5 mb-5">
      <div style="border-top: 1px solid black; border-bottom: 1px solid black">
        <h1 class="display-4"><b>Blog</b></h1>
      </div>
      <p class="lead mt-3">Blog about all things bloggy</p>
    </div>
    <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
      <b-row>
        <b-col class="mx-auto col-lg-8 col-md-10"
          ><hr class="blog-hr" />
          <b-card class="border-0">
            <router-link :to="'/blog/' + post.slug">
              <b-img :src="post.featured_image" fluid></b-img>

              <b-card-title class="h2 text-dark mt-4 font-weight-bold">{{
                post.title
              }}</b-card-title>
              <b-card-text class="text-monospace text-secondary">
                {{ post.summary }}
              </b-card-text>
              <small class="font-italic text-muted">{{ post.published }}</small>
            </router-link>
          </b-card>
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
  margin-bottom: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.card-body {
  padding: 0;
  margin-bottom: 24px;
}
</style>

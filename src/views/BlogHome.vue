<template>
  <b-container class="mt-5">
    <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
      <b-row>
        <b-col class="mx-auto col-lg-8 col-md-10">
          <router-link :to="'/blog/' + post.slug">
            <b-card class="post-card border-0 rounded">
              <b-img
                style="border-radius: 0.5rem"
                :src="post.featured_image"
                fluid
              ></b-img>

              <b-card-title class="h2 text-dark mt-4 font-weight-bold">{{
                post.title
              }}</b-card-title>
              <b-card-text class="mb-2 text-monospace text-secondary">
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
/* hr.blog-hr {
  border: 0;
  height: 0;
  margin-bottom: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
} */

.card-body {
  margin-bottom: 24px;
  transition: 0.6s;
}

.card-body:hover {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  background-color: #ccc9c93a;
}
</style>

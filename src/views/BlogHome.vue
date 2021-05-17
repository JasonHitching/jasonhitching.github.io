<template>
  <div>
    <b-container>
      <h1>{{ page_title }}</h1>
      <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
        <b-row align-h="center">
          <router-link :to="'/blog/' + post.slug">
            <b-card
              :title="post.title"
              :img-src="post.featured_image"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 40rem"
              class="mb-3"
            >
              <b-card-text>
                {{ post.summary }}
              </b-card-text>
              <small class="text-muted">{{ post.published }}</small>
            </b-card>
          </router-link>
        </b-row>
      </div>
    </b-container>
  </div>
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

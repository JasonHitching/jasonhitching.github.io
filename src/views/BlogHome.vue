<template>
  <div>
    <b-container fluid>
      <b-row cols="3" style="margin: 15px 15px">
        <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
          <b-col class="">
            <b-card class="mb-5 border-0">
              <router-link :to="'/blog/' + post.slug">
                <b-card-img
                  style="height: 13rem; width: 24.4rem"
                  :src="post.featured_image"
                  img-alt="Image"
                ></b-card-img>
                <b-card-title class="mt-3">{{ post.title }}</b-card-title>
                <b-card-text>
                  {{ post.summary }}
                </b-card-text>
                <small class="text-muted">{{ post.published }}</small>
              </router-link>
            </b-card>
          </b-col>
        </div>
      </b-row>
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

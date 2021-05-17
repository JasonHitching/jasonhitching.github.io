<template>
  <div>
    <h1>{{ page_title }}</h1>
    <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
    <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
      <b-card-group deck>
        <router-link :to="'/blog/' + post.slug">
          <b-card
            :title="post.title"
            :img-src="post.featured_image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              {{ post.summary }}
            </b-card-text>
            <small class="text-muted">Last updated 3 mins ago</small>
          </b-card>
        </router-link>
      </b-card-group>
    </div>
  </div>
</template>
<!-- <div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div> -->
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

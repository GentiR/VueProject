<template>
  <div class="home">
    <!-- Inside of BlogPost we are goint to look for the prop post which is equal to the welcomeScreen component-->
    <BlogPost :post="welcomeScreen" />

    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
      <h3>View more</h3>
      <div class="blog-cards">
      <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCards from "../components/BlogCard"
export default {
  name: "Home",
  components: { BlogPost, BlogCards },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
        welcomeScreen: true,
        photo: "22",
      },
      sampleBlogPost: [
        {
          title: "this is the first title",
          blogHTML: "this is a filler blog post title",
          blogCoverPhoto: "pasta1",
        },
        {
          title: "this is the second title",
          blogHTML: "this is a filler blog post title",
          blogCoverPhoto: "GreenJuice",
        },
      ],
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "burger",
          blogDate: "May 1, 2022",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "salad",
          blogDate: "May 1, 2022",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "tacos",
          blogDate: "May 1, 2022",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "cake",
          blogDate: "May 1, 2022",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>

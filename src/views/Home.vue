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
      <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
      </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post.Register</h2>
        <router-link class="router-button" to="#">
          Register for Food Stories <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard"
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
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
    };
  },
  computed: {
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards;
    }
  }
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
.updates{
  .container{
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 800px){
   padding: 125px 25px;
   flex-direction: row;
    }
    .router-button{
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media(min-width:800px ) 
      {
        margin-left: auto;
      }
    }
    h2{
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px){
        text-align: initial;
        font-size: 40px;
      }
    }

  }
}
</style>

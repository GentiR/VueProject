<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <!-- here we display the data on screen ex. if the welcome screen exists
         we show the title, also if blogPost exists it displays on screen-->
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>
        <router-link class="link " v-if="post.welcomeScreen" to="#">
          login/register<Arrow class="arrow" />
        </router-link>
        <router-link class="link" v-else to="#">
          view the post<Arrow class="arrow" />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require('../assets/blogPhotos/' + post.photo + '.jpg')"
      />
      <img
        v-else
        :src="require('../assets/blogPhotos/' + post.blogCoverPhoto + '.jpg')"
      />
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "blogPost",
  //bingind blogpost with our home page
  props: ["post"],
  components: {
    Arrow,
  },
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 500px) {
    min-height: 450px;
    max-height: 450px;
    flex-direction: row;
  }
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }
      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }
      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }
      .content-preview {
        font-size: 13px;
        max-height: 24px;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: 0.5 ease-in all;

        &:hover {
          border-bottom-color: black;
        }
      }
      .link-light {
        &:hover {
          border-bottom-color: white;
        }
      }
    }
  }
  .blog-photo{
      order: 1;
      flex: 3;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    

    @media(min-width:700px){
        order: 2;
    }
    @media(min-width:800px){
        flex: 4;
    }
    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }

  &:nth-child(even){
  .blog-content{
      order: 2;
       background-image: linear-gradient(to left, rgba(245, 166, 38, 0.719) , rgba(248, 248, 3, 0.39));
        color: rgb(0, 0, 0);
  }
  .blog-photo{
      order: 1;
  }
  }
   &:nth-child(odd){
  .blog-content{
      order: 2;
       background-image: linear-gradient(to left, white , rgba(245, 166, 38, 0.719));
        color: rgb(0, 0, 0);
  }
  .blog-photo{
      order: 2;
  }
  }
}
.no-user:first-child{
    .blog-content{
        background-image: linear-gradient(to right, white , rgba(248, 248, 3, 0.411));
        color: rgb(0, 0, 0);
    }
}



</style>

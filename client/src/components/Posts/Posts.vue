<template>
  <v-container>
    <h1>Posts</h1>
    <ul v-for="post in getPosts" :key="post._id">
      <li>
        <strong>Title: </strong>{{post.title}} 
        <strong>ImageUrl: </strong>{{post.imageUrl}} 
        <strong>Description: </strong>{{post.description}}
      </li>
    </ul>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";
export default {
  name: "Posts",
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `
    }
  }
};
</script>

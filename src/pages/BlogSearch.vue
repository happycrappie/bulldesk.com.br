<page-query>
  query Posts {
    allPosts: allWordPressPost {
      edges {
        node {
          id
          title
          path
          excerpt
          content
          modified
          slug
          categories {
            title
            path
          }
          date
          featuredMedia {
            id
            sourceUrl
          }
        }
      }
    }
  }
</page-query>

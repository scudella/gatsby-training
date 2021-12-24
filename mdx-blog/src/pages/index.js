import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Hero showPerson />
        <Posts posts={posts} title="recently published" />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        excerpt
        frontmatter {
          slug
          date(formatString: "MMMM, Do YYYY")
          author
          category
          readTime
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
        }
      }
    }
  }
`

export default IndexPage

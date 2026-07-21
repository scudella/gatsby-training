import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Survey,
  Slider,
  GridProjects,
  Seo,
} from '../components'

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
    customers: { nodes },
  } = data
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Hero />
        <About />
        <GridProjects projects={projects} title="latest projects" />
        <Survey />
        <Slider customers={nodes} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { data: { date: DESC } }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }

    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 150
                  height: 150
                  placeholder: BLURRED
                )
              }
            }
          }
        }
        id
      }
    }
  }
`

export default HomePage

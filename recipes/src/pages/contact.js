import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get in Touch?</h3>
            <p>
              Beard 90's gochujang, vegan pitchfork poutine 3 wolf moon everyday
              carry activated charcoal.
            </p>
            <p>
              Subway tile cornhole YOLO gastropub. Hella next level jianbing
              tattooed franzen biodiesel humblebrag offal squid distillery.
            </p>
            <p>
              Before they sold out sustainable succulents etsy bushwick
              activated charcoal austin seitan banh mi. Kinfolk blog
              chicharrones, unicorn marfa glossier selvage tattooed helvetica
              narwhal.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mnqwayel"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesome souce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact

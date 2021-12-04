// name and location of this file matters

const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        // use of /tags is required to avoid a bug where
        // recipe and tag have the same name
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}

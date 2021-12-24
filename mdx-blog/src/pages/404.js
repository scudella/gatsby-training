import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <>
    <Seo title="Not found" />
    <Layout>
      <section className="error-page">
        <div className="page-center">
          <span>404</span>
          <h3>Sorry, the page you tried cannot be found</h3>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  </>
)

export default NotFoundPage

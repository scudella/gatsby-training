import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
const Success = () => {
  return (
    <>
      <Seo title="Success" />
      <Layout>
        <section className="success-page">
          <div className="page-center">
            <h2>Your submission was received !</h2>
            <Link to="/" className="btn">
              back home
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Success

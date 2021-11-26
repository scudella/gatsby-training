import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
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
            <form className="form contact-form">
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
      </main>
    </Layout>
  )
}

export default Contact

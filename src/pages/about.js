import React, { Fragment } from "react"

import SEO from "../components/seo"
import AboutBanner from "../components/About/Banner"
import Highlights from "../components/About/Highlights"
import Testimonials from "../components/Testimonials"

const AboutPage = () => {
  return (
    <Fragment>
      <SEO title="fidisys - About" description="We design and develop beautiful applications, experience and brands that breaks the barriers of time and burn into the memories of customers love." keywords={['Mobile Applications development', 'Web Applications Development', 'Chennai Startup', 'UI/UX Designs', 'API Development', 'Devops', 'React', 'ReactNative', 'Angular', 'Vue', 'Kotlin', 'Flutter', 'Ionic', 'Android', 'IOS', 'Invision', 'Figma', 'Rails', 'NodeJS', 'Design System', 'Micro Front Ends']} />
      <AboutBanner />
      <Highlights />
      <Testimonials />
    </Fragment>
  )
}

export default AboutPage

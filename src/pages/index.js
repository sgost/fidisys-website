import React, { Fragment } from "react"

import SEO from "../components/seo"
import Banner from "../components/Home/Banner"
import Services from "../components/Home/Services"
import Clients from "../components/Home/Clients"
import Works from "../components/Home/Works"
import Testimonials from "../components/Testimonials"
import Articles from "../components/Home/Articles"

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title="fidisys - Home" description="We design and develop beautiful applications, experience and brands that breaks the barriers of time and burn into the memories of customers love." keywords={['Mobile Applications development', 'Web Applications Development', 'Chennai Startup', 'UI/UX Designs', 'API Development', 'Devops', 'React', 'ReactNative', 'Angular', 'Vue', 'Kotlin', 'Flutter', 'Ionic', 'Android', 'IOS', 'Invision', 'Figma', 'Rails', 'NodeJS', 'Design System', 'Micro Front Ends']} />
      <Banner />
      <Services />
      <Clients />
      <Works />
      <Testimonials />
      <Articles />
    </Fragment>
  )
}

export default IndexPage

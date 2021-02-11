import React, { Fragment } from "react"

import SEO from "../components/seo"
import TechBanner from "../components/Technologies/Banner"
import Tools from "../components/Technologies/Tools"
import Partner from "../components/Technologies/Partner"

const TechPage = () => {
  return (
    <Fragment>
      <SEO title="fidisys - Technologies" description="We design and develop beautiful applications, experience and brands that breaks the barriers of time and burn into the memories of customers love." keywords={['Mobile Applications development', 'Web Applications Development', 'Chennai Startup', 'UI/UX Designs', 'API Development', 'Devops', 'React', 'ReactNative', 'Angular', 'Vue', 'Kotlin', 'Flutter', 'Ionic', 'Android', 'IOS', 'Invision', 'Figma', 'Rails', 'NodeJS', 'Design System', 'Micro Front Ends']} />
      <TechBanner />
      <Tools />
      <Partner />
    </Fragment>
  )
}

export default TechPage

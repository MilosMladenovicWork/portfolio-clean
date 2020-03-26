import React, {useState, useEffect} from "react"
import VisibilitySensor from 'react-visibility-sensor'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from '../components/home'
import About from '../components/about'
import ProjectsArea from '../components/projectsarea'
import Contact from '../components/contact'

function IndexPage(){
  const [section, setSection] = useState(0)
  const [offset, setOffset] = useState(0)
  console.log(section)

  useEffect(() => {
    setOffset(window.innerHeight/2)
  }, [])

  return(
    <Layout section={section}>
      <SEO title="Home" />
      <VisibilitySensor partialVisibility offset={{bottom:offset, top:offset}} onChange={(isVisible) => isVisible && setSection(0)}>
        <Home/>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{bottom:offset, top:offset}} onChange={(isVisible) => isVisible && setSection(1)}>
        <About/>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{bottom:offset, top:offset}} onChange={(isVisible) => isVisible && setSection(2)}>
        <ProjectsArea/>
      </VisibilitySensor>
      <VisibilitySensor partialVisibility offset={{bottom:offset, top:offset}} onChange={(isVisible) => isVisible && setSection(3)}>
        <Contact/>
      </VisibilitySensor>
    </Layout>
  )
}

export default IndexPage

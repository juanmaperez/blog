import React from 'react'
import { Link } from 'gatsby'
import Header from './../components/header'
import './../styles/index.scss'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <div className="container">
    <Header siteTitle={'Juanma Perez'}/>

    <div className="container-fluid">
      <Layout>
        <h1>Here goes the content</h1>
      </Layout>
    </div>
  </div>
)

export default IndexPage

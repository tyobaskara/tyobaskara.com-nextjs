import React from 'react'
import Head from 'next/head';
import Navigation from '../components/Navigation'
import NavigationFixed from '../components/NavigationFixed'
import prodCss from '../styles/main.css'
import { Footer } from '../components/Footer'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cssFile: process.env.NODE_ENV !== 'development' ? <style dangerouslySetInnerHTML={{ __html: prodCss }} /> : <link rel="stylesheet" href="../static/main.css" />
    }
  }
  
  render() {
    return (
      <div>
        <Head>
          {this.state.cssFile}
        </Head>
        {this.props.navigation === 'fixed' ? <NavigationFixed /> : <Navigation />}
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
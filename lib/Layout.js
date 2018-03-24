import Navigation from '../components/Navigation'
import NavigationFixed from '../components/NavigationFixed'
import prodCss from '../styles/main.css'
import { Footer } from '../components/Footer'
import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      {process.env.NODE_ENV === 'development' && <link rel="stylesheet" href="../static/main.css" />}
    </Head>
    {process.env.NODE_ENV !== 'development' && <style dangerouslySetInnerHTML={{ __html: prodCss }} />}
    {props.navigation === 'fixed' ? <NavigationFixed /> : <Navigation />}
    {props.children}
    <Footer />
  </div>
)

export default Layout
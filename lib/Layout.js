import Navigation from '../components/Navigation'
import NavigationFixed from '../components/NavigationFixed'
import maincss from '../styles/main.css'
import { Footer } from '../components/Footer'

const Layout = (props) => (
  <div>
      {process.env.NODE_ENV === 'development' && <link rel="stylesheet" href="../static/main.css" />}
      {process.env.NODE_ENV !== 'development' && <style dangerouslySetInnerHTML={{ __html: maincss }} />}
      {props.navigation === 'fixed' ? <NavigationFixed /> : <Navigation />}
      {props.children}
      <Footer />
  </div>
)

export default Layout
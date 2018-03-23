import Navigation from '../components/Navigation'
import NavigationFixed from '../components/NavigationFixed'
import maincss from '../styles/main.scss'
import { Footer } from '../components/Footer'

const Layout = (props) => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: maincss }} />
      {props.navigation === 'fixed' ? <NavigationFixed /> : <Navigation />}
      {props.children}
      <Footer />
  </div>
)

export default Layout
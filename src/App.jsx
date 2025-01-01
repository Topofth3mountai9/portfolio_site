import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';
import Hero from './components/hero/hero.component';
import Nav_and_hero from './components/nav_and_hero/nav_and_hero.component';
import Nav_bar from './components/nav_bar/nav_bar.component';
import Portfolio from './components/portfolio/portfolio.component';
import Professional_skills from './components/professional_skills/professional_skills.component';
import './global.scss';

function App() {
  return (
    <>
      <div>
        {/* <Nav_bar />
        <Hero /> */}
        <Nav_and_hero />
        <Professional_skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

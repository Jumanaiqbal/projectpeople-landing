import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <section id="portfolio">
          <Portfolio /> 
        </section>
        <Testimonial/>
        <Footer/>
      </main>
     
    </>
  );
};

export default HomePage;
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Hero>
        <Navbar />
        <Header />
      </Hero>
      <Main>
        <About />
        <Skills />
        <Projects />
      </Main>
      <Footer />
    </div>
  );
}

export default App;

import Container from "./components/LayoutHelper/Container";
import About from "./components/Organisms/About";
import Features from "./components/Organisms/Features";
import Footer from "./components/Organisms/Footer";
import FAQ from "./components/Organisms/Faq";
import Hero from "./components/Organisms/Hero";

export default function App() {
  return (
    <>
      <div className="bg-blue--900 box-border">
        <Hero />
        {/* About */}
        <Container>
          <About />
        </Container>

        {/* Feature */}
        <Container>
          <Features />
        </Container>

        {/* FAQ */}
        <Container>
          <FAQ />
        </Container>

        {/* Footer */}
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}

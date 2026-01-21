import {
  FloatingNav,
  Hero,
  Problem,
  VSComparison,
  HowItWorks,
  Preview,
  Pricing,
  FAQ,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <Hero />
      <Problem />
      <VSComparison />
      <HowItWorks />
      <Preview />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

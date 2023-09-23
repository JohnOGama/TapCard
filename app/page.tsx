import ClientDesign from "@/pages/ClientDesign";
import CompanyDescription from "@/pages/CompanyDescription";
import Hero from "@/pages/Hero";
import ProductCatalog from "@/pages/ProductCatalog";
import ProductStandard from "@/pages/ProductStandard";
import TrustedBrands from "@/components/TrustedBrands";
import Testimonial from "@/pages/Testimonial";
import Blogs from "@/pages/Blogs";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductCatalog />
        <ProductStandard />
        <CompanyDescription />
        <TrustedBrands />
        <ClientDesign />
        <Testimonial />
        <Blogs />
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

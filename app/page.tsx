import ClientDesign from "@/pages/ClientDesign";
import CompanyDescription from "@/pages/CompanyDescription";
import Hero from "@/pages/Hero";
import ProductCatalog from "@/pages/ProductCatalog";
import ProductStandard from "@/pages/ProductStandard";
import TrustedBrands from "@/components/TrustedBrands";

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
      </main>
    </>
  );
}

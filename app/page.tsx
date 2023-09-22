import CompanyDescription from "@/pages/CompanyDescription";
import Hero from "@/pages/Hero";
import ProductCatalog from "@/pages/ProductCatalog";
import ProductStandard from "@/pages/ProductStandard";
import TrustedBrands from "@/pages/TrustedBrands";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductCatalog />
        <ProductStandard />
        <CompanyDescription />
        {/* <TrustedBrands /> */}
      </main>
    </>
  );
}

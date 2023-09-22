import CompanyDescription from "@/pages/CompanyDescription";
import Hero from "@/pages/Hero";
import ProductCatalog from "@/pages/ProductCatalog";
import ProductStandard from "@/pages/ProductStandard";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductCatalog />
        <ProductStandard />
        <CompanyDescription />
      </main>
    </>
  );
}

import Header from "@/components/Header/Header";
import ProductsList from "@/components/ProductsList/ProductsList";
import { fetchProducts } from "@/lib/api";

export default async function Home() {
  const data = await fetchProducts();

  return (
    <>
      <div style={{ flex: 1 }}>
        <Header />
        <main>
          <ProductsList {...data} />
        </main>
      </div>
      <footer>Stopka</footer>
    </>
  );
}

import { Header } from "../components/Header";
import useCartStore from "../store/cartStore";
import "./NotFoundPage.css";

export function NotFoundPage() {
  const { cart } = useCartStore();
  return (
    <>
      <title>404 Not Fount</title>

      <Header cart={cart} />

      <div className="not-found-page">
        <p>Page not found.</p>
      </div>
    </>
  );
}

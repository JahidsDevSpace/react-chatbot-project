import { Header } from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage({cart}) {
  return (
    <>
      <title>404 Not Fount</title>

      <Header cart={cart} />

      <div className='not-found-page'>
        <p>Page not found.</p>
      </div>
    </>
  )
}
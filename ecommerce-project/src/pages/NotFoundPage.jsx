import { Header } from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <>
      <title>404 Not Fount</title>

      <Header />

      <div className='not-found-page'>
        <p>Page not found.</p>
      </div>
    </>
  )
}
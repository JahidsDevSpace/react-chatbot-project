import { LoginForm } from './components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import Card from './ui/Card';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App

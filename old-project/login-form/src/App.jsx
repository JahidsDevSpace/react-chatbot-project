import { LoginForm } from './components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import Card from './ui/Card';
import Sidebar from './components/Sidebar';
import PhotoCard from './ui/PhotoCard';
import SpotifyCard from "./ui/SpotifyCard";
import AnimatedText from "./components/AnimatedText";
import AnimationSequences from "./components/AnimationSequences";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Sidebar />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/card" element={<Card />} />
      <Route path='/pcard' element={<PhotoCard />} />
      <Route path='/spui' element={<SpotifyCard />} />
      <Route path='/animatedtext' element={<AnimatedText />} />
      <Route path='/animationsequences' element={<AnimationSequences />} />
    </Routes>
  );
}

export default App

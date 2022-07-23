import 'react-calendar-heatmap/dist/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Profile } from './pages/Profile';
import GlobalStyles from './styles/GlobalSyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

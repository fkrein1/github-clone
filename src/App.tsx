import 'react-calendar-heatmap/dist/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Profile } from './pages/Profile';
import GlobalStyles from './styles/GlobalSyles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

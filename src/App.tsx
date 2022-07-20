import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { Repo } from './pages/Repo';
import GlobalStyles from './styles/GlobalSyles'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:repo" element={<Repo />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

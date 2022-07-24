import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';
import { Container, GitHubLogo, SearchForm } from './styles';

interface HeaderProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

export function Header(props: HeaderProps) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { themeName, setThemeName } = props;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate(`/${search.toLowerCase().trim()}`);
    setSearch('');
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }
  return (
    <Container>
      <GitHubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Username..."
        />
      </SearchForm>
    </Container>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, GitHubLogo, SearchForm } from './styles';

export function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate(`/${search.toLowerCase().trim()}`);
    setSearch('');
  }

  return (
    <Container>
      <GitHubLogo />
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

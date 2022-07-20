import { Container, GitHubLogo, SearchForm } from './styles';

export function Header() {
  return (
    <Container>
      <GitHubLogo />
      <SearchForm>
        <input placeholder="Enter Username or Repo..." /> 
      </SearchForm>
    </Container>
  );
}

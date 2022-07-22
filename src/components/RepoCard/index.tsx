import {
  Bottomside,
  Container,
  ForkIcon,
  RepoIcon,
  StarIcon,
  Topside,
} from './styles';

interface RepoCardProps {
  key: number;
  repolink: string;
  reponame: string;
  description?: string;
  languague?: string;
  stars: number;
  forks: number;
}

export function RepoCard(props: RepoCardProps) {
  const languageClass = props.languague
    ? props.languague.toLowerCase()
    : 'other';
  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <a href={props.repolink}>{props.reponame}</a>
        </header>
        <p>{props.description}</p>
      </Topside>
      <Bottomside>
        <ul>
          <li>
            <div className={`languague ${languageClass}`}></div>
            <span>{props.languague}</span>
          </li>
          <li>
            <StarIcon />
            <span>{props.stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{props.forks}</span>
          </li>
        </ul>
      </Bottomside>
    </Container>
  );
}

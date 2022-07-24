import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { APIRepo, APIUser } from '../../@types';
import { ProfileData } from '../../components/ProfileData';
import { RandomCalendar } from '../../components/RandomCalendar';
import { RepoCard } from '../../components/RepoCard';
import {
  CalendarHeading,
  Container,
  LeftSide,
  Main,
  RepoIcon,
  Repos,
  RightSide,
  Tab,
} from './styles';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

export function Profile() {
  const { username = 'fkrein1' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    const getUserData = async () => {
      const headers = {
        Authorization: `User fkrein1`,
      };
      const [profileAPI, repoAPI] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, { headers: headers }),
        fetch(`https://api.github.com/users/${username}/repos`, {
          headers: headers,
        }),
      ]);
      if (profileAPI.status === 404 || profileAPI.status === 403) {
        setData({ error: 'User not found!' });
        return;
      }
      const [user, repos] = await Promise.all([
        profileAPI.json(),
        repoAPI.json(),
      ]);
      const shuflledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuflledRepos.slice(0, 6);
      setData({ user, repos: slicedRepos });
    };

    getUserData();
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <></>;
  }

  return (
    <>
      <Container>
        <Main>
          <LeftSide>
            <ProfileData
              name={data.user.name}
              userName={data.user.login}
              avatarURl={data.user.avatar_url}
              followers={data.user.followers}
              following={data.user.following}
              company={data.user.company}
              location={data.user.location}
              email={data.user.email}
              website={data.user.blog}
            />
          </LeftSide>
          <RightSide>
            <Tab className="mobile">
              <div className="content">
                <RepoIcon />
                <span className="label">Repositories</span>
                <span className="number">{data.user.public_repos}</span>
              </div>
              <span className="line" />
            </Tab>
            <Repos>
              <h2>Random Repos</h2>
              <div>
                {data?.repos.map((repo) => (
                  <RepoCard
                    key={repo.id}
                    repolink={repo.html_url}
                    reponame={repo.name}
                    description={repo.description}
                    languague={repo.language}
                    stars={repo.stargazers_count}
                    forks={repo.forks}
                  />
                ))}
              </div>
            </Repos>

            <CalendarHeading>Random calendar</CalendarHeading>

            <RandomCalendar />
          </RightSide>
        </Main>
      </Container>
    </>
  );
}

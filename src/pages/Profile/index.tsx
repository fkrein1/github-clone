import { Header } from '../../components/Header';
import { ProfileData } from '../../components/ProfileData';
import { RandomCalendar } from '../../components/RandomCalendar';
import { RepoCard } from '../../components/RepoCard';
import { Container, LeftSide, Main, RightSide, Repos, CalendarHeading } from './styles';

export function Profile() {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <LeftSide>
            <ProfileData 
              name={'Felipe Krein Rocha'}
              userName={'fkrein1'}
              avatarURl={'https://avatars.githubusercontent.com/u/22371297?v=4'}
              followers={22}
              following={4}
              company={'Pimenta Full'}
              location={'São Paulo, Brazil'}
              email={'felipekrein@gmail.com'}
              website={'https://www.linkedin.com/in/felipe-krein-rocha/'}

            />
          </LeftSide>
          <RightSide>
            <Repos>
              <h2>Random Repos</h2>
              <div>
                {[1,2,3,4,5,6].map(n => (
                  <RepoCard 
                    key={n}
                    repolink={'#'}
                    reponame={'youtube-content'}
                    description={'Contains all of my youtube lessons'}
                    languague={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                    stars={0}
                    forks={4}
                  />
                ))}
              </div>
            </Repos>

            <CalendarHeading>
              Random calendar
            </CalendarHeading>
            
            <RandomCalendar />

          </RightSide>
        </Main>
      </Container>
    </>
  );
}

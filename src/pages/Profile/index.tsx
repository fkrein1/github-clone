import { Header } from '../../components/Header';
import { ProfileData } from '../../components/ProfileData';
import { Container, LeftSide, Main, RightSide } from './styles';

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
          <RightSide></RightSide>
        </Main>
      </Container>
    </>
  );
}

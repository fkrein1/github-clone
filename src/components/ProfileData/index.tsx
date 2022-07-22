import {
  Avatar,
  Column,
  CompanyIcon,
  Container,
  EmailIcon,
  Flex,
  LocationIcon,
  PeopleIcon,
  Row,
  WebsiteIcon,
} from './styles';

interface ProfileDataProps {
  name: string;
  userName: string;
  avatarURl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  website?: string;
}

export function ProfileData(props: ProfileDataProps) {
  return (
    <Container>
      <Flex>
        <Avatar src={props.avatarURl} alt={props.userName} />
        <div>
          <h1>{props.name}</h1>
          <h2>{props.userName}</h2>
        </div>
      </Flex>
      <Row>
        <li>
          <PeopleIcon />
          <b>{props.followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{props.following}</b>
          <span>following</span>
        </li>
      </Row>
      <Column>
        {props.company && (
          <li>
            <CompanyIcon />
            <span>{props.company}</span>
          </li>
        )}
        {props.location && (
          <li>
            <LocationIcon />
            <span>{props.location}</span>
          </li>
        )}
        {props.email && (
          <li>
            <EmailIcon />
            <span>{props.email}</span>
          </li>
        )}
        {props.website && (
          <li>
            <WebsiteIcon />
            <span>{props.website}</span>
          </li>
        )}
      </Column>
    </Container>
  );
}

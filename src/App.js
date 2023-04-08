import "./styles.css";
import styled from "styled-components";
import coverImage from "./card-image.png";
import avatarImage from "./avatar.jpeg";
import backgroundImage from "./card-background.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2d2d2d;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px;
  padding: 0px;
`;

const Card = styled.div`
  padding: 20px;
  gap: 20px;
  width: 360px;
  height: 575px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.1), 0px 30px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 10px;
`;

const Subtitle = styled.h4`
  font-style: normal;
  font-weight: 510;
  font-size: 15px;
  line-height: 18px;
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.8);
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: 590;
  font-size: 17px;
  line-height: 20px;
  margin: 10px 0;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  position: relative;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-style: normal;
  font-weight: 510;
  font-size: 13px;
  line-height: 16px;

  color: rgba(255, 255, 255, 0.8);
`;

function App() {
  return (
    <Wrapper>
      <Card>
        <CoverImage src={coverImage} alt="Cover" />
        <CardContent>
          <Title>Card Title</Title>
          <Divider />
          <Subtitle>Card Subtitle</Subtitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            imperdiet mauris.
          </Text>
          <Author>
            <Avatar src={avatarImage} alt="Brenda SC" />
            <AuthorName>Brenda SC</AuthorName>
          </Author>
        </CardContent>
      </Card>
    </Wrapper>
  );
}

export default App;

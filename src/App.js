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
  padding: 20px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  margin: 12px 0;
`;

const Subtitle = styled.h4`
  font-style: normal;
  font-weight: 510;
  font-size: 15px;
  line-height: 18px;
  margin: 0 0 8px;
  color: rgba(255, 255, 255, 0.8);
`;

const CoverImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
`;

const CardContent = styled.div`
  padding-top: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-style: normal;
  font-weight: 590;
  font-size: 24px;
  line-height: 20px;
  color: #ffffff;
`;

const Text = styled.p`
  margin: 0 0 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
`;

const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 320px;
  height: 24px;

  /* Inside auto layout */

  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 510;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.8);
`;

function App() {
  return (
    <Wrapper>
      <Card>
        <CoverImage src={coverImage} alt="Cover" />
        <CardContent>
          <Title>Build beautiful apps with GPT4 and Midjourney</Title>
          <Divider />
          <Subtitle>40 sections - 5 hours</Subtitle>
          <Text>
            Hands-on course teaching about all the techniques for turning a
            Midjourney inspiration into a real working design with interactions
            in Figma.
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

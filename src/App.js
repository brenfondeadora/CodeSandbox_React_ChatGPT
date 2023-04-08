import "./styles.css";
import styled from "styled-components";
import coverImage from "./card-image.png";
import avatarImage from "./avatar.jpeg";
import backgroundImage from "./card-background.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e; /* Dark background color */
  color: #f5f5f5; /* Light text color */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  border-top: 1px solid #444; /* Update divider color for dark mode */
  margin: 10px 0;
`;

const Subtitle = styled.h3`
  margin: 0;
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 510;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.8);
`;

const CoverImage = styled.img`
  width: 100%;
  height: 320px;
  border-radius: 10px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 590;
  font-size: 17px;
  line-height: 20px;

  color: #ffffff;
`;

const Text = styled.p`
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  /* or 185% */

  color: rgba(255, 255, 255, 0.7);
`;

const Author = styled.div`
  display: flex;
  font-family: "SF Pro";
  font-style: normal;
  font-weight: 510;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  color: rgba(255, 255, 255, 0.8);
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-size: 14px;
  font-weight: bold;
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

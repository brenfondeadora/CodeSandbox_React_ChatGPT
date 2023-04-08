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
  background-color: #1e1e1e; /* Dark background color */
  color: #f5f5f5; /* Light text color */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Card = styled.div`
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background-color: #2e2e2e; /* Darker background color for the card */
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #444; /* Update divider color for dark mode */
  margin: 10px 0;
`;

const Subtitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #999; /* Update subtitle color for dark mode */
`;

const CoverImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Text = styled.p`
  font-size: 14px;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
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

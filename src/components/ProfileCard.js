
import {
  StyledProfileCard,
  NameImage,
  ElementStyle
} from "./styled/ProfileCard.styled";

export const ProfileCard = () => {
  return (
    <StyledProfileCard>
      <NameImage>
        <img src="./images/user-solid.svg" alt="user photo" />
        <h2>Rahul Gupta</h2>
        <p>rahul@gmail.com</p>
      </NameImage>
      <ElementStyle>
        <h4>About:</h4>
        <p>
          this is the profile of Rahul Gupta. He is an aspriring developer and
          is currently learning React and Node
        </p>
      </ElementStyle>
      <ElementStyle>
        <h4>Skills:</h4>
        <p>HTML,CSS,JS,REACT,Node,Express,NextJs</p>
      </ElementStyle>
      <ElementStyle>
      <h4>Number of mock tests given:</h4>
      <p>2</p>
      </ElementStyle>
      <ElementStyle>
      <h4>Number of Quizzes given:</h4>
      <p>5</p>
      </ElementStyle>
      <h3>Bank Details</h3>
      <ElementStyle>
        <h4>Account No:</h4>
        <p>XXXXXX1234</p>
      </ElementStyle>
      <ElementStyle>
        <h4>IFSC:</h4>
        <p>HDFC123456</p>
      </ElementStyle>
    </StyledProfileCard>
  );
};

//IMPORTS
import styled from "styled-components";
import { Mobile } from "../responsive";
//CSS
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${Mobile({ height: "80vh" })}
`;
const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
`;
//COMPONENT
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </InfoContainer>
    </Container>
  );
};
//EXPORT
export default CategoryItem;

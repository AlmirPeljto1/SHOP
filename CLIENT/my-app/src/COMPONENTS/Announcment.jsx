//IMPORT
import styled from "styled-components";
//CSS
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
//COMPONENT
const Announcment = () => {
  return <Container>Super Deal Free Shipping!!!!!</Container>;
};
//EXPORT
export default Announcment;

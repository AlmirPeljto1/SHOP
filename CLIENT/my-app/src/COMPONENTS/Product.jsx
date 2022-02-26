//IMPORTS
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
//CSS
const Info = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #f0f0f0;
  position: relative;
  border-radius: 15px;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 40%;
  background-color: #fff5f5;

  position: absolute;
`;
const Image = styled.img`
  height: 60%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 3;
  background-color: white;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
//COMPONENT
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <Link to={`/product/${item._id}`} className="link">
            <SearchOutlinedIcon />
          </Link>
        </Icon>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};
//EXPORT
export default Product;

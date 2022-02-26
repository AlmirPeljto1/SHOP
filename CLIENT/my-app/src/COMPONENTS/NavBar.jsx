//IMPORTS
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/apiCalls";
//CSS
const Container = styled.div`
  height: 60px;
  background-color: #f7f7f7;
  ${Mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${Mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${Mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;
const Input = styled.input`
  border: none;
  ${Mobile({ width: "40px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${Mobile({ fontSize: "28px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Mobile({ flex: "2", justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${Mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
//COMPONENT
const NavBar = () => {
  //REDUX-COLLECTIONG DATA VIA SELECTOR
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  //REDUX-DISPATCH
  const dispatch = useDispatch();
  //HANDLERS
  const handleClick = () => {
    logOut(dispatch);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" className="link">
            <Logo>BestBuy</Logo>
          </Link>
        </Center>
        <Right>
          {user ? (
            <>
              <MenuItem onClick={handleClick}>Logout</MenuItem>
              <Link to="/cart" className="link">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" className="link">
                <MenuItem>Register</MenuItem>
              </Link>
              <Link to="/login" className="link">
                <MenuItem>Sign In</MenuItem>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};
//EXPORT
export default NavBar;

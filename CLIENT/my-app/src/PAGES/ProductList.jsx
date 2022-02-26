//IMPORTS
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcment from "../COMPONENTS/Announcment";
import Footer from "../COMPONENTS/Footer";
import NavBar from "../COMPONENTS/NavBar";
import Newsletter from "../COMPONENTS/Newsletter";
import Products from "../COMPONENTS/Products";
import { Mobile } from "../responsive";
//CSS
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${Mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  ${Mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 5px;
  margin-right: 10px;
  ${Mobile({ margin: "5px 0px" })}
`;
const Option = styled.option``;
//PAGE PRODUCT LIST
const ProductList = () => {
  //LOCATION FOR CATEGORY
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  //STATES
  const [filters, setFilters] = useState({});
  const [sorts, setSorts] = useState("newest");
  //HANDLERS
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };
  return (
    <Container>
      <Announcment />
      <NavBar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>yellow</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSorts(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asct">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sorts={sorts} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
//EXPORT
export default ProductList;

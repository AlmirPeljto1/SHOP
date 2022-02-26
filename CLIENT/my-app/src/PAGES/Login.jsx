//IMPORTS
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/apiCalls";
import { Mobile } from "../responsive";
//CSS
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://www.armani.com/content/images/cms/ycm/resource/blob/519734/f19d88f8ff79332360167f35f53c82ee/ea-hp-gen22-data.jpg/w1920.jpg")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${Mobile({ width: "65%" })}
`;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 5px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 900;
  margin-bottom: 10px;

  &:hover {
    background-color: #b8b8b8;
  }
  &:disabled {
    color: #b8b8b8;
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  color: red;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
//PAGE LOGIN
const Login = () => {
  //STATES
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //REDUX DISPATCH
  const dispatch = useDispatch();
  //COLLECTING REDUX DATA
  const { isFetching, error } = useSelector((state) => state.user);
  //HANDLERS
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Have you forgot the password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
//EXPORT
export default Login;

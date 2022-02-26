//EXPORT
import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
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
  width: 40%;
  background-color: white;
  ${Mobile({ width: "75%" })}
`;
const Title = styled.h1``;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 5px;
`;
const Error = styled.span`
  color: red;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  font-weight: 900;

  &:hover {
    background-color: #b8b8b8;
  }
`;
//PAGE REGISTER
const Register = () => {
  //STATES
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  //HANDLERS
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      try {
        const res = await publicRequest.post("/auth/register", {
          username,
          email,
          password,
        });
        res.data && window.location.replace("/login");
      } catch (err) {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <Error>passwords doesnt match...</Error>}
          <Agreement>
            By creating an account, i consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
//EXPORT
export default Register;

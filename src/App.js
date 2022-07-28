import "./styles.css";
import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

export default function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato" />
      <Btn>Log in</Btn>
    </Father>
  );
}

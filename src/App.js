import "./styles.css";
import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

// Animations
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(180deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius:0px;
  }
`;
// Pseudo
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
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
      <Box>
        <Emoji>😊</Emoji>
      </Box>
      <Circle bgColor="tomato" />
      <Btn>Log in</Btn>
    </Father>
  );
}

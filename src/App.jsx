import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: var(--color-brand-200);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>The Wild Oasis</H1>
      <Button>checkout</Button>
      <Input placeholder="Number of guests" />
    </>
  );
}

export default App;

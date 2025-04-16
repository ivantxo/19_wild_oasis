import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aliceblue;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Wild Oasis</H1>
        <Button>Check In</Button>
        <Button>Check Out</Button>

        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;

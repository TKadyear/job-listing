import logo from './logo.svg';
import styled from 'styled-components';


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
  `;
const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  background: palevioletred;
`;
function App() {
  return (
    <Wrapper>
      <Title>This is Style Components</Title>
    </Wrapper>
  );
}

export default App;

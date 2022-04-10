import styled from 'styled-components';


const Title = styled.h1`
    font-size: 1.5em;
    font-family: 'Spartan';
    text-align: center;
    color: white;
  `;
const ContainerMain = styled.div`
  margin: 0 auto;
  background: var(--primary);
`;
function App() {
  return (
    <ContainerMain>
      <Title>This is Style Components</Title>
    </ContainerMain>
  );
}

export default App;

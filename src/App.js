import styled from 'styled-components';
import { device } from './device'

const Title = styled.h1`
    font-size: 1.5em;
    font-family: 'Spartan';
    text-align: center;
    color: white;
  `;
const ContainerMain = styled.div`
  height: 100vh;
  background: var(--bg-primary);
`;
const BackgroundMain = styled.div`
    height: 156px;
    background: url(/public/images/bg-header-mobile.svg) var(--primary);
  @media ${device.tablet} {
    height: 100vh;
    background: url(/public/images/bg-header-desktop.svg) var(--primary);
  }
`;
function App() {
  return (
    <ContainerMain>
      <BackgroundMain />
      <Title>This is Style Components</Title>
    </ContainerMain>
  );
}

export default App;

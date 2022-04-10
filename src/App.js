import styled from 'styled-components';
import { device } from './device'
import { CardsContainer } from './components/CardsContainer'
const ContainerMain = styled.div`
  height: 100vh;
  background: var(--bg-primary);
`;
const BackgroundMain = styled.div`
    height: 156px;
    background: url(./images/bg-header-mobile.svg) var(--primary);
  @media ${device.tablet} {
    background: url(./images/bg-header-desktop.svg) var(--primary);
  }
`;
function App() {
  return (
    <ContainerMain>
      <BackgroundMain>
      </BackgroundMain>
      <CardsContainer></CardsContainer>
    </ContainerMain>
  );
}

export default App;

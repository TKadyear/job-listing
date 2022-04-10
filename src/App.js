import styled from 'styled-components';
import { device } from './device'
import { CardsContainer } from './components/CardsContainer'
const ContainerMain = styled.main`
  display: flex;
  box-sizing: content-box;
  padding: 3.5rem 0;
  flex-direction: column;
  align-items: center;
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
    <>
      <BackgroundMain>
      </BackgroundMain>
      <ContainerMain>
        <CardsContainer></CardsContainer>
      </ContainerMain>
    </>
  );
}

export default App;

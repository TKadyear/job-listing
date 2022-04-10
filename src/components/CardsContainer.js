import styled from 'styled-components';
import { device } from "../device";
import { CardTemplate } from "./CardTemplate";
const Container = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CardsContainer = () => {

  return (
    <Container>
      <CardTemplate></CardTemplate>
      <CardTemplate></CardTemplate>
    </Container>
  )
}

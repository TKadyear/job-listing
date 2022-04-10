import styled from 'styled-components';
import { device } from "../device";

const ContainerCard = styled.div`
  background: var(--bg-cards);
  width: 100%;
  height: 100px;
  border-radius: 0.25rem;
  box-shadow: 0 6px 16px var(--shadow-primary);
`;

export const CardTemplate = () => {

  return <ContainerCard ></ContainerCard>;
}

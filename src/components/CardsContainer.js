import styled from 'styled-components';
import { device } from "../device";
import { CardTemplate } from "./CardTemplate";
const Container = styled.div`
  width: 90%;
  margin: 3.5rem auto;
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
`;

export const CardsContainer = () => {
  const data = {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  }

  return (
    <Container>
      <CardTemplate data={data} />
      <CardTemplate data={data} />
    </Container>
  )
}

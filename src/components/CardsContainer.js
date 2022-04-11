import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardTemplate } from "./CardTemplate";
const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
`;

export const CardsContainer = () => {
  const [listData, setListData] = useState([])
  useEffect(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(data => setListData(data));
  }, [])
  return (
    <Container>
      {listData.map(job =>
        <CardTemplate key={job.id} data={job} />
      )}
    </Container>
  )
}

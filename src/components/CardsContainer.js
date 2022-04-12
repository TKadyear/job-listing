import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardTemplate } from "./CardTemplate";
import { device } from '../device';
const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2.625rem;
  @media ${device.desktop}{
    width:75%;
  }
`;
const FilterTags = styled.div`
  padding: 1.5rem 2.75rem;
  border-radius: 8px;
  background-color: var(--bg-cards);
  box-shadow: 0 6px 16px var(--shadow-primary);
  display: flex;
  flex-flow: row wrap;
  gap: 1.25rem;
`;
const DevTag = styled.p`
  display: inline;
  background-color: var(--bg-primary);
  padding: 4px 8px;
  margin: 0;
  border-radius: 4px;
  color: var(--primary);
  font-weight: bold;
  font-size: 14px;
  transition: 250ms;
  cursor: pointer;
  :hover{
    color: var(--bg-primary);
    background-color: var(--primary);
  }
  @media ${device.tablet}{
    padding:10px 8px;
  }
`
export const CardsContainer = () => {
  const [listData, setListData] = useState([])
  const [listFilter, setListFilter] = useState([])
  useEffect(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(data => setListData(data));
  }, [])
  const Cards = () => {
    let allCards = []
    /*  TODO
    * Realmente necesito hacer un set de los datos para que se vuelva a iniciar todo el cambio,
    * es decir necesito un context y poder cambiar seteando los datos.
    * Como que se haga un filter de listData y ya
    */
    // allCards = listData.map(job =>
    //   <CardTemplate key={job.id} data={job} onClick={handleClick} />
    // )
    if (listFilter.length > 0) {
      const newList = [...listData].filter(job => {
        let valuesObject = Object.values(job);
        console.table(job)
        console.log(valuesObject)
      })
    }
    return allCards;
  }

  const handleClick = (e) => {
    const value = e.target.textContent;
    setListFilter(prev => prev.includes(value) ? [...prev] : [...prev, value]);
    Cards();
  }
  const Tags = () => listFilter.map((item, index) => <DevTag key={index}>{item}</DevTag>)
  return (
    <Container>
      {listFilter.length > 0 && <FilterTags>{Tags()}</FilterTags>}
      {listData.map(job =>
        <CardTemplate key={job.id} data={job} onClick={handleClick} />
      )}

    </Container>
  )
}

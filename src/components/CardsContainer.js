import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardTemplate } from "./CardTemplate";
import { device } from '../device';
import { requestJob } from '../service/requestJobs.js'
import { isTheJobMatchFilter } from '../test/filter-bar'
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
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
`;
const ContainerFilterTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1.25rem;
`
const DevTag = styled.span`
  display: inline;
  background-color: var(--bg-primary);
  padding-left: 8px;
  margin: 0;
  border-radius: 4px;
  color: var(--primary);
  font-weight: bold;
  font-size: 14px;
  transition: 250ms;
  display:flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  :hover{
    color: var(--bg-primary);
    background-color: var(--primary);
  }
`
const Clear = styled.button`
  cursor: pointer;
  border:0;
  background: inherit;
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  text-decoration: underline;
`
const ButtonRemove = styled.button`
  cursor: pointer;
  height: 37px;
  width: 37px;
  border:0;
  border-radius: 0 4px 4px 0;
  background: url("/images/icon-remove.svg") var(--primary) no-repeat;
  background-position: center;
  :hover{
    background-color:var(--darker-bg);
  }
`
export const CardsContainer = () => {
  const [listData, setListData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [listFilter, setListFilter] = useState([]);
  useEffect(() => {
    requestJob()
      .then(data => {
        setListData(data);
        setDisplayData(data);
      })
  }, [])
  useEffect(() => {
    if (listFilter.length > 0) {
      const listFiltered = [...listData].filter(job => {
        if (isTheJobMatchFilter(job, listFilter)) {
          return job;
        }
      })
      setDisplayData([...listFiltered])
    } else {
      setDisplayData([...listData]);
    }
  }, [listFilter])
  const handleClick = (e) => {
    const value = e.target.textContent;
    setListFilter(prev => {
      return !prev.includes(value) && (value.constructor === String)
        ? [...prev, value]
        : [...prev];
    })
  }
  const removeFilter = (removeFilter) => setListFilter(prev => [...prev].filter((filter) => filter != removeFilter))
  const Tags = () => listFilter.map((item, index) =>
    <DevTag key={index}>
      {item}
      <ButtonRemove onClick={() => removeFilter(item)} />
    </DevTag>
  )
  return (
    <Container>
      {(listFilter.length > 0) &&
        <FilterTags>
          <ContainerFilterTags>
            {Tags()}
          </ContainerFilterTags>
          <Clear onClick={() => setListFilter([])}>Clear</Clear>
        </FilterTags>}
      {displayData.map(job =>
        <CardTemplate key={job.id} data={job} onClick={handleClick} />
      )}
    </Container>
  )
}

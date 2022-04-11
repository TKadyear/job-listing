import styled from 'styled-components';
import { device } from "../device";

const ContainerCard = styled.div`
  background: var(--bg-cards);
  padding: 2rem 2.75rem;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 6px 16px var(--shadow-primary);
  @media ${device.tablet}{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`;
const HighlightBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary);
  width: 0.325rem;
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`
const TitleCompany = styled.p`
  display: inline;
  margin-right:1rem ;
  color: var(--primary);
  font-weight: bold;
`
const ImageCompany = styled.img`
  position: absolute;
  width: 3rem;
  top: -1.5rem;
  left: 1.5rem;
  @media ${device.tablet}{
    position: static;
    width:5.5rem;
  }
`
const ContainerTags = styled.div`
  display: inline;
  height: max-content;

`
// IMPROVE the way to pass props in these tags
const Tag = styled.span`
  display: inline;
  background-color: ${props => props.new ? 'var(--primary)' : 'var(--darker-bg)'} ;
  padding: 4px 8px;
  margin: 0 0.25rem;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 12px;
`
const ContainerJob = styled.div`
  @media ${device.tablet}{
  justify-self: left;
  }
`
const JobPosition = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  :hover{
    color: var(--primary);
  }
`
const DetailsJob = styled.span`
  color: var(--dark-bg);
`
const Divider = styled.hr`
  border: 0;
  height: 0.75px;
  background: var(--dark-bg);
  margin: 1rem auto;
  @media ${device.tablet}{
    display:none;
  }
`
const ContainerRequirements = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`
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
export const CardTemplate = (props) => {
  const job = props.data;
  const Requirements = () => {
    const listRequired = [job.role, job.level, ...job.languages, ...job.tools]
    return listRequired.map(language =>
      <DevTag onClick={props.onClick} key={job.company + language}>{language}</DevTag>
    )
  }
  const detail = `${job.postedAt} · ${job.contract} · ${job.location}`
  return (
    <ContainerCard>
      {job.new && job.featured && <HighlightBar />}
      <ImageCompany src={job.logo} />
      <ContainerJob>

        <TitleCompany>{job.company}</TitleCompany>
        <ContainerTags>
          {job.new && <Tag new={job.new}>NEW!</Tag>}
          {job.featured && <Tag new={false}>FEATURED</Tag>}
        </ContainerTags>
        <JobPosition>{job.position}</JobPosition>
        <DetailsJob>{detail}</DetailsJob>
      </ContainerJob>
      <Divider />
      <ContainerRequirements>{Requirements()}</ContainerRequirements>

    </ContainerCard >
  );
}

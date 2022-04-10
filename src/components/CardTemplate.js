import styled from 'styled-components';
import { device } from "../device";

const ContainerCard = styled.div`
  background: var(--bg-cards);
  padding: 2rem 1rem;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 6px 16px var(--shadow-primary);
`;
const TitleCompany = styled.p`
  display: inline;
  margin-right:1rem ;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--primary);
  font-weight: bold;
`
const ImageCompany = styled.img`
  position: absolute;
  width: 3rem;
  top: -1.5rem;
  left: 1.5rem;
`
const ContainerTags = styled.div`
  display: inline;
  height: max-content;

`
// IMPROVE the way to pass props in these tags
const Tag = styled.span`
  display: inline;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${props => props.new ? 'var(--primary)' : 'var(--darker-bg)'} ;
  padding: 4px 8px;
  margin: 0 0.25rem;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 12px;
`
const JobPosition = styled.p`
  font-size: 1rem;
  font-weight: bold;
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

const DevTag = styled.p`
  display: inline;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-primary);
  padding: 4px 8px;
  margin: 0 0.5rem;
  border-radius: 4px;
  color: var(--primary);
  font-weight: bold;
  font-size: 14px;
`
export const CardTemplate = (props) => {
  const job = props.data;
  const LanguagesRequired = () => job.languages.map(language =>
    <DevTag key={job.company + language}>{language}</DevTag>
  )
  const detail = `${job.postedAt} · ${job.contract} · ${job.location}`
  return (
    <ContainerCard>
      <ImageCompany src={job.logo} />
      <TitleCompany>{job.company}</TitleCompany>
      <ContainerTags>
        {job.new && <Tag new={job.new}>NEW!</Tag>}
        {job.featured && <Tag new={false}>FEATURED</Tag>}
      </ContainerTags>
      <JobPosition>{job.position}</JobPosition>
      <DetailsJob>{detail}</DetailsJob>
      <Divider />
      {LanguagesRequired()}

    </ContainerCard >
  );
}

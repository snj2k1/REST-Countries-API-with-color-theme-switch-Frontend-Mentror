import styled from 'styled-components';
import { useBorders } from './use-borders';

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

export const Borders = ({borders, push}) => {
  const [currentBorders] = useBorders(borders);

  return(
    <>
      <b>Border Countries</b>
          {!currentBorders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {currentBorders.map((b) => (
                <Tag key={b.name} onClick={() => push(`/country/${b.name}`)}>
                  {b.name}
                </Tag>
              ))}
            </TagGroup>
          )}
    </>
  )
}
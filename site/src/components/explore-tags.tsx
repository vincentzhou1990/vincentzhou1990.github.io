import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import UnderlineH2 from './underline-h2';
import PostTags from './post/post-tags';

const Wrapper = styled.div`
  position: relative;
  padding: var(--spacing-24) 0;
  max-width: 900px;

  .tags-container {
    padding: var(--spacing-4) 0 var(--spacing-3);
  }
`;

const ExploreTags = () => {
  const { allTag } = useStaticQuery(
    graphql`
      query {
        allTag {
          nodes {
            name
            id
          }
        }
      }
    `
  );

  const tags = allTag.nodes.map(item => item.name);

  return (
    <Wrapper>
      <UnderlineH2>Explore Tags</UnderlineH2>
      <PostTags className="tags-container" tags={tags} />
    </Wrapper>
  );
};

export default ExploreTags;
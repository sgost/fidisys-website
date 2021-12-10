import styled from 'styled-components';
import * as palette from '../../styles/variables';

export const BlogPageSection = styled.div`
  background: ${palette.WHITE_COLOR};
`;

export const BlogContainer = styled.div`
#BlogContainer {
  max-width: 700px;
  margin: 0 auto;
  padding: 48px 0px;
  @media (max-width: 768px) {
    padding: 24px;
  }
}
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
  .author_image {
    margin-right: 22px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    @media (max-width: 500px) {
      width: 64px;
      height: 64px;
    }
  }
  .author_info {
    display: flex;
    flex-direction: column;
    h4 {
      line-height: 22px;
      color: ${palette.BLACK_COLOR};
      margin: 0 0 10px 0;
    }
    span {
      font-size: 14px;
      color: #78757a;
      line-height: 18px;
    }
    #link {
      font-size: 14px;
      color: black;
    }
    #link:hover {
      color: blue;
    }
    #link .icon{
      font-size: 11px;
      color: black;
      margin: 0 0 0 5px;
    }
    #link:hover .icon {
      color: blue;
    }
  }
`;

export const BlogContent = styled.div`
  color: ${palette.BLACK_COLOR};
  .blogTitle {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 32px;
    color: ${palette.BLACK_COLOR};
    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 36px;
    }
  }
  h1 {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 10px;
    color: ${palette.BLACK_COLOR};
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  h3 {
    margin-bottom: 24px;
    color: ${palette.BLACK_COLOR};
  }
  h6 {
    margin-bottom: 24px;
    color: ${palette.BLACK_COLOR};
    border-left: 3px solid ${palette.BLACK_COLOR};
    padding: 0 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    opacity: 0.85;
    line-height: 1.36;
  }
  .gatsby-resp-image-wrapper {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 24px;
    font-size: 18px;
    color: ${palette.BLACK_COLOR};
  }
  ul {
    list-style: inside;
    margin-bottom: 24px;
  }
  li {
    font-weight: normal;
    font-size: 16px;
    color: ${palette.BLACK_COLOR};
    margin: 15px 0px;
  }
  pre {
    background: #000000b8;
    color: white;
    font-size: 14px;
    margin: 0 0 24px 0;
    padding: 10px 10px 10px 15px;
    border-radius: 10px;
  }
  blockquote {
    padding-left: 23px;
    box-shadow: rgb(41, 41, 41) 3px 0px 0px 0px inset;
  }
  a {
    font-weight: normal;
    color: ${palette.BLACK_COLOR};
    text-decoration: underline;
  }
`;

export const TagsList = styled.div`
  margin-top: 50px;
  font-size: 14px;
  color: ${palette.BLACK_COLOR};
  font-weight: 500;
  padding: 48px 0px;
  border-top: 1px solid #f0f0f2;
  span:first-child {
    margin-left: 5px;
  }
`;
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
.blogTitle {
  font-size: 36px;
  line-height: 48px;
  margin-bottom: 32px;
  color: ${palette.BLACK_COLOR};
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 29px;
  }
}
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
  .author_image {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    overflow: hidden;
    @media (max-width: 600px){
      width: 80px;
      height: 80px;
    }
  }
  .author_info {
    display: flex;
    width: 90%;
    align-items: center;
    @media (max-width: 600px){
    width: fit-content;
    flex-direction: column;
    }
    h4 {
      line-height: 22px;
      color: ${palette.BLACK_COLOR};
      margin: 0 10px 0 0;
      font-size: 15px;
      cursor: pointer;
      @media (max-width: 600px){
          line-height: auto;
          margin: 0 1.2vw 0 0;
          font-size: 19px;
          margin: 0 auto 0 0 ;
      }
    }
    span {
      font-size: 14px;
      color: #78757a;
      line-height: 18px;
      margin: 0 20px 0 0;
      @media (max-width: 600px) {
        font-size: 10px;
        color: #78757a;
        line-height: auto;
        margin: 0 1vw 0 0;
    }
    }
    #socio_lnks {
      display: flex;
      margin: 0 0 0 auto;
      @media (max-width: 600px) {
        margin: 8px auto 0 0;
      }
    }
    #link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      border-radius: 50px;
      padding: 4px;
      margin: 0 0 0 15px;
      background: #000000bf;
      @media (max-width: 600px) {
        width: 5vw;
        height: 5vw;
        border-radius: 50vw;
        padding: 1vw;
        margin: 0 0 0 3vw;
        #link:nth-child(1) {
          margin: 0;
        }
    }
    }
    #link:nth-child(1) {
      @media (max-width: 600px) {
          margin: 0;
    }
    }
    #link .icon{
      width: 100%;
      height: 100%;
    }
  }
  #pc_mob {
    display: none;
  }
  @media (max-width: 600px) {
    #pc_mob {
      display: flex;
    }
    #pc_author {
      display: none;
    }
  }
`;

export const BlogContent = styled.div`
  color: ${palette.BLACK_COLOR};
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
    line-height: inherit;
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

export const Pop = styled.div`
#data {
  display: flex;
  align-items: center;
}
img {
  width: 35px;
  height: 35px;
  border-radius: 10vw;
}
h1{
  line-height: 22px;
  color: black;
  margin: 0 10px 0 10px;
  font-size: 15px;
  font-weight: 500;
}
p{
  font-size: 12px;
  color: #78757a;
  line-height: 18px;
  margin: 10px auto 0 0;
}
`
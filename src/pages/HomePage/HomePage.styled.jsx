import styled from 'styled-components';
import background from '../../img/pngwing2.png';

export const Container = styled.div`
  /* min-height: calc(40vh - 50px); */
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: '';
    background-image: url(${background});
    /* background-size: cover; */
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 15%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: -5;
    opacity: 0.5;
  }
`;
export const Title = styled.h1`
  font-weight: 500px;
  font-size: 48px;
  text-align: center;
`;

import styled from 'styled-components';


export const ContainerBox = styled.div`
  width: 600px;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: ${props => props.theme.spacing(15)};
  background: #00c9ff;
  background: -webkit-linear-gradient(to left, #92fe9d, #00c9ff);
  background: linear-gradient(to left, #92fe9d, #00c9ff);
  padding: ${props => props.theme.spacing(8)};
  margin: 15px auto;
  
`;
// export const Container = styled.div`
//   display:block;
//   height: 100vh;
//   margin: 15px auto;
//   padding: 0 16px;

//   &:before {
//     content: '';
//     background-image: url(${background});
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: -10;
//     opacity: 0.3;
  
//   }
// `;
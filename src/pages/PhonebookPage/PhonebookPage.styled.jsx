import styled from 'styled-components';
import background from '../../img/diary-clip.png'
// import background from '../../img/zvezdnoe-nebo.jpg';

export const ContainerPhonebook = styled.div`
  width: 900px;
 
  display: flex;
  flex-direction:column;
  justify-items: center;
  align-items: center;
  gap: ${props => props.theme.spacing(17)};
  background: #00c9ff;
  background: -webkit-linear-gradient(to left, #92fe9d, #00c9ff);
  background: linear-gradient(to left, #92fe9d, #00c9ff);
  padding: ${props => props.theme.spacing(8)};
  margin: 15px auto;
    opacity: 0.8;
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  
`;
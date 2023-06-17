import styled from 'styled-components';
import background from '../../img/diary-clip.png'
// import background from '../../img/zvezdnoe-nebo.jpg';

export const ContainerBox = styled.div`
  width: 900px;
  height: 600px;
  display: flex;
  flex-direction:column;
  justify-items: center;
  align-items: center;
  gap: ${props => props.theme.spacing(17)};

  padding: ${props => props.theme.spacing(8)};
  margin: 15px auto;

  background-image: url(${background});
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  
`;


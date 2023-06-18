import styled from "styled-components";
import background from '../../img/diary-clip.png'

export const WrapperForm = styled.div`
width: 900px;
height: 600px;
  display:flex;
  flex-direction: column;
  gap:45px;
  align-items: start;
  padding-left:80px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  
`
export const Title = styled.h2`
  margin-top:70px;
  font-size: 28px;
  font-weight: bold;
 margin-left: calc(50%/7);
 text-decoration: none;
 color: #e6880ed2;
`
 


export const Form= styled.form`
display:flex;
flex-direction:column;
width: 330px;
`
export const Label= styled.label`
display:flex;
font-weight: 700px;
flex-direction:column;  
color:  #7fae07;
`
export const ButtonReg= styled.button`
width: 200px;
height: 40px;
margin-top: 24px;
align-self:center;
border-radius:10px;
font-weight: 600;
background-color:  #8ab91b;

`

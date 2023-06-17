import styled from "styled-components";
import background from '../../img/diary-clip.png'
export const WrapperForm = styled.div`
width: 900px;
height: 600px;
  display:flex;
  flex-direction: column;
  gap:48px;
  align-items: start;
  padding-left:80px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Title= styled.h1`
  margin-top:70px;
  font-size: 28px;
`




export const Form= styled.form`
display:flex;
flex-direction:column;
gap: 4px;
width: 330px;
`
export const Label= styled.label`
   display:flex;
   flex-direction:column;
   margin-bottom: 10px;
   & > input{
    height: 40px;
    background:transparent;
    outline:none;
    border:none;
    /* border-top:4px solid #8a8585; */
    border-bottom:3 solid #8a8585; 

  }
 `
export const ButtonReg= styled.button`
width: 200px;
height: 40px;
margin-top: 20px;
align-self:center;
border-radius:5px;

  background-color:  rgb(141 212 220);
`

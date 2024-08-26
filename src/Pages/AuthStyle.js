import styled from "styled-components"
export const PassInfo = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    color: rgba(224, 215, 215, 0.968);
  }
 `
export const InputPasswordDiv = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    border: 1px solid gray;
    background-color: rgba(128, 128, 128, 0.375);
    color: white;
    outline: none;
    border-radius: 2px;
    align-items: center;
    gap: 10px;
 `
export const FormText = styled.div`
  color: black;
  font-weight:500;
  cursor: pointer;
  transition: all 350ms ease-in;
  display: flex;
  justify-content: flex-end;
  gap: 2px;

  &:hover{
    text-decoration: ${({hv})=> (hv ? "underline" : "none")};
  }
  

  span {
    color:green;
    font-weight:700;
    
    &:hover{
    text-decoration: underline;
  }
  }
 `

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background:green;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  transition: all 350ms ease-in;
  gap: 10px;

  &:hover{
    background:rgba(0, 128, 0, 0.600);
    /* transform:scale(1.09999); */
  }
`
export const Input = styled.input`
  width: ${({wd})=> (wd ? "100%" : "80%")};
  height: ${({hg})=> (hg ? "40px" : "40px")};
    max-height: ${({hg})=> (hg ? "40px" : "70%")};
  background-color: ${({bg})=> (bg ? "rgba(128, 128, 128, 0.375)" : "transparent")};
 border: ${({bd})=> (bd ? "1px solid gray" : "none")};  
 color: white;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
 `
export const TextHeader = styled.div`
  width: 100%;
  height: 10%;
  display:flex;
  justify-content:center;
  margin-bottom: 10px;

  h3 {
    font-size: 30px;
    color: black;
    align-self:center;
    font-weight: 500;
  }
 `
export const SignUpFrom = styled.form`
  width: 100%;
  height: 100%;
  background:white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 15px;
  

  @media (max-width:320px) {
        width:100%;
    }
 `
export const Wrapper = styled.div`
  width: 25%;
  height: 60%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  /* background:red; */
  @media (max-width:768px) {
        width:66%;
    }

  @media (max-width:360px) {
        width:70%;
    }
`
export const MainBody = styled.div`
height:100vh;
width:100vw;
background:rgba(0, 128, 0, 0.800);
display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`
export const Select = styled.select`
height:40px;
width:100%;
// background:rgba(0, 128, 0, 0.800);
display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`
  


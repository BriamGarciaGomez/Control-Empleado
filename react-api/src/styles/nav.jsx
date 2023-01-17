import styled from "styled-components";

export const ConteinerA = styled.div`
  position: absolute;
  width: calc(100% - 250px);
  left: 250px;
  min-height: 100vh;
  background-color: white;
  transition: 0.5s;
  color: white;
  padding: 10px;
  position: fixed;
`;
export const Navegacion = styled.div`
  height: 90vh;
  width: calc(100% - 5px);
  border: 1px solid #ddd;
  background: #f1f1f1;
  overflow-y: scroll;
  border: 1px solid #ffffff;
  background-color: white;
  color: black;
`;

export const Narbar = styled.div`
  background-color: #474b4e;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  justify-content: start;
  margin: auto;
  gap: 20rem;
  widt: auto;
`;

export const Catalogo =styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

export const Titulo = styled.div`
    
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 30px;
  font-size: 30px;

`;

export const Formulario = styled.div`
background-color: 
padding:20px;
width: 700px;
text-align: center;
padding-top:20px;
color: white;
display: grid;
grid-template-columns: 2fr 2fr 2fr  ;
grid-gap: 15px;
background-color: #283747;
border-radius: 25px;
cursor:pointer;
`

export const ImagenData = styled.img `
width:100px;
background-color: red;

`
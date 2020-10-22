import styled from 'styled-components'

export const HeaderContent = styled.div`
  height:100vh;
  width:31%;
  border-right:1px solid  #cbd5e0;
  background:#f7fafc;
  position:fixed;
  left:0;

  @media(max-width: 425px){
    display:none;
  }

`

export const HeaderIcons = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const IconsContent = styled.div`
  display:flex;
  align-items:center;
  margin:10px 8px;
  font-size:20px;
  color: #718096;
  padding:0 5px;
  cursor:pointer;

  :hover{
    background:#718096;
    border-radius:20px;
    color: #edf2f7;
  }
  .icons {

    padding:10px 10px;
    font-size:25px;
    
  }


`

import styled from 'styled-components'

export const Content = styled.div`
  height:100vh;
  width:31%;
  border-left:1px solid #cbd5e0;
  background:#f7fafc;
  position:fixed;
  right:0;

  display:flex;
  justify-content:center;

  @media(max-width: 425px){
    top:0;
    left:0;
    position:fixed;
    width:100vw;
    height:130px;
    z-index:2;
    background:#f7fafc;
    border:0;
  }
`

export const Loged = styled.div`
  width:70%;
  height:20%;

  display:flex;
  justify-content:center;

  padding:30px 10px;
  border:1px solid #cbd5e0;
  border-radius:20px;

  @media(max-width:768px){
    height:40%;
    width:100vw;
    border-radius:0;
  }

`

export const LogedUser = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:space-between;
  width:50%;

  .logout{
    display:flex;
    align-items:center;
    cursor: pointer;
    
    .icon-logout{
      margin-left:5px;
    }
  }

  .logout:hover{
    color:#cbd5e0;
  }
`

export const LoginUser = styled.div`
  display:flex;
  flex-direction:column;

`
export const LoginButtons = styled.div`
  display:flex;
  flex-direction:column;

  .buttons{
    margin:15px 0;
    padding:10px 0px;
    width:100%;
    background:#718096;
    border-radius:20px;
    color:white;
    cursor:pointer;

    @media(max-width:768px){
      padding:10px 0;
    }
    @media(max-width:425px){
      width:200px;
    }
  }
  .buttons:hover{
    background:#4a5568;
  }

  @media(max-width:768px){
    flex-direction:row;
  }

`


import styled from 'styled-components'

export const HomeContent = styled.div`
  position: relative;
  display:flex;
`

export const CreatePost = styled.div`
  height:100px;
  border-bottom:1px solid #cbd5e0;
  padding:10px 20px;

  .create{
    background:#a0aec0;
    padding:10px 10px;
    border-radius:20px;
    width:20%;

    @media(min-width:768px){
      width:50%;
    }
  }
  .create:hover{
    background:#718096;
    color:white;
  }


`

export const HomePosts = styled.div`
  position:absolute;
  left:31%;
  top:20%;
  width:38%;

  @media(max-width:425px){
    top:25%;
    width:100%;
    left:0;
  }
`


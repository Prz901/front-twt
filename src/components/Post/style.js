import styled from 'styled-components'

export const PostContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  border-bottom:1px solid #cbd5e0;
  height:100px;
  padding:10px 20px;
  cursor:pointer;

  :hover{
    background:#cbd5e0;
    color:#718096;
  }

  .content{
    display:flex;
    flex-direction:column;
  }
  .comments{
    margin-top:20px;
  }
`


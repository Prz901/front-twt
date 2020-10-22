import styled from 'styled-components'

export const CommentsContent = styled.div`
  position:absolute;
  left:31%;
  top:20%;
  width:38%;

  @media(max-width:425px){
    left:0;
    width:100%;
  }
`

export const Back = styled.div`
  position:absolute;
  left:32%;
  top:15%;
  width:20px;
  padding:5px 20px;
  background:#a0aec0;

  :hover{
    background:#718096;
  }
`

export const Post = styled.div`
  height:100px;
  border-bottom:1px solid #cbd5e0;
  padding:10px 20px;
  border-top:1px solid #cbd5e0;

  .space{
    margin-bottom:10px;
  }
  .post-title{
    font-size:20px;
    font-weight:300;
    letter-spacing:0.5;
    
  }

`

export const FormContent = styled.div`
  height:100px;
  border-bottom:1px solid #cbd5e0;
  padding:15px 20px;

  display:flex;
  align-items:center;
  justify-content:space-between;

`

export const FormInputs = styled.div`
    .inputs {
    background: #edf2f7;
    border: 1px solid #cbd5e0;
    padding:14px 12px;
  }
`

export const FormButtons = styled.div`
    .form-button{
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    background: #a0aec0;
    color: white;
  }
    .form-button:hover{
    background:#c0c0c0;
  }
`


import styled from 'styled-components'

export const LoginForm = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const BackPage = styled.div`
  width:100%;
  .back-page {
    width:100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 200px;

    .icon-back {
      width:10%;
      background: #a0aec0;
      padding: 6px 0;
    }
    
    .icon-back:hover {
      color: white;
      background:#c0c0c0;
    }
  }
`

export const FormContent = styled.div`
  display:flex;
  flex-direction:column;
  width:400px;
  height:200px;
  border:1px solid #718096;
  padding:10px 10px;

  .input-content{
    padding:20px 0;
  }

    .login-title {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

  }
`

export const FormInputs = styled.div`
  height:100%;
  display: flex;
  flex-direction:column;

  padding: 10px 0;

    .inputs {
    background: #edf2f7;
    border: 1px solid #cbd5e0;
    padding:14px 12px;
  }
`

export const FormButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

    .form-button{
    margin: 10px 0;
    width: 200px;
    padding: 10px 20px;
    cursor: pointer;
    width:100%;


    font-size: 18px;
    background: #a0aec0;
    color: white;
  }
    .form-button:hover{
    background:#c0c0c0;
  }
`
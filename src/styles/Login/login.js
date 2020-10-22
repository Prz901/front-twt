import styled from 'styled-components'

export const LoginPage = styled.div`
  background:#f7fafc;
  height:100vh;
  width:100vw;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
export const LoginContent = styled.div`
  padding:6px 4px;
  width:90%;

  display:flex;
  align-items:center;

  @media(max-width:768px){
    flex-direction:column;
    padding:0;
  }
`

export const LoginForm = styled.div`
  height:100%;
  width:100vw;
  display:flex;
  flex-direction:column;

  margin-left:50px;
  .middle{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  @media(max-width:768px){
    margin-left:0;
  }

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

      @media(max-width:768px){
      padding:0;
  }
    }
    
    .icon-back:hover {
      color: white;
      background:#c0c0c0;
    }
  @media(max-width:768px){
    padding-left:0;
  }
}

`

export const FormContent = styled.div`
  width:50%;
  height:100%;

  display:flex;
  flex-direction:column;

  .input-content{
    padding:20px 0;
  }

    .login-title {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    h1 {
      padding:20px 0;
      font-size: 30px;
      color: gray;
    }

    h2 {
      color:#a0aec0;
    }
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

export const FormSignIn = styled.div`
  font-size: 14px;
  letter-spacing: 0.5;
  margin: 14px 0;
  display:flex;
  justify-content:center;
  color:#4a5568;

    .click{
    font-size: 16px;
    color: blue;
    cursor: pointer;
    padding: 0 5px;
  }
    .click:hover{
    border-bottom: 1px solid blue;
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



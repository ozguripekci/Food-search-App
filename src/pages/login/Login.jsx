
import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import meal from "../../assets/meal.svg"


const Login = () => {


  const user = {
    username: 'user'
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem("user", JSON.stringify(user))

    // Home sayfasina direk gitmek icin
    window.location.href="/home"
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
        <Header>
          {"<Chef Ozgur/>"}Recipe
        </Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="Username" required/>
          <StyledInput type="text" placeholder="Password" required/>
          <StyledButton onSubmit={handleSubmit}>Login</StyledButton>
        </StyledForm>


      </FormContainer>





    </LoginContainer>
  )
}

export default Login
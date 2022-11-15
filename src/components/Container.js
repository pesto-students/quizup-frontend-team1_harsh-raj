import { StyledContainer } from "./styled/Container.styled";

export const Container = () => {
  return (
    <StyledContainer>
      <h1> Let's sign you in!</h1>
      <p>If you don't have an account yet a new account will be created based on your Google account info</p>
      <h2>Countinue as</h2>
      <input type="radio" name="continue_as" value="Student"/>
      <label >Student</label>
      <input type="radio" name="continue_as" value="Admin" />
      <label >Admin</label><br />
      <button >Sign in with Google</button><br />
      <button>Try as demo Student</button>
    </StyledContainer>
  )
}

import { StyledEditProfileCard } from "./styled/EditProfileCard.styled";


export const EditPofileCard = () => {
  return (
    <StyledEditProfileCard>
      <form>
        <table>
          <tr>
            <td>
              About:
            </td>
            <td>
              <input type="text" placeholder="Enter About" name="About"/>
            </td>
          </tr>
          <tr>
            <td>
              Skills:
            </td>
            <td>
              <input type="text" placeholder="Enter Skills" name=""/>
            </td>
          </tr>
          <h3>Bank details</h3>
          <tr>
            <td>
              Account No:
            </td>
            <td>
              <input type="number" placeholder=" Enter Account Number" name=""/>
            </td>
          </tr>
          <tr>
            <td>
              IFSC:
            </td>
            <td>
              <input type="text" placeholder="Name" name=""/>
            </td>
          </tr> 
        </table>
      </form>
    </StyledEditProfileCard>
  );
};

import AdminCards from "../components/AdminCards";
import Sidebar from "../components/Sidebar";
import { Container } from "../components/styled/Container.styled";
import { Flex } from "../components/styled/Flex.styled";


function AdminDashboard() {
  return ( 
  <>
   <Flex>
    <Sidebar/>
    <Container>
      <h1>Welcome Chetan</h1>
      <AdminCards/>
    </Container>
   </Flex>
  
  </>
  );
}

export default AdminDashboard;
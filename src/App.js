import './App.css';
import Navbar from './components/Navbar'
import Button from './components/Button';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import RegisterEditForm from './forms/RegisterEditForm';
import apiUser from './api/apiUser';
import BookMenu from './components/BookMenu';
import UserBookCollection from './components/UserBookCollection';
import SingleBookInfo from './components/SingleBookInfo';

const handleAPITest = async ()=>{
  const source = CancelToken.source();
  const response_object= await apiUser.getUser("dakodah@mail.com", "abc123", source.token);
  console.log(response_object)
}

function App() {
  return (
    <>
      <Navbar>
        <Button onClick={handleAPITest}>Test API</Button>
      <SingleBookInfo/>
      <UserBookCollection/>
      </Navbar> 
      
        
        
       
    </>
  );
}

export default App;

{/* <Navbar>
</Navbar>
<Button color="success" onClick={ handleAPITest }>Test API Call</Button> */}
import './App.css';
import Navbar from './components/Navbar'
import Button from './components/Button';
import { CancelToken } from 'apisauce';
import LoginForm from './forms/LoginForm';
import RegisterEditForm from './forms/RegisterEditForm';
import apiUser from './api/apiUser';

const handleAPITest = async ()=>{
  const source = CancelToken.source();
  const response_object= await apiUser.get(source.token);
  console.log(response_object)
}

function App() {
  return (
    <>
        <Navbar>
        </Navbar>
        <Button color="success" onClick={ handleAPITest }>Test API Call</Button>
        
        
       
    </>
  );
}

export default App;

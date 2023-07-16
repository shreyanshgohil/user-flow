import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import InvitationList from './pages/InvitationList';
import CreateRole from './pages/CreateRole';
import ListCompany from './pages/ListCompany';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/invitations" element={<InvitationList />} />
      <Route path="/create-role" element={<CreateRole />} />
      <Route path="/list-company" element={<ListCompany />} />
    </Routes>
  );
};

export default App;

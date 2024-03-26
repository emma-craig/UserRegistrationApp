import Registration from './components/Registration';
import Users from './components/Users';
import './App.css';
import UserContext from './contexts/UserContext';
import useFetchUsers from './components/hooks/useFetchUsers';

const App = () => {
  const  users  = useFetchUsers();
  return (
    <UserContext.Provider value={users}>
      <Registration />
      <Users />
    </UserContext.Provider>
  );
};

export default App;

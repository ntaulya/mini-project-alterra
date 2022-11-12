import './App.css';
import { Route, Routes } from 'react-router-dom';

import AdminDashboard from './pages/admin/Dashboard';
import AdminProfile from './pages/admin/Profile';

import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

import UserDashboard from './pages/user/Dashboard';
import UserTask from './pages/user/Task';

import authProvider from './utils/authProvider';
import { auth0 } from "./utils/authProvider";

import { Admin, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";

import { ApolloClient, InMemoryCache } from '@apollo/client';

import { createBrowserHistory as createHistory } from "history";
const history = createHistory();

const createApolloClient = async (token) => {
  return new ApolloClient({
    uri: 'https://task-mgt.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

function App() {
  const [dataProvider, setDataProvider] = useState({});

  useEffect(() => {
    const buildDataProvider = async () => {

      const isAuthenticated = await auth0.isAuthenticated();
      if (!isAuthenticated) {
        return;
      }
      const token = await auth0.getIdTokenClaims();
      const idToken = token.__raw;
      console.log(idToken);

      const apolloClient = await createApolloClient(idToken);

      const dataProvider = await buildHasuraProvider({
        client: apolloClient
      });
      setDataProvider(() => dataProvider);
    }
    buildDataProvider();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/user/dashboard' element={<UserDashboard />}></Route>
      <Route path='/user/task' element={<UserTask />}></Route>
      <Route path='/admin/dashboard' element={<AdminDashboard />}></Route>
      <Route path='/admin/profile' element={<AdminProfile />}></Route>

      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        title="Hasura Dashboard"
        dashboard={Dashboard}
        history={history}
        loginPage={Login}
      >
        <Resource name="task-mgt" list={TaskList} create={TaskCreate}></Resource>
      </Admin>

    </Routes>

  );
}

export default App;

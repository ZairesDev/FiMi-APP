import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Sidebar from '../src/components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const tokenId = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: tokenId ? `Bearer ${tokenId}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Sidebar />
          <Routes>
            <Route path='/' component={dashboard} />
            <Route path='/Login' component={Login} />
            <Route path='/Search' component={Search} />
            <Route path='/Signup' component={Signup} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;

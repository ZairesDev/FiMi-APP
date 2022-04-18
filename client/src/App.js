import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Sidebar from '../src/components/Sidebar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
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
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/search' element={<Search />} />
            <Route exact path='/signup' element={<Signup />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;

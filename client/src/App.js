import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//import the different pages
//TODO: create tests for every page
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import NoMatch from './pages/NoMatch';

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
          <Routes>
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/search' element={<Search />} />
            <Route element={NoMatch} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//import the different pages
//TODO: create tests for every page
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import EmployeeSearch from './pages/EmployeeSearch';

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
      <ApolloProvider client={client}></ApolloProvider>
    </div>
  );
};

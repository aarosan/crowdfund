import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import "./App.css"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
    return (
      <>
      <div className="background">
      <ApolloProvider client={client}>
            <Navbar/>
              <main>
                  <Outlet/>
              </main>
          <Footer/>
        </ApolloProvider>
      </div>
      </>
    );
};

export default App;
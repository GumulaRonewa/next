import { Provider } from 'react-redux'
import { useStore } from '../store'
import Layout from "../components/layout/Layout";
import '../styles/main.css';
import '../styles/globals.css';
import "../node_modules/material-design-icons/iconfont/material-icons.css";
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
       <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

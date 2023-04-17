import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <ToastContainer />
  </>
);

export default App;

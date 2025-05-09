import Head from 'next/head';
import store from '@/store/store';
import { Provider } from 'react-redux';

import '@/styles/globals.css';
import '@/styles/styles.css';
import '@/styles/responsiveness.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'katex/dist/katex.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> ETSO by Learn Right Now</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        {/* <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        /> */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

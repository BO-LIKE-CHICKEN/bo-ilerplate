import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import global from '@styles/global';
import theme from '@styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;

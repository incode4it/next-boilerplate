import {AppProps} from 'next/app';
import {FC} from 'react';
import '../assets/scss/styles.scss';

const App: FC<AppProps> = ({Component, pageProps}): JSX.Element => {
  return (
    <Component {...pageProps}/>
  )
}

export default App;

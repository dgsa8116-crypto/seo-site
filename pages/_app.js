import { useEffect } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }){
  useEffect(() => {
    document.body.classList.add('bg');
    return () => document.body.classList.remove('bg');
  }, []);
  return <Component {...pageProps} />;
}

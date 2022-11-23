import '../styles/globals.scss';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import 'react-image-gallery/styles/css/image-gallery.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      await import('flowbite');
    };
    use();
  }, []);

  return (
    <Layout>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </Layout>
  );
}

export default MyApp;

import '../styles/globals.scss';
import Layout from '../components/Layout';
import UserProvider from '../components/Auth/UserProvider';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';
import 'react-image-gallery/styles/css/image-gallery.css';
import '@fontsource/roboto';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Layout>
                <I18nextProvider i18n={i18n}>
                    <Component {...pageProps} />
                </I18nextProvider>
            </Layout>
        </UserProvider>
    );
}

export default MyApp;

import Layout from '../components/templates/Layout'
import "../styles/globalStyles.css";

export default function AppGlobal({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

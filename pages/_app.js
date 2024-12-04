// pages/_app.js
import '../public/styles/styles.css';
import '../public/styles/style.css';
import '../public/fontawesome/css/all.min.css';
import '../public/styles/blog.css'; // Importa el archivo CSS
import '../public/styles/404.css';

{/* <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="fontawesome/css/all.min.css"> */}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
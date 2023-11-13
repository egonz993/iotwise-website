import Document, { 
    Html, 
    Head, 
    Main, 
    NextScript 
  } from "next/document";
  
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="es">
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
              rel="stylesheet"
            />
            <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="/images/favicon.png" />
            <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
            <link rel="mask-icon" href="/images/favicon.png" color="#226DAA" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />

          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
export default function MyApp({ Component, pageProps }) {
    return( 
    <>
    <GlobalStyle/>
    <Component {...pageProps} />

    </>);
  }

  //Tudo que colocar aqui se´ra padrão em todas as páginas

  function GlobalStyle() {
    return (
      <style global jsx>{`
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
      }
      body {
          font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
      }
      #__next {
          flex: 1;
      }
      #__next > * {
          flex: 1;
      }
     
      `}</style>
  
    );
  
  
  }
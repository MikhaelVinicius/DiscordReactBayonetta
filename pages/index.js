function GlobalStyle(){
  return(
    <style global jsx>{`
      *{
        background: black;
      }
      `}</style>


  );


}


function Title(props){
  console.log(props.children);
  const Tag = props.tag;
  return(
   <>
    <Tag>{props.children}</Tag>
    <style jsx>{`
    ${Tag} {
      color: red;
      font-size: 40px;
      font-weigt:600;
    }
  `}</style>
  </>
 
  )
}


//componente react

function HomePage() {
    return <div>
      <GlobalStyle />
      <Title tag="h2">Ignorando</Title>
     <h1>Seja bem-vindo!!!</h1>
     <h2>Discord Bayonetta</h2> 
    

    </div>
  }
  
  export default HomePage
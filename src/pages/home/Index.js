function newApp() {
    const urlPimg = 'https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif';
  return (
    <div className="App">
    <form>  
      <input type='text' placeholder='text'></input> 
      <button>Button</button>
    </form>  
      <img src={urlPimg} alt='giphy.img'> </img>
    </div>
  );
}
export default newApp;  
  function newApp() {
    const urlimg = 'https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif';
    return (
      <div className="App">
        <form>
        <input type='text' placeholder='text'></input> 
        <button>Select</button>
        </form>
        <img src={urlimg} alt="img" />
      </div>
    );
  };

  export default newApp;  
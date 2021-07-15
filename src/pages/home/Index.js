 import notif from "./alert.js"
import gif from "../../data/data"
import Title from "../../gif/title/title"

  function newApp() {
    // const urlimg = 'https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif';
    return (
      <div className="App">
        <form>
        <input type='text' placeholder='text'></input> 
        <button onClick={notif} type="button">Select</button>
        </form>
        <Title title={gif.title} url={gif.url} />  
      </div>
    );
  };

  export default newApp;  
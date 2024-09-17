// import some dependencies to use noty , for showing notifications
import "../node_modules/noty/lib/noty.css";
import "../node_modules/noty/lib/themes/mint.css";

// import style.css
import "./style.css";

// import Album
import Album from "./Album";
// import { config } from "dotenv";

function App() {


  
console.log( "key",process.env.API_KEY);


  return (
    <>
      {/* display album Component */}
      <Album />
    </>
  );
}

export default App;

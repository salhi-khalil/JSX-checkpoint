import React from 'react';
import './Style.css';
import myWonderfullImage from "./imageInSrc.jpg" ;
import video1  from "./res/video.mp4" ;


function App() {
  return (
    <div className="App">
      
 <div style={{border: "solid 1px black", maxWidth: "100vw"}}>
 <h1 className="title" className="red"> SALHI KHALIL</h1>
 <br/ >
 <img src={myWonderfullImage} alt="imageInSrc" />
 <br />
 <img src="./imageInPublic.png" alt="imageInPublic" />
</div>
<video width="320" height="240" controls>
 <source src={video1} type="video/mp4" />
</video>

    </div>
  );
}

export default App;

import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
//import Jsx from './Jsx';
import Welcome from './Welcome';
import NestedProps from './NestedProps';


/*
function formatName(user){
  return user.firstName + ' ' +user.lastName;
}

const user = {
  firstName : "Lars",
  lastName : "Sanhudo"
};

const element = (
  <h1>
      Hello, {formatName(user)}!
  </h1>
)
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2/>
    <App3/>
    <App4/>
    
  </React.StrictMode>
  
);

/*
const jsxRoot = ReactDOM.createRoot(document.getElementById('jsx-root'));
jsxRoot.render(
  element
);
*/

/*
const tickRoot = ReactDOM.createRoot(
  document.getElementById('tick-root')
)

function tick() {
  const element = (
    <div>
      <h1>Hello, World.</h1>
      <h2>It is {new Date().toLocaleString()}</h2>
    </div>
  );
  tickRoot.render(element);
}

setInterval(tick, 1000);
*/

const welcomeRoot = ReactDOM.createRoot(
  document.getElementById("welcome"));



welcomeRoot.render(
  <React.StrictMode>
    <Welcome name = "Lars"/>
    <Welcome name = "Leonardo"/>
    <Welcome name = "Sanhudo"/>
  </React.StrictMode>
)


const nestedRoot = ReactDOM.createRoot(
  document.getElementById("nested-props")
);

const nestedPropsprops = {
  date: new Date().toLocaleString(),
  text: "Testing some features",
  author: {
    name: "Lars Leonardo"
  }
};

nestedRoot.render(
  <React.StrictMode>
    <NestedProps
      date = {nestedPropsprops.date}
      text = {nestedPropsprops.text}
      author = {nestedPropsprops.author}
    />
  </React.StrictMode>
);







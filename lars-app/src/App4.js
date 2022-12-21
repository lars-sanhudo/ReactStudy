import React from "react";

function App4() {
    const [personName, setPersonName] =
    React.useState('');

    return(
        <div className="App4">
            <h1>Hello {personName}</h1>
            <input type="text" onChange = {
                (e) => setPersonName(e.target.value)
            }></input>
        </div>
    );
}

export default App4;
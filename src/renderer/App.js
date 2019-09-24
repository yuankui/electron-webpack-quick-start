import React from 'react';
import logo from './logo.svg';
import './App.css';
import CodeView from "./CodeView";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <CodeView filePath={"/Users/yuankui/test/test-react/src/index.js"}/>
        </div>
    );
}

export default App;

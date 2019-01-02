import React from "react";

import '../styles/reset.css';
import '../styles/app.css';

import Form from "./form";
import Info from "./info";
import Weather from "./weather";

class App extends React.Component {
    render() {
        return (
            <div>
                <Info/>
                <Form/>
                <Weather/>
            </div>
        );
    }
}

export default App;
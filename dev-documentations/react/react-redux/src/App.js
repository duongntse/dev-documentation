import React from "react";
import App from "App.js";
import FormContainer from "./FormContainer";

class App extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <FormContainer />;
            </div>
        );
    }
}

export default App;

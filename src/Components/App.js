import React from 'react';
import Router from "Components/Router";
import GlobalStyless from "Components/GlobalStyless";

class App extends React.Component {
  render() {
    return(
        <>
            <Router/>
            <GlobalStyless/>
        </>
    )
  }
}

export default App;

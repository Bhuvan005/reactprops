import React from "react";
import ClassProps from "./ClassProps";
import Functionalprops from "./Functionalprops";
class App extends React.Component {
  render(){
    return (<div>
      <ClassProps name="learner 1" place="Placex"><p>Child Component</p></ClassProps>
      <ClassProps name="learner 2" place="Placey"><button>click</button></ClassProps>
      <ClassProps name="learner 3" place="Placez"/>
      <Functionalprops name="learner 4" place="PlaceA"/>
    </div>
    );
  }
}

export default App;

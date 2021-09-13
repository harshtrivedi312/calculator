import React from "react";
import Engine from "./Engine.js";
import Display from "./Display.js";
import Button from "./Button.js";
import "./Calculator.css";
import { itemService } from "./service.js";

class Calculator extends React.Component {
  
  engine =  new Engine();
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
      disable: false,
    
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButtonDisable = this.handleButtonDisable.bind(this);
  }

  handleButtonClick(value)   {
    if(value !== null){
      this.setState({
        display: this.state.itemService.calculate(value),
      });
    }
  
  }
  
  handleButtonDisable = event => {
    this.setState({ 
      disable: true
    });
  };

  componentDidMount(){
    fetch(itemService.calculate).then((data) => {
      //This should store the data to some arrray object ...
      //if it's post call it should call the opration and pass the args numbers ..
      this.setState({})
    })
  }



  render() {
    return (
      <div className="Calculator">
        <Display display={this.state.display} />

        <Button
          value={this.state.engine.clearable ? "C" : "AC"}
          className="Button BlackButton"
          onClick={this.handleButtonClick}
        />
        <Button
          disable={true}
          value="+/-"
          className="Button BlackButton disabled"
          onClick={this.handleButtonDisable}
        />
        <Button
          value="%"
          className="Button BlackButton"
          onClick={this.handleButtonDisable}
        />
        <Button
          value={"\u00F7"}
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="7"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="8"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="9"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="x"
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="4"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="5"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="6"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="-"
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="1"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="2"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="3"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="+"
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="0"
          className="Button GrayButton LargeButton"
          onClick={this.handleButtonClick}
        />
        <Button
        
          value="."
          className="Button GrayButton"
          onClick={this.handleButtonDisable}
        />
        <Button
          value="="
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default Calculator;
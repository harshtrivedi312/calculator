 import Engine from './Engine';
import engine from './Engine';
export class itemService{
    engine = new Engine();
    constructor(){}

    async getServices(){}

    //post shoudl call backend and log the data ?
    async postServices(){};

    //
    async claculation (numOne, numTwo, typeOfOperations){
  await // call the api url and wait for the response 
        //Call the engine and based on args 
      engine.handleDigitInput(numOne);
    }
}

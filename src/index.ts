import {Controller} from "./mvc/controller";
import {View} from "./mvc/view/view";
import {Model} from "./mvc/model";

const view = new View()
const model = new Model()
const controller = new Controller(view, model)

controller.say()
console.log('1')

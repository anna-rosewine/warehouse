import {View} from "./view/view";
import {Model} from "./model";

export class Controller {
    view: View;
    model: Model;
    constructor(view: View, model: Model) {
        console.log('constroller')
        this.view = view;
        this.model = model;
    }

    say(){
        console.log('constroller')
    }
}

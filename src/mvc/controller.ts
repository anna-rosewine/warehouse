import {View} from "./view/view";
import {Model} from "./model";

export class Controller {
    view: View;
    model: Model;
    constructor(view: View, model: Model) {
        console.log('controller')
        this.view = view;
        this.model = model;
        this.view.renderContainers(this.model.dryContainers, this.model.liquidContainers);
        this.view.addBtnListener(this.addContainer)
    }

    say(){
        console.log('controller')
    }

    addContainer = () => {
       let container =  this.view.form.getFormInformation();
       this.model.addContainer(container, this.renderContainers);

    }

    renderContainers = () => {
        console.log('ren')
        this.view.renderContainers(this.model.dryContainers, this.model.liquidContainers)
    }
}

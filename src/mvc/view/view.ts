import {FormView} from "./form.view";

export class View {
    private mainContainer: HTMLElement | null;
    private form: FormView;
    constructor() {
        this.mainContainer = document.getElementById('mainContainer');
        this.form = new FormView();
        this.mainContainer?.append(this.form.getForm())
    }
}

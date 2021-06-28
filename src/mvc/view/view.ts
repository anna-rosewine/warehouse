import {FormView} from "./form.view";
import {SideView} from "./side.view";
import {ContainersView} from "./containers.view";
import {Container} from "../interfaces/container";

export class View {
     mainContainer: HTMLElement | null;
     form: FormView;
    mainFlex: HTMLDivElement;
    sideView: SideView;
    private containersWrapper: ContainersView;
    constructor() {
        this.mainContainer = document.getElementById('mainContainer');
        this.form = new FormView();
        this.sideView = new SideView();
        this.containersWrapper = new ContainersView()
        this.mainFlex = document.createElement('div')
        this.mainFlex.append(this.containersWrapper.getContainers())
        this.mainFlex.classList.add('flex');
        this.mainFlex.append(this.sideView.getWarehouse())
        this.mainContainer?.append(this.form.getForm())
        this.mainContainer?.append(this.mainFlex)
    }

    renderContainers = (dryContainers: Container[], liquidContainers: Container[]) => {
        this.containersWrapper.renderContainers(dryContainers, liquidContainers);
    }

    addBtnListener = (addFunction: Function) => {
        this.form.formBtn.addEventListener('click', () => addFunction())
    }

    getFormInformation(){
        this.form.getFormInformation();
    }
}

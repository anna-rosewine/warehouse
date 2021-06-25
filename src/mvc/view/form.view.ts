import {ContainerType} from "../interfaces/containerType.enum";

export class FormView {
     formContainer: HTMLDivElement;
 titleInput: HTMLInputElement;
     typeInput: HTMLSelectElement;
    dryOption: HTMLOptionElement;
   liquidOption: HTMLOptionElement;
    amountInput: HTMLInputElement;
    private formBtn: HTMLButtonElement;
    constructor(){
        this.formContainer = document.createElement('div');
        this.formContainer.classList.add('formContainer');
        this.titleInput = document.createElement('input');
        this.amountInput = document.createElement('input');
        this.typeInput = document.createElement('select');
        this.dryOption = document.createElement('option');
        this.dryOption.innerHTML = ContainerType.DRY;
        this.dryOption.setAttribute('value', ContainerType.DRY);

        this.liquidOption = document.createElement('option');
        this.liquidOption.innerHTML = ContainerType.LIQUID;
        this.liquidOption.setAttribute('value', ContainerType.LIQUID)
        this.formBtn =  document.createElement('button');
        this.formBtn.innerHTML='add'
        this.formContainer.append(this.titleInput)
        this.formContainer.append(this.typeInput)
        this.formContainer.append(this.amountInput);
        this.formContainer.append(this.formBtn);
        this.typeInput.append(this.dryOption)
        this.typeInput.append(this.liquidOption)



    }

    getForm(){
        console.log('form')
        return this.formContainer;
    }
}

import {ContainerType} from "../interfaces/containerType.enum";
import {Container} from "../interfaces/container";

export class FormView {
     formContainer: HTMLDivElement;
 titleInput: HTMLInputElement;
     typeInput: HTMLSelectElement;
    dryOption: HTMLOptionElement;
   liquidOption: HTMLOptionElement;
    amountInput: HTMLInputElement;
     formBtn: HTMLButtonElement;
    constructor(){
        this.formContainer = document.createElement('div');
        this.formContainer.classList.add('formContainer');
        this.titleInput = document.createElement('input');
        this.amountInput = document.createElement('input');
        this.typeInput = document.createElement('select');
        this.dryOption = document.createElement('option');
        this.dryOption.innerHTML = "Сыпучее";
        this.dryOption.setAttribute('value', ContainerType.DRY);

        this.liquidOption = document.createElement('option');
        this.liquidOption.innerHTML = 'Жидкое';
        this.liquidOption.setAttribute('value', ContainerType.LIQUID)
        this.formBtn =  document.createElement('button');
        this.formBtn.innerHTML='Добавить'
        this.formContainer.append(this.titleInput)
        this.formContainer.append(this.typeInput)
        this.formContainer.append(this.amountInput);
        this.formContainer.append(this.formBtn);
        this.typeInput.append(this.dryOption)
        this.typeInput.append(this.liquidOption);
        this.formBtn.addEventListener('click', this.getFormInformation)
        console.log('here&')
    }

    getForm(){
        console.log('form')
        return this.formContainer;
    }

    getFormInformation = () => {
        let type: ContainerType;
        if(this.typeInput.value==="Liquid"){
            type = ContainerType.LIQUID
        } else {
            type = ContainerType.DRY
        }
        let newContainer: Omit<Container, "id"> = {
            name: this.titleInput.value,
            amount:  this.amountInput.value,
            containerType: type
        }
        return newContainer;
    }

}

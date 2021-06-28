import {Container} from "../interfaces/container";
import {ContainerType} from "../interfaces/containerType.enum";

export class ContainersView {
    containersWrapper: HTMLDivElement;
    dryWrapper: HTMLDivElement;
    liquidWrapper: HTMLDivElement;
    constructor () {
        this.containersWrapper = document.createElement('div');
        this.containersWrapper.classList.add('mainContainersWrapper')
        this.dryWrapper = document.createElement('div')
        this.dryWrapper.classList.add('containersWrapper')
        this.liquidWrapper = document.createElement('div');
        this.liquidWrapper.classList.add('containersWrapper')
        this.containersWrapper.append(this.dryWrapper)
        this.containersWrapper.append(this.liquidWrapper)
    }

    getContainers(){
        return this.containersWrapper;
    }

    renderContainers = (dryContainers: Container[], liquidContainers: Container[]) => {
        this.dryWrapper.innerHTML = "";
        this.liquidWrapper.innerHTML = "";
        dryContainers.forEach((c) => {
            this.drawContainers(c)
        })
        liquidContainers.forEach((c) => {
            this.drawContainers(c);
        })

    }

    drawContainers(c: Container){
        let dryContainer = document.createElement('div');
        dryContainer.classList.add('containerItem');
        let containerImg = document.createElement('div');
        containerImg.classList.add('containerItemImg');
        let containerName = document.createElement('p');
        containerName.innerHTML = c.name;
        let containerAmount = document.createElement('p');
        dryContainer.append(containerImg)
        dryContainer.append(containerName)
        dryContainer.append(containerAmount)
        if(c.containerType == ContainerType.DRY){
            containerAmount.innerHTML =`${c.amount} кг`;
            this.dryWrapper.append(dryContainer)
        }
        if(c.containerType == ContainerType.LIQUID){
            containerAmount.innerHTML =`${c.amount} л`;
            this.liquidWrapper.append(dryContainer)
        }

    }
}

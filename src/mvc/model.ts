import {ContainerType} from "./interfaces/containerType.enum";
import {Container} from "./interfaces/container";
import cuid from 'cuid';

export class Model {
    dryContainers:  Container[];
    liquidContainers: Container[];
    constructor(){
        console.log('model')
        this.dryContainers = [
            {
                id: cuid(),
                containerType: ContainerType.DRY,
                name: 'Гречка',
                amount: 50,
            },
            {
                id: cuid(),
                containerType: ContainerType.DRY,
                name: 'Рис',
                amount: 50,
            },
            {
                id: cuid(),
                containerType: ContainerType.DRY,
                name: 'Кокс',
                amount: 50,
            },
        ];
        this.liquidContainers = [
            {
                id: cuid(),
            containerType: ContainerType.LIQUID,
            name: 'Молоко',
            amount: 50,
        },
            {
                id: cuid(),
                containerType: ContainerType.LIQUID,
                name: 'Масло',
                amount: 50,
            },
        ]
    }

    addContainer = (container: Omit<Container, 'id'>, renderContainers: Function) => {
        let completeContainer = {
            ...container,
            id: cuid(),
        }
        if(container.containerType === ContainerType.DRY){
            const neededContainer = this.dryContainers.filter((c) => c.name !== container.name);
            if(neededContainer.length > 0){
                console.log('i have this dry' )
                renderContainers()
            } else {

                this.dryContainers.push(completeContainer);
                renderContainers()
            }
        }
        if(container.containerType === ContainerType.LIQUID){
            const neededContainer = this.liquidContainers.filter((c) => c.name !== container.name);
            if(neededContainer.length > 0){
                console.log('i have this')
                renderContainers()
            } else {
                this.liquidContainers.push(completeContainer);
                renderContainers()
            }
        }
    }
}

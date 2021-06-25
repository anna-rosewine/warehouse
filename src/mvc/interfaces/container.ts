import {ContainerType} from "./containerType.enum";

export interface Container {
    containerType: ContainerType,
    name: string,
    amount: number,
}

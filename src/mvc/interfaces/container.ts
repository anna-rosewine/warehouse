import {ContainerType} from "./containerType.enum";

export interface Container {
    id: string,
    containerType: ContainerType,
    name: string,
    amount: number | string,
}

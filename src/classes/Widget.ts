import { VirtualNode } from "./VirtualDOM";

export class Widget {

    protected node: VirtualNode;

    constructor() {
        this.node = {
            type: 'div',
            props: [],
            children: []
        };
    }

    public getNode(): VirtualNode {
        return this.node;
    }

}

import { Widget } from "../Widget";
import { VirtualNode } from "../VirtualDOM";

export class Container extends Widget {

    constructor(private child: Widget ) {
        super('div', {});
        this.child = child;
    }

    public getNode(): VirtualNode {
        this.node.children = [this.child.getNode()];
        return this.node;
    }

}

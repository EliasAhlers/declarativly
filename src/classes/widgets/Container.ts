import { Widget } from "../Widget";
import { VirtualNode } from "../VirtualDOM";

export class Container extends Widget {

    private child: Widget;

    constructor({child}: { child: Widget }) {
        super();
        this.child = child;
    }

    public getNode(): VirtualNode {
        this.node.children = [this.child.getNode()];
        return this.node;
    }

}

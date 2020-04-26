import { Widget } from "../Widget";
import { VirtualNode } from "../VirtualDOM";

export class Button extends Widget {

    private child: Widget;

    constructor(child: Widget, { onClick }: { onClick: Function }) {
        super();
        this.node.type = 'button';
        this.child = child;
        this.node.props['onClick'] = onClick;
        this.node.props['forceUpdate'] = true;
    }

    public getNode(): VirtualNode {
        this.node.children = [this.child.getNode()];
        return this.node;
    }

}

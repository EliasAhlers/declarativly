import { Widget } from "../Widget";
import { VirtualNode } from "../VirtualDOM";
import { PropsData } from "./HTMLWidget";

export class Button extends Widget {

    constructor(private child: Widget, { onClick, props, style }: { onClick: Function, props?: PropsData, style?: any }) {
        super('button', {props, style});
        this.node.props['onClick'] = onClick;
        this.node.props['forceUpdate'] = true;
    }

    public getNode(): VirtualNode {
        this.node.children = [this.child.getNode()];
        return this.node;
    }

}

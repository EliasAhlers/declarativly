import { VirtualNode } from "./VirtualDOM";
import { PropsData } from "./widgets/HTMLWidget";

export class Widget {

    protected node: VirtualNode;

    constructor(tag: string = 'div', { children, props, style }: { children?: Array<Widget|Array<Widget>>, props?: PropsData, style?: any }) {
        this.node = {
            type: tag,
            props: props??{},
            children: children??[],
        };
        if(style) {
            let styleString: string = '';
            for(let key in style) {
                styleString += key + ':' + style[key] + ';';
            }
            this.node.props['style'] = styleString;
        }
    }

    public getNode(): VirtualNode {
        return this.node;
    }

    public repeat(amount: number): Array<Widget> {
        return new Array(amount).fill(this);
    }

    public if(check: boolean): Array<Widget> {
        return check ? [this] : [];
    }

}

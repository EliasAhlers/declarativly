import { VirtualNode } from "../VirtualDOM";
import { Widget } from "../Widget";

interface propsData {
    [index: string]: any
}

export class HTMLWidget extends Widget {

    private children: Array<Widget>;

    constructor(tag: string, { children, props, style }: { children?: Array<Widget>, props?: propsData, style?: any }) {
        super();
        this.node.type = tag;
        this.node.props = props??{};
        if(style) {
            let styleString: string = '';
            for(let key in style) {
                styleString += key + ':' + style[key] + ';';
            }
            this.node.props['style'] = styleString;
        }
        this.children = children??[];
    }

    public getNode(): VirtualNode {
        this.node.children = [];
        this.children.forEach((child: Widget) => {
            if(Array.isArray(child)) {
                child.forEach((childChild: Widget) => {
                    this.node.children.push(childChild.getNode());
                });
            } else {
                    this.node.children.push(child.getNode());
            }
        });
        return this.node;
    }

}
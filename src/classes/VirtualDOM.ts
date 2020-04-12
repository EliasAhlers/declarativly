export interface VirtualNode {
    type: string;
    props: Array<any>;
    children: Array<any>;
    events: any;
}

export class VirtualDOM {

    private static virtualDOM: VirtualNode;

    public static updateDOM(anchor: HTMLElement, node: VirtualNode): void {
        this.updateElement(anchor, node, this.virtualDOM);
        this.virtualDOM = node;
    }

    private static createElement(node: VirtualNode): HTMLElement|Text {
        if (typeof node == 'string') {
            return document.createTextNode(node);
        }
        const element: HTMLElement = document.createElement(node.type);
        if(node.events != {}) {
            for(let event in node.events) {
                element.addEventListener(event, (evt: Event) => {
                    node.events[event](evt);
                });
            }
        }
        node.children
            .map(VirtualDOM.createElement)
            .forEach((child: any) => {
                element.appendChild(child);
            });
        return element;
    }

    private static didNodeChange(node1: VirtualNode, node2: VirtualNode): boolean {
        return typeof node1 !== typeof node2 ||
            typeof node1 === 'string' && node1 !== node2 ||
            node1.type !== node2.type
    }

    private static updateElement($parent: any, newNode: VirtualNode, oldNode?: VirtualNode, index: number = 0): void {
        if (!oldNode) {
            $parent.appendChild(
                VirtualDOM.createElement(newNode)
            );
        } else if (!newNode) {
            $parent.removeChild(
                $parent.childNodes[index]
            );
        } else if (this.didNodeChange(newNode, oldNode)) {
            $parent.replaceChild(
                VirtualDOM.createElement(newNode),
                $parent.childNodes[index]
            );
        } else if (newNode.type) {
            const newLength: number = newNode.children.length, oldLength: number = oldNode.children.length;
            for (let i: number = 0; i < newLength || i < oldLength; i++) {
                VirtualDOM.updateElement(
                    $parent.childNodes[index],
                    newNode.children[i],
                    oldNode.children[i],
                    i
                );
            }
        }
    }

}
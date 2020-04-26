export interface VirtualNode {
    type: string;
    props: Props;
    children: Array<any>;
}

export interface Props {
    [index: string]: any;
}

export class VirtualDOM {

    private static virtualDOM: VirtualNode;
    private static onEegEx: RegExp = /^on/;

    public static updateDOM(anchor: HTMLElement, node: VirtualNode): void {
        VirtualDOM.updateElement(anchor, node, this.virtualDOM);
        VirtualDOM.virtualDOM = node;
    }

    private static setBooleanProp(element: any, name: string, value: string): void {
        if (value) {
            element.setAttribute(name, value);
            element[name] = true;
        } else {
            element[name] = false;
        }
    }

    private static removeBooleanProp(element: any, name: string): void {
        element.removeAttribute(name);
        element[name] = false;
    }

    private static isEventProp(name: string): boolean {
        return this.onEegEx.test(name);
    }

    private static extractEventName(name: string): string {
        return name.slice(2).toLowerCase();
    }

    private static isCustomProp(name: string): boolean {
        return VirtualDOM.isEventProp(name) || name === 'forceUpdate';
    }

    private static setProp(element: HTMLElement, name: string, value: string): void {
        if (VirtualDOM.isCustomProp(name)) {
            return;
        } else if (name === 'className') {
            element.setAttribute('class', value);
        } else if (typeof value === 'boolean') {
            VirtualDOM.setBooleanProp(element, name, value);
        } else {
            element.setAttribute(name, value);
        }
    }

    private static removeProp(element: HTMLElement, name: string, value: string): void {
        if (VirtualDOM.isCustomProp(name)) {
            return;
        } else if (name === 'className') {
            element.removeAttribute('class');
        } else if (typeof value === 'boolean') {
            VirtualDOM.removeBooleanProp(element, name);
        } else {
            element.removeAttribute(name);
        }
    }

    private static setProps(element: HTMLElement, props: Props): void {
        Object.keys(props).forEach((name: string) => {
            VirtualDOM.setProp(element, name, props[name]);
        });
    }

    private static updateProp(element: HTMLElement, name: string, newVal: string, oldVal: string): void {
        if (!newVal) {
            VirtualDOM.removeProp(element, name, oldVal);
        } else if (!oldVal || newVal !== oldVal) {
            VirtualDOM.setProp(element, name, newVal);
        }
    }

    private static updateProps(element: HTMLElement, newProps: Props, oldProps: Props = {}): void {
        const props: Props = Object.assign({}, newProps, oldProps);
        Object.keys(props).forEach((name: string) => {
            VirtualDOM.updateProp(element, name, newProps[name], oldProps[name]);
        });
    }

    private static addEventListeners(element: any, props: Props): void {
        Object.keys(props).forEach((name: string) => {
            if (VirtualDOM.isEventProp(name)) {
                element.addEventListener(
                    VirtualDOM.extractEventName(name),
                    props[name]
                );
            }
        });
    }

    private static createElement(node: VirtualNode): HTMLElement|Text {
        if (typeof node === 'string') {
            return document.createTextNode(node);
        }
        const element: HTMLElement = document.createElement(node.type);
        VirtualDOM.setProps(element, node.props);
        VirtualDOM.addEventListeners(element, node.props);
        node.children
            .map(VirtualDOM.createElement)
            .forEach((child: any) => {
                element.appendChild(child);
            });
        return element;
    }

    private static changed(node1: VirtualNode, node2: VirtualNode): boolean {
        return typeof node1 !== typeof node2 ||
            typeof node1 === 'string' && node1 !== node2 ||
            node1.type !== node2.type ||
            node1.props && node1.props.forceUpdate;
    }

    private static updateElement(element: any, newNode: VirtualNode, oldNode: VirtualNode, index: number = 0): void {
        if (!oldNode) {
            element.appendChild(
                VirtualDOM.createElement(newNode)
            );
        } else if (!newNode) {
            element.removeChild(
                element.childNodes[index]
            );
        } else if (VirtualDOM.changed(newNode, oldNode)) {
            element.replaceChild(
                VirtualDOM.createElement(newNode),
                element.childNodes[index]
            );
        } else if (newNode.type) {
            VirtualDOM.updateProps(
                element.childNodes[index],
                newNode.props,
                oldNode.props
            );
            const newLength: number = newNode.children.length;
            const oldLength: number = oldNode.children.length;
            for (let i: number = 0; i < newLength || i < oldLength; i++) {
                VirtualDOM.updateElement(
                    element.childNodes[index],
                    newNode.children[i],
                    oldNode.children[i],
                    i
                );
            }
        }
    }

}

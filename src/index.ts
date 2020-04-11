import { Widget } from "./classes/Widget";

export { Widget } from "./classes/Widget";
export { Text } from "./classes/widgets/Text";
export { Container } from "./classes/widgets/Container";

export class Declarativly {

    private static rootWidget: Widget;
    private static element: HTMLElement;

    public static init(element: HTMLElement, rootWidget: Widget): void {
        this.rootWidget = rootWidget;
        this.element = element;
        this.element.appendChild(this.rootWidget.render());
    }

}

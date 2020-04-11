import { Widget } from "./classes/Widget";

export { Widget } from "./classes/Widget";

export class Declarativly {

    public static init(element: HTMLElement, rootWidget: Widget): void {
        element.innerHTML = rootWidget.renderHTML();
    }

}

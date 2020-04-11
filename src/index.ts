import { Widget, State } from "./classes/Widget";

export * from "./classes/widgets/Widgets";
export { State } from './classes/Widget';

export class Declarativly {

    public static state: State;

    private static rootWidget: Widget;
    private static rootWidgetFunction: Function;
    private static element: HTMLElement;

    public static init(element: HTMLElement, state: State, callback: Function): void {
        this.element = element;
        this.state = state;
        this.rootWidgetFunction = callback;
        this.computeRootWidget();
        this.element.appendChild(this.rootWidget.render());
    }

    public static updateState(callback: Function): void {
        callback(this.state);
        this.reRender();
    }

    private static computeRootWidget(): void {
        this.rootWidget = this.rootWidgetFunction(this.state);
    }

    public static reRender(): void {
        this.element.innerHTML = '';
        this.computeRootWidget();
        this.element.appendChild(this.rootWidget.render());
    }

}

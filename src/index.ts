import { VirtualDOM } from "./classes/VirtualDOM";


export * from "./classes/widgets/Widgets";


export interface State {

    [index: string]: any;

}

export class Declarativly {

    public static state: State;
    private static rootWidgetFunction: Function;
    private static rootElement: HTMLElement;

    public static init(rootElement: HTMLElement, state: State, rootWidgetFunction: Function): void {
        this.state = state;
        this.rootElement = rootElement;
        this.rootWidgetFunction = rootWidgetFunction;
        VirtualDOM.updateDOM(this.rootElement, this.rootWidgetFunction(this.state).getNode());
    }

    public static updateState(callback: Function): void {
        callback(this.state);
        VirtualDOM.updateDOM(this.rootElement, this.rootWidgetFunction(this.state).getNode());
    }

}

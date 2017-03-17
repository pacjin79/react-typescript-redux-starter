// Type definitions for react-motion v0.4.2
// Project: https://github.com/chenglou/react-motion
// Definitions by: Philip Davis <https://github.com/PhilipDavis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "react-motion" {
    import { Component } from 'react';

    export class Motion extends Component<any, any> { }
    export class StaggeredMotion extends Component<any, any> { }
    export class TransitionMotion extends Component<any, any> { }

    export interface Config {
        stiffness: number,
        damping: number,
        precision?: number,
    }

    export function spring(val: number, config?: Config): any;

    export class Presets {
        [name: string]: Config
    }

    export const presets: Presets;
}
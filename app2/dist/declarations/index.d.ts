/// <reference types="react" />
declare module "components/Button" {
    import * as React from "react";
    export interface ButtonProps {
        /**
         * Is this the principal call to action on the page?
         */
        primary?: boolean;
        /**
         * What background color to use
         */
        backgroundColor?: string;
        /**
         * How large should the button be?
         */
        size?: 'small' | 'medium' | 'large';
        /**
         * Button contents
         */
        label: string;
        /**
         * Optional click handler
         */
        onClick?: () => void;
    }
    /**
     * Primary UI component for user interaction
     */
    export const Button: React.FC<ButtonProps>;
    export default Button;
}
declare module "App" {
    const App: () => JSX.Element;
    export default App;
}
declare module "bootstrap" { }
declare module "index" { }
declare module "federated/components/index" {
    import Button from "components/Button";
    export default Button;
}

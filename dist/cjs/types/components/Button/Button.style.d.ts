/// <reference types="react" />
export declare const ButtonUiStyled: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<Partial<{
    href: string;
    target?: string | undefined;
    onClick?: import("react").MouseEventHandler<HTMLAnchorElement> | undefined;
} & import("antd/es/button/button").BaseButtonProps & Omit<import("react").AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, "type" | "onClick"> & {
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">> & import("react").RefAttributes<HTMLElement>> & {
    Group: import("react").FC<import("antd/es/button").ButtonGroupProps>;
}, import("styled-components").DefaultTheme, {}, never>;

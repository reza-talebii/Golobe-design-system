/// <reference types="react" />
export declare const FormUiKitStyled: import("styled-components").StyledComponent<(<Values = any>(props: import("antd").FormProps<Values> & {
    children?: import("react").ReactNode;
} & {
    ref?: import("react").Ref<import("antd").FormInstance<Values>> | undefined;
}) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
    useForm: typeof import("antd/es/form/Form").useForm;
    useFormInstance: typeof import("antd/es/form/hooks/useFormInstance").default;
    useWatch: typeof import("rc-field-form/es/useWatch").default;
    Item: (<Values_1 = any>(props: import("antd").FormItemProps<Values_1>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) & {
        useStatus: () => {
            status?: "" | "warning" | "error" | "success" | "validating" | undefined;
            errors: import("react").ReactNode[];
            warnings: import("react").ReactNode[];
        };
    };
    List: import("react").FC<import("antd/es/form").FormListProps>;
    ErrorList: typeof import("antd/es/form/ErrorList").default;
    Provider: import("react").FC<import("antd/es/form/context").FormProviderProps>;
    create: () => void;
}, import("styled-components").DefaultTheme, {}, never>;

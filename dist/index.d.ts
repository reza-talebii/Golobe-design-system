import { FC, ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button';
import { CheckboxProps, FormProps, InputProps, InputNumberProps, SelectProps, TableProps, TabsProps } from 'antd';
import { Props } from 'react-input-mask';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { FilterFunc } from 'rc-select/lib/Select';
import { TextAreaProps } from 'antd/es/input/TextArea';
import * as styled_components from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { AliasToken, OverrideToken } from 'antd/es/theme/interface';

interface IProps$a extends ButtonProps {
    children?: ReactNode;
}
declare const ButtonUi: FC<IProps$a>;

interface IProps$9 extends CheckboxProps {
    children?: ReactNode;
}
declare const CheckboxUi: FC<IProps$9>;

interface IProps$8 extends FormProps {
    children?: ReactNode;
}
declare const FormUi: FC<IProps$8>;

interface IProps$7 extends InputProps {
    label?: string;
    icon?: ReactNode;
    wrapperClassName?: string;
}
declare const InputUi: FC<IProps$7>;

interface IProps$6 {
    label?: string;
    children: ReactNode;
    height?: string;
    icon?: ReactNode;
    className?: string;
    childrenContainerClassName?: string;
}
declare const FormControlUiKit: FC<IProps$6>;

interface IProps$5 extends InputNumberProps {
    label?: string;
}
declare const InputNumberUi: FC<IProps$5>;

interface IProps$4 extends Omit<Props, 'mask'> {
    mask?: string;
    haserror?: boolean;
    value?: string;
    label?: string;
}
declare const InputMuskUi: FC<IProps$4>;

interface IProps$3 extends InputProps {
    label?: string;
}
declare const InputPassword: FC<IProps$3>;

interface IProps$2 extends SelectProps<any, any> {
    label?: string;
    filterOption?: boolean | FilterFunc<BaseOptionType | DefaultOptionType>;
    wrapperClassName?: string;
}
declare const SelectUi: FC<IProps$2>;

interface IProps$1 extends TableProps<any> {
    wrapperClassName?: string;
}
declare const TableUi: FC<IProps$1>;

declare const TabsUi: FC<TabsProps>;

interface IProps extends TextAreaProps {
    label?: string;
    height?: string;
    value?: string;
}
declare const TextAreaUiKit: FC<IProps>;

declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

declare const antdThemeToken: Partial<AliasToken>;
declare const antdThemeComponents: OverrideToken;

declare const styledComponentsTheme: DefaultTheme;

export { ButtonUi, CheckboxUi, FormControlUiKit as FormControlUi, FormUi, GlobalStyle, InputMuskUi as InputMaskUi, InputNumberUi, InputPassword as InputPasswordUi, InputUi, SelectUi, TabsUi as TabUi, TableUi, TextAreaUiKit as TextAreaUi, antdThemeComponents, antdThemeToken, styledComponentsTheme };

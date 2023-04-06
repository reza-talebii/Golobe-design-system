import { FC, ReactNode } from 'react';
import { FormProps } from 'antd';
interface IProps extends FormProps {
    children?: ReactNode;
}
declare const FormUi: FC<IProps>;
export default FormUi;

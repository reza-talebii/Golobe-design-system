import { CheckboxProps } from 'antd';
import { FC, ReactNode } from 'react';
interface IProps extends CheckboxProps {
    children?: ReactNode;
}
declare const CheckboxUi: FC<IProps>;
export default CheckboxUi;

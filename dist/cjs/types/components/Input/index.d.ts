import { InputProps } from 'antd';
import { FC, ReactNode } from 'react';
interface IProps extends InputProps {
    label?: string;
    icon?: ReactNode;
    wrapperClassName?: string;
}
declare const InputUi: FC<IProps>;
export default InputUi;

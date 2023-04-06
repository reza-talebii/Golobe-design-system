import { FC } from 'react';
import { InputNumberProps } from 'antd';
interface IProps extends InputNumberProps {
    label?: string;
}
declare const InputNumberUi: FC<IProps>;
export default InputNumberUi;

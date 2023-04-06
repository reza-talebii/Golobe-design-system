import { TextAreaProps } from 'antd/es/input/TextArea';
import { FC } from 'react';
interface IProps extends TextAreaProps {
    label?: string;
    height?: string;
    value?: string;
}
declare const TextAreaUiKit: FC<IProps>;
export default TextAreaUiKit;

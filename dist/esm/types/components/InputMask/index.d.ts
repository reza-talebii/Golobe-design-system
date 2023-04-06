import { FC } from 'react';
import { Props as inputProps } from 'react-input-mask';
interface IProps extends Omit<inputProps, 'mask'> {
    mask?: string;
    haserror?: boolean;
    value?: string;
    label?: string;
}
declare const InputMuskUi: FC<IProps>;
export default InputMuskUi;

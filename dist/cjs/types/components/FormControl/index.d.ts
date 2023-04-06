import { FC, ReactNode } from 'react';
interface IProps {
    label?: string;
    children: ReactNode;
    height?: string;
    icon?: ReactNode;
    className?: string;
    childrenContainerClassName?: string;
}
declare const FormControlUiKit: FC<IProps>;
export default FormControlUiKit;

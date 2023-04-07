import { FC, ReactNode } from "react";
import { ButtonProps } from "antd/lib/button";
interface IProps extends ButtonProps {
    children?: ReactNode;
}
declare const ButtonUi: FC<IProps>;
export default ButtonUi;

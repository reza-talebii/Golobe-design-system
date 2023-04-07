import { FC } from "react";
import { SelectProps } from "antd";
import { BaseOptionType, DefaultOptionType } from "antd/es/select";
import { FilterFunc } from "rc-select/lib/Select";
interface IProps extends SelectProps<any, any> {
    label?: string;
    filterOption?: boolean | FilterFunc<BaseOptionType | DefaultOptionType>;
    wrapperClassName?: string;
}
declare const SelectUi: FC<IProps>;
export default SelectUi;

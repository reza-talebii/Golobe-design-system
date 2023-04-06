import { FC } from 'react';
import { TableProps } from 'antd';
interface IProps extends TableProps<any> {
    wrapperClassName?: string;
}
declare const TableUi: FC<IProps>;
export default TableUi;

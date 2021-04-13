import React, { FC } from 'react';
import Table from 'rc-table';
import { ITableProps } from '../propsType';
import './index.less';

const TablePage: FC<ITableProps> = props => {
  const { bordered = false, ...reset } = props;

  return (
    <div className={bordered ? 'alita-table-bordered' : ''}>
      <Table {...reset} prefixCls="alita-table" />
    </div>
  );
};

export default TablePage;

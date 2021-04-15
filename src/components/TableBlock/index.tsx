import React, { FC } from 'react';
import { TableHead } from '..';

interface TableBlockProps {}

const prefixCls = 'alita-table';

const TableBlock: FC<TableBlockProps> = props => {
  console.log(props);
  const { columns = [], data = [] } = props;
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-container`}>
        <table className={`${prefixCls}-table`}>
          <TableHead data={columns} />
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default TableBlock;

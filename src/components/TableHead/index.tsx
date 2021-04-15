import React, { FC } from 'react';
import { TableHeadProps } from '../../propsType';

const TableHead: FC<TableHeadProps> = props => {
  const { data = [] } = props;
  return (
    <thead>
      <tr>
        {data.map((th: any) => (
          <th key={th.key}>{th.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;

import React, { FC } from 'react';
import { Table } from '@alitajs/table';

export default () => {
  const dataSource = [];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      align: 'center',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      align: 'center',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      width: '60%',
    },
  ];

  return (
    <Table
      data={dataSource}
      columns={columns}
      rowKey="key"
      emptyText={() => <h1>No No No!</h1>}
    />
  );
};

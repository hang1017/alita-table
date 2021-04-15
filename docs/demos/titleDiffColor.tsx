import React from 'react';
import Table from '@alitajs/table';

export default () => {
  const dataSource = Array.from(new Array(6)).map((_val, i) => ({
    key: i,
    name: `小小${i}`,
    age: 32,
    address: '福建福州',
    phone: '1801111111',
  }));

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      align: 'center',
      styles: {
        backgroundColor: 'red',
        color: 'green',
      },
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
      width: '30%',
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
      key: 'phone',
      width: '30%',
    },
  ];

  return <Table data={dataSource} columns={columns} rowKey="key" />;
};

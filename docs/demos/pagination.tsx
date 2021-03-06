import React from 'react';
import Table from '@alitajs/table';

const dataSource = Array.from(new Array(40)).map((_val, i) => ({
  key: i,
  name: `小小${i}`,
  age: 32,
  address: '南京江宁南京江宁南京江宁南京江宁南京江宁南京江宁',
}));

export default () => {
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
    <Table data={dataSource} columns={columns} rowKey="key" showPagination />
  );
};

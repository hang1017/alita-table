import React, { FC } from 'react';
import { Table } from '@alitajs/table';

export default () => {
  const dataSource = Array.from(new Array(20)).map((_val, i) => ({
    key: i,
    name: `小小${i}`,
    age: 32,
    address: '南京江宁南京江宁南京江宁南京江宁南京江宁南京江宁',
    operate: 'xxxxxxxxxx',
  }));

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      align: 'center',
      fixed: 'left',
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
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width: '30%',
      align: 'center',
    },
  ];

  return (
    <Table scroll={{ x: 500, y: 500 }} data={dataSource} columns={columns} />
  );
};

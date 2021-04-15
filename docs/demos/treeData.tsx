import React from 'react';
import Table from '@alitajs/table';

export default () => {
  const dataSource = Array.from(new Array(6)).map((_val, i) => ({
    key: i,
    name: `小小${i}`,
    age: 32,
    address: '南京江宁南京江宁',
  })) as any[];

  dataSource.unshift({
    key: 999,
    name: `小小${999}`,
    age: 32,
    address: '南京江宁南京江宁',
    children: [
      {
        key: 11,
        name: `小小999-1`,
        age: 11,
        address: '南京江宁南京江宁',
        children: [
          {
            key: 112,
            name: `小小999-12`,
            age: 112,
            address: '南京江宁南京江宁',
          },
        ],
      },
      {
        key: 12,
        name: `小小999-2`,
        age: 12,
        address: '南京江宁南京江宁',
      },
    ],
  });

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
      align: 'left',
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
      width: '40%',
    },
  ];

  return (
    <div>
      <Table data={dataSource} columns={columns} indentSize={15} />
    </div>
  );
};

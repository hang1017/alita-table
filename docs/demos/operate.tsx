import React, { useState } from 'react';
import Table from '@alitajs/table';

export default () => {
  const dataSource = Array.from(new Array(8)).map((_val, i) => ({
    key: i,
    name: `小小${i}`,
    age: 32,
    address: '南京江宁南京江宁南京江宁南京江宁南京江宁南京江宁',
  }));
  const [data, setData] = useState(dataSource);

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
      width: '50%',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width: '30%',
      align: 'center',
      fixed: 'right',
      render: (text, record) => (
        <a
          onClick={() => {
            const list = data.filter(it => it.key !== record.key);
            setData(list);
          }}
        >
          delete {record.name}
        </a>
      ),
    },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      rowKey="key"
      scroll={{ x: 500, y: 500 }}
    />
  );
};

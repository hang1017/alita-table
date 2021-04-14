import React, { useRef } from 'react';
import Table, { LoadTableAttributes } from '@alitajs/table';
import request from 'umi-request';

export default () => {
  const tableRef = useRef<LoadTableAttributes>(null);
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

  async function query(req): Promise<any> {
    return new Promise(resolve => {
      request('/api/lessDataTable').then((res: any) => {
        console.log(res);
        /**
         * res 的数据接口：
         * total: number
         * data: Array
         */
        resolve(res);
      });
    });
  }

  return (
    <div>
      <button onClick={() => tableRef.current?.reloadDataSource()}>
        重新请求
      </button>
      <Table
        ref={tableRef}
        requestFunc={query}
        columns={columns}
        rowKey="key"
      />
    </div>
  );
};

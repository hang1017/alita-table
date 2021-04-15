import React from 'react';
import Table from '@alitajs/table';

export default () => {
  const dataSource = [
    { dimension: '年度目标完成情况', key: '0', a: 90, b: 32, c: 89 },
    { dimension: '年度目标完成情况', key: '1', a: 90, b: 32, c: 89 },
    { dimension: '组织能力建设', key: '2', a: 90, c: 89 },
    { dimension: '学习成长', key: '3', a: 90, c: 89 },
    { dimension: '工作规划', key: '4', a: 90, b: 32, c: 89 },
    { dimension: '工作规划', key: '5', a: 90, b: 32, c: 89 },
    { dimension: '平均分', key: '6', a: 90, b: 32, c: 89 },
  ];

  const columns = [
    {
      title: '评分维度',
      dataIndex: 'dimension',
      key: 'dimension',
      width: '25%',
      align: 'center',
      render(o, _row, index) {
        console.log(o);
        const obj: any = {
          children: o,
          props: {},
        };
        // 这里操作的是年度目标完成情况
        if (index === 0) {
          obj.props.rowSpan = 2;
        }
        if (index === 1) {
          obj.props.rowSpan = 0;
        }
        // 这里操作的是工作规划
        if (index === 4) {
          obj.props.rowSpan = 2;
        }
        if (index === 5) {
          obj.props.rowSpan = 0;
        }
        // 这里对内容进行特殊处理
        if (index === 6) {
          obj.children = (
            <div
              style={{
                color: '#1776FE',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                lineHeight: 3,
                background: 'rgba(247, 130, 147, 0.3)',
              }}
            >
              {o}
            </div>
          );
        }
        return obj;
      },
    },
    {
      title: '评委a和评委b',
      dataIndex: 'a',
      key: 'a',
      width: '25%',
      colSpan: 2,
      align: 'center',
      render(o, _row, index) {
        const obj: any = {
          children: o,
          props: {},
        };
        // 这里操作的是组织能力建设
        if (index === 2) {
          obj.props.colSpan = 2;
        }
        // 这里操作的是学习成长
        if (index === 3) {
          obj.props.colSpan = 2;
        }
        return obj;
      },
    },
    {
      title: '评委b',
      dataIndex: 'b',
      key: 'b',
      colSpan: 0,
      width: '25%',
      align: 'center',
      render(o, _row, index) {
        const obj: any = {
          children: o,
          props: {},
        };
        // 这里操作的是组织能力建设
        if (index === 2) {
          obj.props.colSpan = 0;
        }
        // 这里操作的是学习成长
        if (index === 3) {
          obj.props.colSpan = 0;
        }
        return obj;
      },
    },
    {
      title: '评委c',
      dataIndex: 'c',
      key: 'c',
      width: '25%',
      align: 'center',
    },
  ];

  return <Table data={dataSource} columns={columns} rowKey="key" bordered />;
};

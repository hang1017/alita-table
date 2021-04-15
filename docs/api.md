---
title: API
group:
  title: 开发指南
nav:
  title: 文档
  path: /docs
---

## API

| 参数               | 说明                     | 类型                          | 默认值 | 是否必填 |
| ------------------ | ------------------------ | ----------------------------- | ------ | -------- |
| data               | 数据结构                 | any[]                         | []     | 否       |
| bordered           | 是否有表格边框           | boolean                       | false  | 否       |
| emptyText          | 缺醒图                   | string \| node                | ''     | 否       |
| showPagination     | 是否展示分页             | boolean                       | false  | 否       |
| showRequestAllData | 自动请求是否请求全部数据 | boolean                       | true   | 否       |
| pageSize           | 一页多少条数据           | number                        | 5      | 否       |
| ref                | ref                      | any                           | -      | 否       |
| requestFunc        | 请求                     | (params: any) => Promise<any> | -      | 否       |
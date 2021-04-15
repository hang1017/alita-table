import React, {
  FC,
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import Table from 'rc-table';
import classnames from 'classnames';
import useRequest from '@ahooksjs/use-request';
import { Pagination } from '../components';
import { ITableProps } from '../propsType';
import './index.less';

export interface LoadTableAttributes {
  reloadDataSource: () => void;
}

const prefixCls = 'alita-table';

const TablePage: FC<ITableProps> = forwardRef((props, ref) => {
  const [currentData, setCurrentData] = useState<ITableProps['data']>([]);
  const {
    data,
    bordered = false,
    requestFunc,
    emptyText,
    showPagination = false,
    showRequestAllData = true,
    pageSize = 5,
    oddAndEven = false,
    ...reset
  } = props;
  const [paginationData, setPaginationData] = useState({
    current: 1,
    pageSize,
    total: 0,
  });

  async function asyncFn(abc: any): Promise<any> {
    return new Promise(resolve => {
      const { current, pageSize } = abc;
      if (requestFunc)
        requestFunc({
          current,
          pageSize,
        }).then((res: any) => {
          resolve(res);
        });
    });
  }

  const TableReqFun = useRequest(asyncFn, {
    manual: true,
  });

  const resetCurrentData = (reqData: any, paData: any) => {
    if (!reqData.data) return;
    setCurrentData(reqData.data.slice(0, paginationData?.pageSize));
    setPaginationData({
      ...paData,
      total: reqData.total || reqData.data?.length,
    });
  };

  useEffect(() => {
    if (requestFunc) TableReqFun.run(paginationData);
    if (!data) return;
    if (!showPagination) {
      setCurrentData(data);
      return;
    }
    resetCurrentData(
      {
        data,
      },
      paginationData,
    );
  }, [data]);

  useImperativeHandle(ref, () => ({
    reloadDataSource: () => {
      if (requestFunc) {
        const newPaginationData = { ...paginationData };
        if (showRequestAllData) {
          newPaginationData.current = 1;
        }
        TableReqFun.run(newPaginationData);
        setPaginationData(newPaginationData);
      }
    },
  }));

  useEffect(() => {
    if (!!TableReqFun?.data?.data && showPagination) {
      resetCurrentData(TableReqFun?.data, paginationData);
    }
  }, [TableReqFun?.data]);

  const pageOnChange = (current: number, size: number) => {
    let totalData = data;
    if (requestFunc) totalData = TableReqFun?.data?.data;
    if (showRequestAllData) {
      const rightCurrent = current - 1;
      setCurrentData(
        totalData.slice(
          rightCurrent * size,
          rightCurrent * size + paginationData?.pageSize,
        ),
      );
      setPaginationData({
        ...paginationData,
        current,
      });
    } else {
      if (requestFunc) {
        TableReqFun.run({ ...paginationData, current });
        setPaginationData({
          ...paginationData,
          current,
        });
      }
    }
  };

  return (
    <div
      className={classnames({
        [`${prefixCls}-bordered`]: bordered,
        [`${prefixCls}-row-odd-even`]: oddAndEven,
      })}
    >
      <Table
        data={
          currentData && currentData.length
            ? currentData
            : TableReqFun?.data?.data
        }
        {...reset}
        prefixCls={prefixCls}
        emptyText={
          TableReqFun && TableReqFun?.loading ? '数据加载中...' : emptyText
        }
      />
      {showPagination && (
        <Pagination paginationData={paginationData} onChange={pageOnChange} />
      )}
    </div>
  );
});

export default TablePage;

import React, {
  FC,
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from 'react';
import Table from 'rc-table';
import useRequest from '@ahooksjs/use-request';
import { Pagination } from '../components';
import { ITableProps } from '../propsType';
import './index.less';

export interface LoadTableAttributes {
  reloadDataSource: () => void;
}

const TablePage: FC<ITableProps> = forwardRef((props, ref) => {
  const [paginationData, setPaginationData] = useState({
    current: 1,
    total: 0,
  });
  const [currentData, setCurrentData] = useState<ITableProps['data']>([]);
  const {
    data = [],
    bordered = false,
    requestFunc,
    emptyText,
    showPagination = false,
    showRequestAllData = true,
    ...reset
  } = props;

  async function noRequestFunc(): Promise<any> {
    return new Promise(() => {});
  }
  const TableReqFun = useRequest(requestFunc || noRequestFunc, {
    manual: true,
  });

  const resetCurrentData = (list: ITableProps['data'], paData: any) => {
    if (!list) return;
    setCurrentData(list.slice(0, 5));

    setPaginationData({
      ...paData,
      total: list?.length,
    });
  };

  useEffect(() => {
    if (requestFunc) TableReqFun.run({});
    if (!data) return;
    if (!showPagination) {
      setCurrentData(data);
      return;
    }
    resetCurrentData(data, paginationData);
  }, []);

  useImperativeHandle(ref, () => ({
    reloadDataSource: TableReqFun?.run,
  }));

  useEffect(() => {
    if (!!TableReqFun?.data?.data && showPagination) {
      resetCurrentData(TableReqFun?.data?.data, paginationData);
    }
  }, [TableReqFun?.data?.data]);

  const pageOnChange = (current: number, size: number) => {
    let totalData = data;
    if (requestFunc) totalData = TableReqFun?.data?.data;
    const rightCurrent = current - 1;
    setCurrentData(
      totalData.slice(rightCurrent * size, rightCurrent * size + 5),
    );
    setPaginationData({
      ...paginationData,
      current,
    });
  };

  return (
    <div className={bordered ? 'alita-table-bordered' : ''}>
      <Table
        data={
          currentData && currentData.length
            ? currentData
            : TableReqFun?.data?.data
        }
        {...reset}
        prefixCls="alita-table"
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

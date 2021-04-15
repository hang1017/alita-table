export interface ITableProps {
  bordered?: boolean;
  emptyText?: string | React.ReactNode;
  data?: any[];
  requestFunc?: (params: any) => Promise<any>;
  ref?: any;
  showPagination: boolean;
  showRequestAllData?: boolean;
  pageSize?: number;
}

export interface TableColumnsProps {
  title: string;
  dataIndex: string | number;
  key: string | number;
  width?: string | number;
  align?: 'left' | 'right' | 'center';
}

export interface TableHeadProps {
  data: TableColumnsProps[];
}

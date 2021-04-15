export interface ITableProps {
  bordered?: boolean;
  emptyText?: string | React.ReactNode;
  data?: any[];
  requestFunc?: (params: any) => Promise<any>;
  ref?: any;
  showPagination: boolean;
  showRequestAllData?: boolean;
  pageSize?: number;
  oddAndEven?: boolean;
}

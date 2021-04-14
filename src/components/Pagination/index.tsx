import React, { FC } from 'react';
import Pagination from 'rc-pagination';
import 'rc-select/assets/index.less';
import './index.less';

interface paginationDataProps {
  current: number;
  total: number;
}

interface PaginationPageProps {
  paginationData: paginationDataProps;
  onChange: (current: number, size: number) => void;
}

const PaginationPage: FC<PaginationPageProps> = props => {
  const { paginationData, onChange } = props;
  return (
    <div className="alita-table-pagination">
      <Pagination
        prefixCls="alita-pagination"
        {...paginationData}
        onChange={onChange}
      />
    </div>
  );
};

export default PaginationPage;

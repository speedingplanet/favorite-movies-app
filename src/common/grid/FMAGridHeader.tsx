import React from 'react';
import { FMAGridColumnConfig } from './FMAGrid';
import FMAGridHeaderCell from './FMAGridHeaderCell';

interface FMAGridHeaderProps<T> {
  columns: FMAGridColumnConfig<T>[];
}

export default function FMAGridHeader<T>({ columns }: FMAGridHeaderProps<T>) {
  let headers = columns.map((column) => {
    return (
      <FMAGridHeaderCell
        key={column.field as React.Key}
        column={column}
      />
    );
  });

  return <>{headers}</>;
}

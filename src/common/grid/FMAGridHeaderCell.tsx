import React from 'react';
import { FMAGridColumnConfig } from './FMAGrid';

interface FMAGridHeaderCellProps<T> {
  column: FMAGridColumnConfig<T>;
}

export default function FMAGridHeaderCell<T>({ column }: FMAGridHeaderCellProps<T>) {
  return <div className="fma-grid-header clickable">{column.label}</div>;
}

import React from 'react';
import './fma-grid.css';
import FMAGridBody from './FMAGridBody';
import FMAGridHeader from './FMAGridHeader';

type SortDirection = 'asc' | 'desc' | undefined;

interface SortConfig<T> {
  sortColumn: keyof T | undefined;
  sortDirection: SortDirection;
}

export interface FMAGridColumnConfig<K> {
  field: keyof K;
  label: string;
}

interface FMAGridProps<T> {
  columns: FMAGridColumnConfig<T>[];
  records: T[];
}

export default function FMAGrid<T>({ columns, records }: FMAGridProps<T>) {
  let cssColumnStyle = {
    gridTemplateColumns: `repeat(${columns.length}, minmax(max-content, 1fr))`,
  };

  return (
    <section
      className="fma-grid-container"
      style={cssColumnStyle}>
      <FMAGridHeader columns={columns} />
      <FMAGridBody
        columns={columns}
        records={records}
      />
    </section>
  );
}

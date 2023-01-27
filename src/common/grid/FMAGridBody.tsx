import React from 'react';
import { FMAGridColumnConfig } from './FMAGrid';

interface FMAGridBodyProps<T> {
  records: T[];
  columns: FMAGridColumnConfig<T>[];
}

export default function FMAGridBody<T>({ records, columns }: FMAGridBodyProps<T>) {
  console.log('records:', records);
  console.log('columns:', columns);
  return (
    <>
      {/* Looping over each record */}
      {records.map((record) => {
        // Declare as a string explicitly, because React typing is weird
        return columns.map((column) => <div>{record[column.field] as string}</div>);
      })}
    </>
  );
}

import React from "react";
import DataTable from "react-data-table-component";
import { Styles } from "./style";

const BaseDataTable = (props) => {
  return (
    <Styles>
      <DataTable
        dense
        {...props}
      />
    </Styles>
  );
};

export default BaseDataTable;
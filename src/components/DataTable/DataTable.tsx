import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import './DataTable.scss'

interface Props {
  columns: GridColDef[];
  rows: object[];
}

const DataTable = ({ columns, rows }: Props) => {
  return (
    <div className="data-grid">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;

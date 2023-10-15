import DataTable from "@components/DataTable/DataTable";
import Modal from "@components/Modal/Modal";
import "./Products.scss";
import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { IFormInterface } from "@interfaces/IFormInterface";
import data from "../../../public/app.json";
import { products } from "../../data";

const Products = () => {
  const [form, setForm] = useState<IFormInterface[]>([]);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

  const [open, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(!open);
  }

  useEffect(() => {
    setForm(data.productForm);
  }, []);

  return (
    <div className="products">
      <Modal open={open} handleClose={handleClose} form={form} />
      <div className="heading">
        <h1>Products</h1>
        <button onClick={() => setIsOpen(!open)}>Add Product</button>
      </div>
      <div className="data-grid">
        <DataTable columns={columns} rows={products} />
      </div>
    </div>
  );
};

export default Products;

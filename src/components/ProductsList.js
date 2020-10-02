import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductsList = ({ productsData, deleteProduct, handleClickModal }) => {
  const classes = useStyles();

  return (
    <>
      <h3 class="table-label">
        Available Products (
        {productsData.products && productsData.products.length} Items)
      </h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Stok</TableCell>
              <TableCell align="center">Transaction</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsData.products &&
              productsData.products.map((item) => (
                <TableRow key={item.productId}>
                  <TableCell component="th" scope="row">
                    {item.productName}
                  </TableCell>
                  <TableCell align="right">{item.categoryName}</TableCell>
                  <TableCell align="right">{item.inventoryNumber}</TableCell>
                  <TableCell align="center">
                    <button
                      onClick={() => handleClickModal(item.productId)}
                      className="button button-list"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => deleteProduct(item.productId)}
                      className="button button-list"
                    >
                      Sil
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsList;

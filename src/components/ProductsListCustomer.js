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

const ProductsListCustomer = ({ productsData, handleRequestClick }) => {
  const classes = useStyles();
  return (
    <>
      <h3 class="table-label">
        Mevcut Ürünler ({productsData.products && productsData.products.length}{' '}
        adet)
      </h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ürün İsmi</TableCell>
              <TableCell align="right">Kategori</TableCell>
              <TableCell align="right">Stok</TableCell>
              <TableCell align="center">İşlem</TableCell>
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
                    {item.inventoryNumber === 0 ? (
                      <button class="button button-list disabled" disabled>
                        Talep Et
                      </button>
                    ) : (
                      <button
                        class="button button-list"
                        onClick={() => handleRequestClick(item.productId)}
                      >
                        Talep Et
                      </button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductsListCustomer;

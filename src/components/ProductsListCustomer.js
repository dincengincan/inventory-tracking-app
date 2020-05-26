import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProductsListCustomer = ({ productsData, handleRequestClick }) => {
  const classes = useStyles();
  return (
    <div>
      <h2>
        Mevcut Ürünler (Toplam{' '}
        {productsData.products && productsData.products.length} adet)
      </h2>
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
                      <Button
                        disabled
                        variant="contained"
                        color="primary"
                        onClick={() => handleRequestClick(item.productId)}
                      >
                        Talep Et
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleRequestClick(item.productId)}
                      >
                        Talep Et
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsListCustomer;

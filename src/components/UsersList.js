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

const UsersList = ({ loginUserData, deleteUser, handleClickModal }) => {
  const classes = useStyles();
  return (
    <>
      <h3 class="table-label">
        Mevcut Kullanıcılar ({loginUserData.users && loginUserData.users.length}{' '}
        adet)
      </h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Kullanıcı Adı</TableCell>
              <TableCell align="right">Ad</TableCell>
              <TableCell align="right">Soyad</TableCell>
              <TableCell align="right">Kullanıcı Tipi</TableCell>
              <TableCell align="right">Parola</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="center">İşlem</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loginUserData.users &&
              loginUserData.users.map((item) => (
                <TableRow key={item.customerId}>
                  <TableCell component="th" scope="row">
                    {item.username}
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.surname}</TableCell>
                  <TableCell align="right">{item.userType}</TableCell>
                  <TableCell align="right">{item.password}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="center">
                    <button
                      onClick={() => handleClickModal(item.customerId)}
                      className="button button-list"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => deleteUser(item.customerId)}
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

export default UsersList;

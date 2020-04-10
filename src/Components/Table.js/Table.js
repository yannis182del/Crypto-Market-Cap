import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { TableDiv } from "./style";
import { marketCapUrl, COLOR_GREEN, COLOR_RED } from "../../common/common";
import axios from "axios";

const useStyles = makeStyles({
  red: { color: COLOR_RED },
  green: { color: COLOR_GREEN },
});

export default function MarketCapTable() {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(250);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [page, setPage] = React.useState(0);
  const classes = useStyles();

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (event) => {
    await setRowsPerPage(+event.target.value);
  };

  const fetchData = async () => {
    const result = await axios(marketCapUrl(number));
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableDiv>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Prix</TableCell>
              <TableCell align="left">Volume(24h)</TableCell>
              <TableCell align="left">Variation (24h)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <TableRow key={data.id}>
                  <TableCell component="th" scope="data">
                    {data.market_cap_rank}
                  </TableCell>
                  <TableCell align="left">
                    <p style={{ fontSize: "15px", fontWeight: 500 }}>
                      <img width="30px" height="30px" src={data.image} />
                      {data.name}
                    </p>
                  </TableCell>
                  <TableCell align="left">${data.current_price}</TableCell>
                  <TableCell align="left">{data.total_volume}</TableCell>
                  <TableCell
                    className={
                      data.price_change_percentage_24h < 0
                        ? classes.red
                        : classes.green
                    }
                    align="left"
                  >
                    {parseFloat(data.price_change_percentage_24h).toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableDiv>
  );
}

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { TableDiv, TableText } from "./style";
import NumberFormat from "react-number-format";
import { globalExhanges, COLOR_GREEN, COLOR_RED } from "../../common/common";
import axios from "axios";
import { useData } from "./hooks";

const useStyles = makeStyles({
  red: { color: COLOR_RED, fontWeight: 500 },
  green: { color: COLOR_GREEN, fontWeight: 500 },
});

export default function MarketTable() {
  const [data, setData] = useData([]);
  const [rowsPerPage, setRowsPerPage] = useData(20);
  const [page, setPage] = useData(0);
  const classes = useStyles();
  const rowPerPage = [10, 25, 100, 250];

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (event) => {
    await setRowsPerPage(+event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(globalExhanges);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <TableDiv>
      <TablePagination
        rowsPerPageOptions={rowPerPage}
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
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Country</TableCell>
              <TableCell align="left">Volume(24h) in BTC</TableCell>
              <TableCell align="left">Trust Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <TableRow key={data.id}>
                  <TableCell component="th" scope="data" align="left">
                    <div style={{ display: "flex" }}>
                      <img
                        width="20px"
                        alt="logo"
                        height="20px"
                        src={data.image}
                      />
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: 500,
                          marginLeft: 10,
                        }}
                      >
                        {data.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <TableText>{data.country}</TableText>
                  </TableCell>
                  <TableCell align="left">
                    <TableText>
                      ₿
                      <NumberFormat
                        value={parseFloat(data.trade_volume_24h_btc).toFixed(0)}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </TableText>
                  </TableCell>
                  <TableCell align="left">{data.trust_score}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableDiv>
  );
}

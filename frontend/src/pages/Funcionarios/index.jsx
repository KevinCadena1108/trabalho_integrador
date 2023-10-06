import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Grid, Link, Stack, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Funcionarios = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("KEVIN", 159, 6.0, 24, 4.0),
    createData("KEVIN", 237, 9.0, 37, 4.3),
    createData("KEVIN", 262, 16.0, 24, 6.0),
    createData("KEVIN", 305, 3.7, 67, 4.3),
    createData("KEVIN", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <Grid container my={3} direction="row" alignItems="center">
        <Grid item xs={2} sx={{ textAlign: "center" }}>
          {" "}
          <Link href = "/">
          <ArrowBackIcon fontSize="large" />{" "}
          </Link>
        </Grid>
        <Grid item sm={3} xs={2}>
          {" "}
        </Grid>

        <Grid item xs={2}>
          {" "}
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            {" "}
            Funcionários{" "}
          </Typography>{" "}
        </Grid>
      </Grid>

      <Container className="tabela">
        <Stack
          my={3}
          useFlexGap
          direction={"row"}
          justifyContent={{ xs: "center", sm: "flex-end" }}
          alignItems={"center"}
        >
          <Button variant="contained">Cadastrar</Button>
        </Stack>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                  <TableCell>
                    <DeleteOutlineIcon />
                  </TableCell>
                  <TableCell>
                    <EditIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
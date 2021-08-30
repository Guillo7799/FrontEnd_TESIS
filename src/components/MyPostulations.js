import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import withAuth from "@/hocs/withAuth";
import Loading from "@/components/Loading";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  confirmation: {
    paddingLeft: 55,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const MyPostulations = (props) => {
  const classes = useStyles();
  const { user } = useAuth();
  const { data, error } = useSWR(`/users/applications/${user.id}`, fetcher);

  if (error) return <div>No se pudo cargar sus postulaciones</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  // render data
  return (
    <>
      {data ? (
        <Grid container direction="column">
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell
                    align="center"
                    style={{ width: 150, background: "#094275" }}
                  >
                    Mensaje de Postulación
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    style={{ width: 100, background: "#094275" }}
                  >
                    Nombre de la empresa
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    style={{ width: 150, background: "#094275" }}
                  >
                    Estado de postulación
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.data.map((mypostulation) => (
                  <StyledTableRow key={mypostulation.id}>
                    <StyledTableCell align="left">
                      {mypostulation.message}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {mypostulation.business_name}
                    </StyledTableCell>
                    {mypostulation.status === "Por Contactar" ? (
                      <>
                        <StyledTableCell
                          align="center"
                          style={{ color: "#1EC000" }}
                        >
                          {mypostulation.status}
                        </StyledTableCell>
                      </>
                    ) : (
                      <>
                        {mypostulation.status === "Revisado" ? (
                          <>
                            <StyledTableCell
                              align="center"
                              style={{ color: "red" }}
                            >
                              {mypostulation.status}
                            </StyledTableCell>
                          </>
                        ) : (
                          <>
                            <StyledTableCell align="center">
                              {mypostulation.status}
                            </StyledTableCell>
                          </>
                        )}
                      </>
                    )}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <br />
          <br />
          <br />
        </Grid>
      ) : (
        <>
          <div className={classes.confirmation}>
            <p>
              <img
                src="https://img.freepik.com/vector-gratis/personaje-dibujos-animados-plantea-hombre-pensando-icono-signo-interrogacion-globo_61103-1093.jpg?size=626&ext=jpg"
                alt="Sin postulación"
                width={150}
                height={150}
              />
              <strong>No ha postulado a ninguna oferta</strong>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default withAuth(MyPostulations);

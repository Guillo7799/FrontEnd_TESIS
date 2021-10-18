import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import Routes from "src/constants/routes";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Grid,
  Button,
} from "@material-ui/core";
import Image from "next/image";
import Loading from "@/components/Loading";
import EditStatus from "@/components/EditStatus";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1000%",
    borderColor: "#094275",
    textAlign: "center",
    content: "center",
  },
  media: {
    height: 140,
  },
  title: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  confirmation: {
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#F77272",
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

export default function BasicModal(props) {
  console.log("PublicationID", props.publications);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const { user } = useAuth();
  const { data: ApplicationData, error } = useSWR(
    `/publications/${props.publications}/applications`,
    fetcher
  );
  if (error) return <div>No se pudo cargar las postulaciones</div>;
  if (!ApplicationData) return <Loading />;

  console.log("infoApp", ApplicationData);

  return (
    <div style={{ textAlign: "center" }}>
      <Button style={{ backgroundColor: "#F77272" }} onClick={handleOpen}>
        Ver Postulaciones
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {ApplicationData ? (
            <Grid
              container
              direction="column"
              style={{
                justifyContent: "space-between",
                textAlign: "center",
              }}
            >
              <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center" style={{ width: 75 }}>
                        Curriculum
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{ width: 150 }}>
                        Nombre de Postulante
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{ width: 150 }}>
                        Apellido de Postulante
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{ width: 250 }}>
                        Mensaje
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{ width: 250 }}>
                        Descripción de mi publicación
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{ width: 10 }}>
                        Estado de postulación
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ApplicationData.data.map((application) => (
                      <StyledTableRow key={application.id}>
                        <StyledTableCell align="center">
                          <Link
                            href={`${Routes.CURRICULUMS}/${application.user}`}
                          >
                            <Button size="small" color="primary">
                              Ver Perfil
                            </Button>
                          </Link>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {application.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {application.last_name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {application.message}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {application.description}
                        </StyledTableCell>
                        <StyledTableCell
                          align="center"
                          style={{ fontSize: 15 }}
                        >
                          {application.status}{" "}
                          <EditStatus application={application} />
                        </StyledTableCell>
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
                <Image
                  src="https://image.flaticon.com/icons/png/512/1458/1458503.png"
                  alt="Sin Postulación"
                  width={150}
                  height={150}
                />
                <p>Vaya! No tiene postulaciones de Practicantes</p>
              </div>
              <br />
              <br />
              <br />
              <br />
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

import { useSelector, useDispatch } from 'react-redux'

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TablePagination } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteRestaurant, getRestaurant } from '../redux/Restaurant/action';
import { useNavigate, useSearchParams } from 'react-router-dom';

function createData(id, name, address, contact, email, description, createdAt) {
  return {
    id,
    name,
    address,
    contact,
    email,
    description,
    createdAt,
    history: [
      {
        createdAt,
        email,
        description,
      }
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleEditRestaurant(id){
    console.log(id);
    navigate(`/Edit-Restaurant/${id}`)
  }
  function handleDeleteRestaurant(id){
    console.log(id);
    dispatch(deleteRestaurant(id))
    dispatch(getRestaurant())
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.contact}</TableCell>
        <TableCell align="right"><EditIcon onClick={() => handleEditRestaurant(row.id)} /></TableCell>
        <TableCell align="right"><DeleteIcon onClick={() => handleDeleteRestaurant(row.id)} /></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Created Date</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align="right">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {historyRow.createdAt}
                      </TableCell>
                      <TableCell>{historyRow.email}</TableCell>
                      <TableCell align="right">{historyRow.description}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function Restaurant() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([])
  const dispatch = useDispatch()
  const [searchParams, setsearchParams] = useSearchParams()

  const restaurants = useSelector((state) => state.restaurant.restaurant);

  const params = {}
  if (searchParams.getAll('search')) {
    params.search = searchParams.getAll('search')
  }

  React.useEffect(() => {
    dispatch(getRestaurant(params))
  }, [searchParams])

  React.useEffect(() => {
    const data = []
    for (let item of restaurants) {
      data.push(createData(item.id, item.name, item.address, item.contact, item.email, item.description, item.createdAt))
    }
    setRows(data)
  }, [restaurants])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Restaurant Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <Row key={i} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>

  );
}
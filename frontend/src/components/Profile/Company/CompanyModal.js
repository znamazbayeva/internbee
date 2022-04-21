import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../Profile.module.scss";
import Grid from "@mui/material/Grid";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { editCompanyAddr, showCompany } from "../../../actions/company";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -100%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

function CompanyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [company, setCompany] = useState(null);
  const [address, setAddress] = useState(null);

  const handleAddressChange = (e) => {
    console.log("handle");
    console.log(e.target.value);
    setAddress(e.target.value);
  };

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/company/${state.user_id}`)
      .then((response) => {
        console.log(response.data);
        dispatch(showCompany(response.data));
        setCompany(response.data);
        setAddress(response.data.address);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, [dispatch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("START OF DISPATCH");
    dispatch(editCompanyAddr(address, state.user_id));
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "#663399",
          color: "#fcfaff",
          width: "100%",
        }}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="m odal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleFormSubmit}>
            <Grid container>
              <Grid item xs={6}>
                <Input label="Email" name="email" value="email@email" />
                <input
                  // label="Address"
                  name="address"
                  value={address}
                  onChange={(e) => handleAddressChange(e)}
                />
                <Input label="Email" name="email" value="email@email" />
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Button onClick={handleFormSubmit}>Submit</Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export default CompanyModal;

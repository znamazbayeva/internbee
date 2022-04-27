import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Input from "./Input";
import { useToasts } from "react-toast-notifications";

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
  const { addToast } = useToasts();
  const state = useSelector((state) => state.auth);
  console.log(state);
  const token = state.token;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [company, setCompany] = useState(null);
  const [address, setAddress] = useState(null);
  const [description, setDescription] = useState(null);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleFormSubmit = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    };
    const body = JSON.stringify({
      address,
      description,
    });

    axios
      .put(
        `http://127.0.0.1:8000/v1/api/company/edit/${state.cid}/`,
        body,
        config
      )
      .then((res) => {
        setCompany(res.data);
        setAddress(res.data.address);
        setDescription(res.data.description);
        addToast("Saved Successfully", { appearance: "success" });
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
        // console.log(err.response.data);
      });
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/v1/api/company/${state.user_id}`)
      .then((response) => {
        setCompany(response.data);
        setAddress(response.data.address);
        setDescription(response.data.description);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

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
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleFormSubmit}>
            <Grid container>
              <Grid item xs={6}>
                <input
                  label="Address"
                  value={address}
                  onChange={(e) => handleAddressChange(e)}
                />
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

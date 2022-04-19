import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../Profile.module.scss";
import Grid from "@mui/material/Grid";
import Input from "./Input";
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <form>
            <Grid container>
              <Grid item xs={6}>
                <Input label="Email" name="email" value="email@email" />
              </Grid>
              <Grid item xs={6}>
                <div>
                  <Button>Submit</Button>
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

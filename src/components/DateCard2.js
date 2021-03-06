import {
  Grid,
  Card,
  Box,
  Divider,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";

import { blue } from "@mui/material/colors";
import StayPeriod from "../forms/StayPeriod";

// By Darshan

function DateCard2({checkIn,checkOut}) 
{
  // console.log(checkIn,checkOut)
  var checkin = new Date(`${checkIn}`);


  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var checkout = new Date(`${checkOut}`);




  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 2,
        }}
      >
        <Box sx={{paddingX:2}}>
          <Typography sx={{ fontWeight: 600 }}>CHECK-IN</Typography>
          <Typography>{checkin.getDate()}  {day[checkin.getDay()]},{month[checkin.getMonth()]} {checkin.getFullYear()}</Typography>
          <Typography>From {checkin.getHours()}:{checkin.getMinutes() == 0 ? <>00</> : checkin.getMinutes() } PM</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{paddingX:2}}>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>
            CHECK-OUT
          </Typography>
          <Typography  >{checkout.getDate()}  {day[checkout.getDay()]},{month[checkin.getMonth()]} {checkout.getFullYear()}</Typography>
          <Typography>Until {checkout.getHours()}:{checkout.getMinutes() == 0 ? <>00</> : checkout.getMinutes()} AM</Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            onClick={handleClickOpen}
            sx={{ color: "dodgerBlue", paddingY: 2 }}
          >
            Modify Dates
          </Typography>
          <Dialog
            maxWidth="xs"
            fullWidth={true}
            open={open}
            onClose={handleClose}
          >
            <DialogTitle
              bgcolor={blue[500]}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ marginBottom: 5 }}
            >
              <Typography variant="h6">Change Stay Period</Typography>
            </DialogTitle>
            {/* <Divider/> */}
            <DialogContent>
              <StayPeriod></StayPeriod>
            </DialogContent>
          </Dialog>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() =>
            navigate("/transport", { state: { reqType: "pickup" } })
          }
        >
          <Typography sx={{ color: "dodgerBlue", paddingY: 2 }}>
            Request Pick-up
          </Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() =>
            navigate("/transport", { state: { reqType: "dropoff" } })
          }
        >
          <Typography sx={{ color: "dodgerBlue", paddingY: 2 }}>
            Request Drop-up
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "dodgerBlue", paddingY: 2 }}>
            View Recipt
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "red", paddingY: 2 }}>
            Cancel Booking
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default DateCard2;

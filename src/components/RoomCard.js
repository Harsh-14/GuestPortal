import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

// icons
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import { useNavigate } from "react-router-dom";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

// By Darshan
export default function RoomCard({ rooms,child,adult }) {
  const navigate = useNavigate();
  return (
    <div onClick={(e) => navigate("/booking")}>
      <Paper
        sx={{
          p: 1,
          margin: "auto",
          maxWidth: 2000,
          flexGrow: 1,
        }}
      >
        {rooms.map((item) => {
          return (
            <>
              <Grid container spacing={2} md={12}>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    mr={4}
                    sx={{ fontWeight: 600 }}
                  >
                    ROOM 1
                  </Typography>

                  <ButtonBase sx={{ width: 100, height: 100 }}>
                    <Img
                      alt="complex"
                      src="https://images.unsplash.com/photo-1634072319894-107e61606191?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={8} sm container sx={{ mt: 3 }}>
                  <Grid item xs container direction="column">
                    <Grid
                      item
                      xs
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <HotelOutlinedIcon
                          sx={{ fontSize: "17px", color: "GrayText", pr: 1 }}
                        />{" "}
                        {rooms}
                      </Typography>
                      <Typography variant="subtitle1">
                        {" "}
                        <PeopleOutlineRoundedIcon
                          sx={{ fontSize: "17px", color: "GrayText", pr: 1 }}
                        />
                        {adult} Adults, {child} Child
                      </Typography>
                      <Typography>
                        <RestaurantRoundedIcon
                          sx={{ fontSize: "17px", color: "GrayText", pr: 1 }}
                        />
                        CP(Breackfast included)
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <br />
            </>
          );
        })}
      </Paper>
      {/*  */}
    </div>
  );
}

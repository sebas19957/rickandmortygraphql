import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import useStyles from './style';
import DialogScreen from './../dialog/DialogScreen';

type CardScreenProps = {
  data: {
    name: string;
    image: string;
  };
};

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: '#B4DEF4',
    '&:hover': {
      backgroundColor: '#B4DEF4',
    },
  },
}))(Button);

const CardScreen = ({ data }: CardScreenProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card elevation={4} className={classes.cardLarge}>
        <CardContent>
          <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Box paddingBottom={3}>
              <Grid>
                <Avatar
                  alt={data.name}
                  src={data.image}
                  className={classes.large}
                />
              </Grid>
            </Box>
            <Grid container item>
              <Grid container justify="center" alignItems="center">
                <Box marginBottom={1}>
                  <Typography>{data.name}</Typography>
                </Box>
              </Grid>
              <Grid container justify="center" alignItems="center">
                <ColorButton onClick={handleOpen}>See more</ColorButton>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <DialogScreen open={open} data={data} handleClose={handleClose} />
    </>
  );
};

export default CardScreen;

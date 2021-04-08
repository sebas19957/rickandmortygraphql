import {
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
} from '@material-ui/core';
import useStyles from './style';

type DialogProps = {
  open: any;
  data: any;
  handleClose: any;
};

const DialogScreen = ({ open, data, handleClose }: DialogProps) => {
  const classes = useStyles();

  return (
    <Dialog maxWidth="xs" fullWidth open={open} onClose={handleClose}>
      <Box textAlign="center">
        <DialogTitle id="form-dialog-title">
          <Typography variant="h4">{data.name}</Typography>
        </DialogTitle>
      </Box>
      <Grid container>
        <Grid container>
          <Grid item container justify="center" alignItems="center">
            <Box marginBottom={3}>
              <Grid>
                <Avatar
                  alt={data.name}
                  src={data.image}
                  className={classes.large}
                />
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box marginBottom={3} textAlign="center">
              <Typography>
                <span style={{ fontWeight: 'bold' }}>Status: </span>
                {data.status}
              </Typography>
              <Typography>
                <span style={{ fontWeight: 'bold' }}>Specie: </span>
                {data.species}
              </Typography>
              <Typography>
                <span style={{ fontWeight: 'bold' }}>Gender: </span>
                {data.gender}
              </Typography>
              {data.origin.dimension !== null && (
                <Typography>
                  <span style={{ fontWeight: 'bold' }}>Dimension: </span>{' '}
                  {data.origin.dimension}
                </Typography>
              )}
              <Typography>
                <span style={{ fontWeight: 'bold' }}>Location: </span>
                {data.location.name}
              </Typography>
              <Typography>
                <span style={{ fontWeight: 'bold' }}>Created: </span>
                {data.created}
              </Typography>
              {data.type !== '' && (
                <Typography>
                  <span style={{ fontWeight: 'bold' }}>Type: </span> {data.type}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default DialogScreen;

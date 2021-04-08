import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: '1px solid #666',
    boxShadow: '0 8px 6px -6px black',
  },
  cardLarge: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: 20,
  },
}));

export { useStyles as default }
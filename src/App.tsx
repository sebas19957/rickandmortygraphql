import { useQuery } from '@apollo/react-hooks';
import { Avatar, Box, Grid, Paper, Typography } from '@material-ui/core';

import GET_CHARACTERS from './graphql/getCharacters';
import './index.css';
import CardScreen from './components/card/CardSreenR';
import rym from './static/images/rick.png';
import './App.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function App() {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_CHARACTERS);

  return (
    <>
      <Box textAlign="center">
        <Grid container justify="center" alignItems="center">
          <h1>Rick and Morty</h1>
          <Avatar className={classes.large} alt="rick and morty" src={rym} />
        </Grid>
      </Box>
      <Grid container>
        {loading ? (
          <Box minWidth="100%" minHeight="60px" textAlign="center">
            <Paper elevation={4}>
              <Typography variant="h5">Loading ...</Typography>
            </Paper>
          </Box>
        ) : (
          data.characters.results.map((character: any) => (
            <CardScreen key={character.id} data={character} />
          ))
        )}
      </Grid>
    </>
  );
}

export default App;

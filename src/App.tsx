import { useQuery } from '@apollo/react-hooks';
import { Box, Grid, Paper, Typography } from '@material-ui/core';

import GET_CHARACTERS from './graphql/getCharacters';
import './index.css';
import CardScreen from './components/card/CardSreenR';
import './App.css';

function App() {
  const { data, loading } = useQuery(GET_CHARACTERS);

  return (
    <>
      <Box textAlign="center">
        <h1>Rick and Morty</h1>
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

import { gql } from 'apollo-boost';

const GET_CHARACTERS = gql`
  query {
    characters {
      results{
      id
      name
      status
      species
      type
      gender
      origin{
        dimension
      }
      location{
        name
      }
      image
      created
    }
    }
  }
`;

export default GET_CHARACTERS;

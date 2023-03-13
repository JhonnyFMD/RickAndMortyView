import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const rickAndMortyGraphQL = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export const getCharactersGQL = ({ page, characterName }) => gql`
  query {
    characters(page: ${page}, filter: { name: "${characterName}" }) {
      info {
        count
        pages
      }
      results {
        id,
        name,
        status,
        species,
        gender,
        image
      }
    }
  }
`;

export const getCharacterGQL = (id) => gql`
  query {
    character(id: ${id} ){
      name,
      status,
      species,
      gender,
      image,
      location {
        name
      }
    }
  }
`;

export const getEpisodesGQL = ({ page, episodeName }) => gql`
  query {
    episodes(page: ${page}, filter: { name: "${episodeName}" }){
      info {
        pages
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const getEpisodeGQL = (id) => gql`
  query {
    episode(id: ${id}){
      name
      air_date
      episode
      characters{
        id
        name
        image
        status
        species
        gender
      }
    }
  }
`;

export const getLocationsGQL = ({ page, locationName }) => gql`
  query {
    locations(page: ${page}, filter: { name:"${locationName}" }){
      info {
        pages
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

export const getLocationGQL = (id) => gql`
  query {
    location(id: ${id}){
      name
      type
      dimension
      residents {
        id
        name
        image
        status
        species
        gender
      }
    }
  }
`;

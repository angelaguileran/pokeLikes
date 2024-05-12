const FetchData = async ({ setPokemon, offSet, limit }) => {
  const listResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`
  );
  const listData = await listResponse.json();
  const listPromises = listData.results.map(async (pokeMap) => {
    const url = pokeMap.url;
    const pokemonResponse = await fetch(url);
    const pokemonData = await pokemonResponse.json();
    return { ...pokeMap, data: pokemonData };
  });
  const populatedList = await Promise.all(listPromises);
  setPokemon(populatedList);
  console.log(populatedList);
};

export default FetchData;

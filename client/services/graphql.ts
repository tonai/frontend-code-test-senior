export async function fetchGraphql(query = "", variables: string = null) {
  const response = await fetch("http://localhost:3001/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  const json = await response.json();
  return json.data;
}

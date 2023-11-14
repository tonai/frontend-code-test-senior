export async function fetchGraphql<T>(
  query: string,
  variables: string = null
): Promise<T> {
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

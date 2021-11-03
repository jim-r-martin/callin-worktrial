import { useState, useEffect } from "react";

const {
  REACT_APP_API_VERSION: apiVersion,
  REACT_APP_API_SECRET_TOKEN: apiSecret,
  REACT_APP_API_USER_ID: apiUserId,
} = process.env;

export default function useQuery({ query, operationName }, variables = {}) {
  const [queryState, setQueryState] = useState({
    loading: true,
    data: null,
    errors: null,
  });

  useEffect(() => {
    fetch(
      "https://kep5z4u3s0.execute-api.us-west-1.amazonaws.com/api/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Userid: apiUserId,
          Version: apiVersion,
          Secret: apiSecret,
        },
        body: JSON.stringify({
          operationName,
          query,
          variables,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setQueryState({
          loading: false,
          data: res.data,
          errors: res.errors,
        });
      })
      .catch((err) => {
        setQueryState({
          loading: false,
          errors: [err],
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, operationName, setQueryState]);
  /* ^^^
    "variables" should also be listed in the deps array but due to the equality checks
    it was causing this effect to trigger infinitely.
  */

  return queryState;
}

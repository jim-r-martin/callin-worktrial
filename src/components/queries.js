const READ_WEB_EPISODE = {
  operationName: "ReadWebEpisode",
  query: `
    query ReadWebEpisode($link: ID!) {
      readWebEpisode(link: $link) {
        success
        errors
        episode {
          id
          title
          description
          speakers {
            id
            first
            photo
          }
          show {
            id
            title
            photo
            categorizations {
              name
              photo
            }
            linkObj {
              resourceUrl
            }
          }
        }
      }
    }
  `,
};

export { READ_WEB_EPISODE };

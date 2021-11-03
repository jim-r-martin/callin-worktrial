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

const READ_WEB_SHOW = {
  operationName: "ReadWebShow",
  query: `
    query ReadWebShow($link: ID!) {
      readWebShow(link: $link) {
        success
        errors
        show {
          id
          title
          description
          photo
          subscribesCount
          episodes {
            id
            title
            description
            publishedAt
            runtime
            linkObj {
              resourceUrl
            }
          }
          categorizations {
            name
            photo
          }
        }
      }
    }
  `,
};

export { READ_WEB_EPISODE, READ_WEB_SHOW };

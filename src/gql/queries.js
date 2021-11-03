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
          publishedAt
          runtime
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
              id
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
          hosts {
            id
            first
            photo
          }
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
            id
            name
            photo
          }
        }
      }
    }
  `,
};

export { READ_WEB_EPISODE, READ_WEB_SHOW };

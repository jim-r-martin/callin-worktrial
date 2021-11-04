# Jim Martin Callin Work Trial

A web application mirroring the functionality of the Callin site, specifically the episode and show pages.

## Accessing the hosted client

The application can be accessed at https://callin-worktrial.herokuapp.com/.
The core portion of the implented client can be found at the path '/episode/{episode-title}-{episode-link-id}' or '/show/{show-title}-{show-link-id}'

Below is a list of some links for testing the different pages and functionality

* [Show](https://callin-worktrial.herokuapp.com/show/a-kiss-on-the-lips-phjmSjCNLM)
* [Episode](https://callin-worktrial.herokuapp.com/episode/emotes-yRZyeGfcUn)
* [Episode that has audio](https://callin-worktrial.herokuapp.com/episode/x-CstOqNRiiS) - should hear keyboard clicks about 9 secs in

## Technical Decisions and Considerations

### Connection to GraphQL backend
Using the fetch api rather than a framework like apollo or relay. Doesn't increase bundle size and dev work for dealing with gql using fetch is minial. Abstracted out query logic very similar to the patterns apollo uses, so a migration at a later point should be a minimal amount of work. Main drawback is not having a client side cache out of the box, would need to consider moving forward as user base grows as well as app complexity.

### HLS Media Player
Using ReactPlayer package. Package is lightweight, easy to configure, and it handles dealing with hls on platforms where it is natively handled (iOS). The current audio tag that is rendered styling is bound to platform native styling. To customize in the future would need to build a custom controls component. The audio/video api is easy to work with though so very do-able.

### Improved UX regarding images
Ensured space allocated for images while loading to prevent page jumps. Also implemented logic for fading an image in when it loads to make process less abrupt.
One thing I did notice was that user photos have an unnecessarily large sice in certain places. In the future may want to weigh the client performance optimization potential for storing multiple user photo sizes vs the increase in complexity for back end and increase in storage.

## Notes on work I did not get to

### Search Bar
Should be straightforward. Query shows/episodes based on user input and render results. Also most likely will want to use debouncing to trigger query for improved ux. Potentially would want to show two seperate lists for the diff queries.
Two things of note. One is that the readShowsSearch query accepts a limit param but readEpisodesSearch does not. Two, I did not see the ability to paginate these search queires. Could become important as the amount of data starts to scale.

### Testing
With the short time frame I did not write any tests. In general though my philosophy on testing is to rely very heavily on unit tests and then run integration tests on where necessary for critical/high-impact flows. This approach also influences my decisiosn regarding component structure and the case for seperating out container and presentational components (ex: ContainerStagePage vs StagePage). Makes unit testing and mocking much easier as you don't have to worry about stubbing out api request logic.
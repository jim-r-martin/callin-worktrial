# Jim Martin Callin Work Trial

A web application mirroring the functionality of the Callin site, specifically the episode and show pages.

## Accessing the hosted client

The application can be accessed at https://callin-worktrial.herokuapp.com/.
The core portion of the implented client can be found at the path '/episode/{episode-title}-{episode-link-id}' or '/show/{show-title}-{show-link-id}'

Below is a list of some links for testing the different pages and functionality

* [Show](https://callin-worktrial.herokuapp.com/show/a-kiss-on-the-lips-phjmSjCNLM)
* [Episode](https://callin-worktrial.herokuapp.com/episode/emotes-yRZyeGfcUn)
* [Episode that has audio](https://callin-worktrial.herokuapp.com/episode/x-CstOqNRiiS) should hear keyboard clicks about 9 secs in

## Technical Decisions and Considerations

### Connection to GraphQL backend
I decided to use the fetch api rather than a framework like apollo or relay. The benefit in this approach is not having to increase the bundle size while being pretty straightforward and not requiring much extra development work. I did abstracted out the logic of making a query in a very similar manner to how apollo works so if that transition were necessary in the future it should not be too much work. The main drawback is not having a client side cache out of the box. Something to consider as the application were to grow.

### HLS Media Player
I went with using the ReactPlayer package which provides a react component for rendering media players. This package is lightweight and is pretty straightforward to use. It also provides an easy framework for dealing with handling hls on platforms where it is natively handled (iOS) and where it is not.

### Improved UX regarding images
Implemented block elements that fill the space where images will render to prevent jerky page jumps on image loads. Also implemnted a transition state
for when images do load so that is more smooth. One final thing to note is I did notice that the user photo images are much larger than what is actually rendered. I could see value in potentially storing smaller versions of the user photo. Would of course need to weigh the trade-off in increased complexity on the backend as well as an increase in cloud storage usage.

## Notes on work I did not get to

### Search Bar
This should be relatively straightforward. Make queries based on user input and render the results. I would most likely think to use debouncing to trigger the queries, as apposed to requiring the user to hit enter or click on a submit button. Also for the UI I would probably split out the results for episodes vs shows. 
Two things I noticed that I would want to call out with regards to the client opperating as the product scales. The first is that the readShowsSearch query accepts a limit param but readEpisodesSearch does not. Also, in my inital pass through the schema docs I did not see the ability to paginate these responses, which could definitely help improve the ux at some point in the future.

### Testing
With the short time frame I did not write any tests. I will say though my philosophy on testing is to rely very heavily on unit tests and then run integration tests on where necessary for critical/high-impact flows. This focus on writing unit tests is why I like to seperate out container and presentational components (ex: ContainerStagePage vs StagePage). It makes it much easier to test and makes mocking data a lot easier bc you don't need to stub the api calls.
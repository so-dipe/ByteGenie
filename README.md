# ByteGenie Frontend

The frontend was built using ReactJs, check out the backend api here ()[]

## Key Functionalities

- Ask questions about a document. This currently works best for contents in the `text_segments.csv` file but it can be improved to work on externally uploaded docs.
- Get a summary on a document. 
- Generate topics from a document.

## API Endpoints Used

- /question_answering *for asking questions related to a document.
- /document_summarizing *for generating summaries for a document.
- /topic_extractor *for getting topics from a document

## Challenges Faced

- I am not very familiar with working with React and it presented a steep learning curve.
- I couldn't set-up an environment variable because of a weird error when compiling the code.
- The loading interface used during requests could have been better when I wasn't able to fix the error I was having with it in time.

## Improvements and Future Work

- A better UI/UX.
- Ability to upload documents for question answering purposes and retrieve them on request.
- Converting the one question interface of question answering to a Chat Interface to make detailed conversation about contents in the document.

## Setup Instructions

- simply run `npm start`, all backend requests are routed to a docker container on GCP.

<!-- ## Technologies Used

- List the main technologies, frameworks, or libraries used in building the front-end.

## Contributors

- Acknowledge contributors or team members who participated in creating the UI.

## License

- Specify the project's license information if applicable. -->

# ByteGenie Frontend

- [Link to the App](https://sodipe-bytegenie-ptjrsgbh3q-uc.a.run.app/)
- [Backend API Repo](https://github.com/so-dipe/ByteGenie/tree/backend)

## Key Functionalities

- Ask questions about a document, primarily designed for contents in the `text_segments.csv` file.
- Get summaries for documents.
- Extract topics from documents.

## API Endpoints Used

- **/question_answering:** For asking document-related questions.
- **/document_summarizing:** Generates summaries for documents.
- **/topic_extractor:** Retrieves topics from documents.

## Challenges Faced

- Learning React presented a steep learning curve due to being unfamiliar with the framework.
- Encountered difficulties setting up environment variables due to an error during code compilation.
- Issues with the loading interface during requests could not be resolved within the given time frame.

## Improvements and Future Work

- Enhance UI/UX design for a better user experience.
- Implement document uploads for question answering and retrieval.
- Convert the single-question interface for question answering into a conversational chat interface.

## Setup Instructions

- Run `npm start` to launch the frontend. Backend requests are routed to a GCP-hosted Docker container.

<!-- ## Technologies Used

- List the main technologies, frameworks, or libraries used in building the front-end.

## Contributors

- Acknowledge contributors or team members who participated in creating the UI.

## License

- Specify the project's license information if applicable. -->

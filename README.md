# ByteGenie Backend API

## Data Engineering/Processing Steps

- Data processing focused on Document Summarizing and Topic Extraction, involving the removal of stop words, punctuation, and special characters from documents.
- Tokenization of `text-segments.csv` was performed using LLAMA's tokenizer for Question Answering.

## API Functionalities

- **/answer:** Responds with an answer based on context retrieved from `text_segments` using RAG (Retrieval Augmented Generation).
- **/summarize:** Generates summaries for input text using a locally hosted Language Model.
- **/get_topics:** Provides keyword-pattern topics generated from an LDA model.

## Key Challenges Faced

- Lack of clarity regarding certain tasks hindered their implementation.

## Improvements and Future Work

- Utilize async with FastAPI for better scalability.
- Focus on optimizing response speed and latency for a more robust system.

## Setup Instructions

- Use the provided Dockerfile or run `python run.py` within a virtual environment after installing requirements via `pip install -r requirements.txt`.

<!-- ## Technologies Used

- List the primary technologies, frameworks, or tools used in building the API.

## Contributors

- Acknowledge contributors or team members involved in developing the API.

## License

- Specify the project's license information if applicable. -->

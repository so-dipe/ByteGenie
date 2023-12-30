from .pinecone_utils import get_context
from .deep_infra import make_inference_request, clean_response

def generate_answer(question):
    system_prompt = "KEEP RESPONSES SHORT AND TO THE POINT. Be a helpful assistant, answer questions based context provided."
    context = get_context(question, top_k=5)
    prompt = f"""
        [INST] 
        <<SYS>> {system_prompt} <<SYS>>
            {question}
            Context: {' '.join(context)}
        [/INST]
    """
    response = make_inference_request(prompt)
    return clean_response(response)

# Example usage
# if __name__ == "__main__":
#     ans = generate_answer("what were the interest rate swaps for december 2020?")
#     print(ans)
    
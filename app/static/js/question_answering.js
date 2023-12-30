const form = document.getElementById('qaForm');
const responseArea = document.getElementById('responseArea');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const question = formData.get('question');

    const response = await fetch('/answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
    });

    const data = await response.json();
    const answer = data.answer;

    responseArea.innerHTML = `<p><strong>Question:</strong> ${question}</p><p><strong>Answer:</strong> ${answer}</p>`;
});

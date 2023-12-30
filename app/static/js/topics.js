// JavaScript logic for topics_extraction.html
const form = document.getElementById('topicsForm');
const topicsArea = document.getElementById('topicsArea');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const documentText = formData.get('document');

    const response = await fetch('/get_topics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ document: documentText })
    });

    const data = await response.json();
    const topics = data.topics;

    topicsArea.innerHTML = `<p><strong>Extracted Topics:</strong></p><ul>${topics.map(topic => `<li>${topic}</li>`).join('')}</ul>`;
});

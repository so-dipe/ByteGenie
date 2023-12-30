const form = document.getElementById('summarizeForm');
        const summaryArea = document.getElementById('summaryArea');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const documentText = formData.get('document');

            const response = await fetch('/summarize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ document: documentText })
            });

            const data = await response.json();
            const summary = data.summary;

            summaryArea.innerHTML = `<p><strong>Generated Summary:</strong></p><p>${summary}</p>`;
        });
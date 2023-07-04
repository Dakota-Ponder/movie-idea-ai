const apiKey = "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"

const url = "https://api.openai.com/v1/completions"

// fetch request to OpenAI API
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
        'model': 'text-davinci-003',
        'prompt': 'What is the capital of Spain?'
    })
}).then(response => response.json()).then(data => console.log(data))
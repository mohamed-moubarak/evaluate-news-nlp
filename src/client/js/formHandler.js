const handleSubmit = async (event) => {
    event.preventDefault()

    let formText = document.getElementById('textAnalyzed').value;
    let errorElement = document.getElementById('inputErr');
    if (!formText) {
        errorElement.innerHTML = 'ERROR: Field cannot be empty';
        return;
    }
    errorElement.innerHTML = '';
    if (Client)
        Client.checkForName(formText);
    else checkForName(formText);

    const response = await fetch('http://localhost:8081/sentiment', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'text': formText
        })
    });

    try {
        const data = await response.json();
        document.getElementById('text').innerHTML = `Text: ${data.text}`;
        document.getElementById('polarity').innerHTML = `Polarity: ${data.polarity}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById('polarity_confidence').innerHTML = `Polarity Confidence: ${data.polarity_confidence * 100} %`;
        document.getElementById('subjectivity_confidence').innerHTML = `Subjectivity Confidence: ${data.subjectivity_confidence * 100} %`;
        return data;
    } catch (error) {
        console.log("error: \n", error);
    }
}

export {
    handleSubmit
}
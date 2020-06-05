const checkForName = (inputText) => {
    let names = [
        'picard',
        'janeway',
        'kirk',
        'archer',
        'georgiou'
    ];

    if (new RegExp(names.join("|")).test(inputText.toLowerCase())) {
        alert('Welcome, Captain!');
        return 'found!'
    }
}

export {
    checkForName
}
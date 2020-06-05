require("regenerator-runtime/runtime");

jest.mock('./../client/js/formHandler');
const handleSubmit = require('./../client/js/formHandler').handleSubmit;


describe("Handle Submit function", () => {
    test("it should simulate form submission handling", () => {

        document.body.innerHTML = `<main>
        <section>
           
                <input id="textAnalyzed" type="text" name="input" value="" placeholder="Text to be analyzed">
                <div id="inputErr"></div>
                <input type="submit" name="" value="submit" id="submitBtn">
       
            <section>

                <section>
                    <strong>Form Results:</strong>
                    <div id="results">
                        <div id="text"></div>
                        <div id="polarity"></div>
                        <div id="subjectivity"></div>
                        <div id="polarity_confidence"></div>
                        <div id="subjectivity_confidence"></div>
                    </div>
                </section>
    </main>`;

        document.getElementById('textAnalyzed').value = 'PiCard is so happy';

        let event = document.createEvent("MouseEvent");
        event.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        document.getElementById("submitBtn").dispatchEvent(event);


        handleSubmit(event);

    });
});
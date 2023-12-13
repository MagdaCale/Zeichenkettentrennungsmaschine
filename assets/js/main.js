const ausgabeVorne = document.getElementById('ausgabeVorne')
const ausgabeHinten = document.getElementById('ausgabeHinten')

function schneiden() {
    const text = document.getElementsByName("txtInput")[0].value;
    const zeichen = document.getElementsByName("zeichenInput")[0].value;

    const trennenInput = document.querySelector('input[name="trennen"]:checked');
    const trennen = trennenInput ? trennenInput.value : null;  
    // es wird geprüft, ob der radiobtn geklickt wurde, bevor versucht wird, seinen Wert abzurufen.    
    const index = text.indexOf(zeichen);


    /* trennen davor */
    const trenneDavorlinks = text.slice(0, index);
    const trenneDavorRechts = text.slice(index);

    /* trennen danach */
    const trenneDanachlinks = text.slice(0, index + zeichen.length);
    const trenneDanachRechts = text.slice(index + zeichen.length);

    if (index === -1) {
        ausgabeVorne.innerHTML = ('Verwende nur Wörter, die im Satz vorkommen');
        ausgabeHinten.innerHTML = text;
        } else {
        if (trennen === "davor") {
            ausgabeVorne.innerHTML = trenneDavorlinks;
            ausgabeHinten.innerHTML = trenneDavorRechts;
        } else if (trennen === "danach") {
            ausgabeVorne.innerHTML = trenneDanachlinks;
            ausgabeHinten.innerHTML = trenneDanachRechts;
        } else {
            /* window.alert("HALT") */
            console.log("DAS WARS BI***");
        }
    }
}


/* function schneiden() {
    const text = document.getElementsByName("txtInput")[0].value;
    const zeichen = document.getElementsByName("zeichenInput")[0].value;
    const trennen = document.querySelector('input[name="trennen"]:checked').value;
    const ausgabeVorne = document.getElementById("ausgabeVorne");
    const ausgabeHinten = document.getElementById("ausgabeHinten");
    const index = text.indexOf(zeichen);

    if (index === -1) {
        ausgabeVorne.innerHTML = ('Verwende nur Wörter, die im Satz vorkommen');
        ausgabeHinten.innerHTML = '';
    } else {
        switch (trennen) {
            case "davor":
                ausgabeVorne.innerHTML = text.slice(0, index);
                ausgabeHinten.innerHTML = text.slice(index);
                break;
            case "danach":
                ausgabeVorne.innerHTML = text.slice(0, index + zeichen.length);
                ausgabeHinten.innerHTML = text.slice(index + zeichen.length);
                break;
            default:
                console.log("DAS WARS BI***");
        }
    }
}  */


// Hier wird eine Funktion namens switchCase definiert, die den ursprünglichen Switch-Case-Block enthält. Dann wird die Bedingung index === -1 mit einem ternären Operator überprüft, um festzustellen, ob die Nachricht "Ups, das Wort wurde nicht gefunden." angezeigt werden soll oder ob der Switch-Case-Block ausgeführt werden soll. 

/* 
const ausgabeVorne = document.getElementById('ausgabeVorne');
const ausgabeHinten = document.getElementById('ausgabeHinten');

function schneiden() {
    const text = document.getElementsByName("txtInput")[0].value;
    const zeichen = document.getElementsByName("zeichenInput")[0].value;
    const trennen = document.querySelector('input[name="trennen"]:checked').value;
    const index = text.indexOf(zeichen);

    function switchCase() {
        switch (trennen) {
        case "davor":
            ausgabeVorne.innerHTML = text.slice(0, index);
            ausgabeHinten.innerHTML = text.slice(index);
            break;
        case "danach":
            ausgabeVorne.innerHTML = text.slice(0, index + zeichen.length);
            ausgabeHinten.innerHTML = text.slice(index + zeichen.length);
            break;
        default:
            console.log("DAS WARS BI***");
        }
    }

    index === -1 ? (
        ausgabeVorne.innerHTML = ('Verwende nur Wörter, die im Satz vorkommen'),
        ausgabeHinten.innerHTML = ''
    ) : switchCase();
}*/
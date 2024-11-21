

const ausgabeVorne = document.getElementById('ausgabeVorne')
const ausgabeHinten = document.getElementById('ausgabeHinten')

function schneiden() {
    const text = document.getElementsByName("txtInput")[0].value;
    const zeichen = document.getElementsByName("zeichenInput")[0].value;

    if (!text || !zeichen) {
        alert("Bitte fülle alle Felder aus.");
        return;
    }

    const trennenInput = document.querySelector('input[name="trennen"]:checked');
    if (!trennenInput) {
        alert("Bitte wähle eine Trennoption aus.");
        return;
    }

    const trennen = trennenInput.value;
    const index = text.indexOf(zeichen);

    if (index === -1) {
        ausgabeVorne.innerHTML = 'Verwende nur Wörter, die im Satz vorkommen';
        ausgabeHinten.innerHTML = text;
        return;
    }

    if (trennen === "davor") {
        ausgabeVorne.innerHTML = text.slice(0, index);
        ausgabeHinten.innerHTML = text.slice(index);
    } else if (trennen === "danach") {
        ausgabeVorne.innerHTML = text.slice(0, index + zeichen.length);
        ausgabeHinten.innerHTML = text.slice(index + zeichen.length);
    } else {
        console.error("Ungültige Option.");
    }
}



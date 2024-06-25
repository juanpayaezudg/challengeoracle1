function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let outputText = btoa(inputText); 
    document.getElementById('outputText').value = outputText;
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    try {
        let outputText = atob(inputText); 
        document.getElementById('outputText').value = outputText;
    } catch (e) {
        alert("Texto inválido para desencriptar");
        document.getElementById('outputText').value = "";
    }
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}

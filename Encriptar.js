function encriptar() {
    const textoOriginal = document.getElementById("mensaje").value;

    let textoEncriptado = "";
    for (let i = 0; i < textoOriginal.length; i++) {
      let char = textoOriginal[i];
      if (char.match(/[a-z]/i)) {
        let code = textoOriginal.charCodeAt(i);
        if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + 3) % 26) + 97);
        }
      }
      textoEncriptado += char;
    }
    document.getElementById("mensaje-encriptado").value = textoEncriptado;
   
  }

  function desencriptar() {
    const textoEncriptado = document.getElementById("mensaje-encriptado").value;

    let textoDesencriptado = "";
    for (let i = 0; i < textoEncriptado.length; i++) {
      let char = textoEncriptado[i];
      if (char.match(/[a-z]/i)) {
        let code = textoEncriptado.charCodeAt(i);
        if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + (26 - 3)) % 26) + 97);
        }
      }
      textoDesencriptado += char;
    }
    document.getElementById("mensaje").value = textoDesencriptado;
    alert("¡Mensaje Desencriptado!" + textoDesencriptado);
  }
  function copiarTexto() {
    var campoTexto = document.getElementById("mensaje-encriptado");
    
    campoTexto.select();
    campoTexto.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("¡Texto copiado!");
  }

  
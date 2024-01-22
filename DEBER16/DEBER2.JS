
const { describe, it } = require("mocha");


function buscarPalabraConMEnQuintaPosicion(palabras) {
  for (const palabra of palabras) {
    if (palabra[4] === "m") {
      return palabra;
    }
  }
  return null;
}


describe("Buscar palabra con M en quinta posición", () => {
  
  it("Debe devolver la palabra 'mariposa' si la lista contiene las palabras 'casa', 'pelota', 'amor', 'mariposa' y 'moto'", () => {
    const palabras = ["casa", "pelota", "amor", "mariposa", "moto"];
    const resultado = buscarPalabraConMEnQuintaPosicion(palabras);
    expect(resultado).toBe("mariposa");
  });

  
  it("Debe devolver 'None' si la lista no contiene ninguna palabra con la letra M en quinta posición", () => {
    const palabras = ["casa", "pelota", "amor", "moto"];
    const resultado = buscarPalabraConMEnQuintaPosicion(palabras);
    expect(resultado).toBe(null);
    if (!resultado) {
      
      console.log("¡Alerta! No se encontró ninguna palabra con 'M' en quinta posición.");
    }
  });
});


mocha();
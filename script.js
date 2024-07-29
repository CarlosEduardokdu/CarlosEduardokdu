function calcularIngredientes() {
  var numHomens = document.getElementById("numHomens").value;
  var numMulheres = document.getElementById("numMulheres").value;
  var numCriancas = document.getElementById("numCriancas").value;

  if (numHomens < 0 || numMulheres < 0 || numCriancas < 0) {
    alert("Por favor, insira um número válido de pessoas.");
    return;
  }

 
  numHomens = parseInt(numHomens);
  numMulheres = parseInt(numMulheres);
  numCriancas = parseInt(numCriancas);

  var carneBovina = (numHomens * 500) + (numMulheres * 300) + (numCriancas * 200);
      var frango = (numHomens * 200) + (numMulheres * 200) + (numCriancas * 100);
      var linguica = (numHomens * 200) + (numMulheres * 200) + (numCriancas * 200);

    
      var carneBovinaKg = (carneBovina / 1000).toFixed(2);
      var frangoKg = (frango / 1000).toFixed(2);
      var linguicaKg = (linguica / 1000).toFixed(2);

      
      var refrigerante = (numHomens * 300) + (numMulheres * 400) + (numCriancas * 200);
      var cerveja = (numHomens * 800) + (numMulheres * 500);

      var resultado = `
        <h2>Quantidade de Ingredientes:</h2>
        <p><strong>Carne Bovina:</strong> ${carneBovinaKg} kg (${carneBovina} g)</p>
        <p><strong>Frango:</strong> ${frangoKg} kg (${frango} g)</p>
        <p><strong>Linguiça:</strong> ${linguicaKg} kg (${linguica} g)</p>
        <p><strong>Refrigerante:</strong> ${(refrigerante / 1000).toFixed(2)} L (${refrigerante} ml)</p>
        <p><strong>Cerveja:</strong> ${(cerveja / 1000).toFixed(2)} L (${cerveja} ml)</p>
      `;

      document.getElementById("resultado").innerHTML = resultado;
    }
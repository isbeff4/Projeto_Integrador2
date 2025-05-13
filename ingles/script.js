function corrigir() {
    const respostasCorretas = ['b', 'b', 'b', 'c', 'b', 'c', 'c', 'b'];
    const explicacoes = [
      "A resposta correta é (b): o texto discute os efeitos positivos e negativos das redes sociais.",
      "A resposta correta é (b): adultos jovens são os mais impactados pelo uso das redes.",
      "A resposta correta é (b): a área correta da Amazônia é de aproximadamente 5,5 milhões de km².",
      "A resposta correta é (c): cerca de 10% das espécies conhecidas vivem na Amazônia.",
      "A resposta correta é (b): o texto menciona claramente a WHO como a responsável.",
      "A resposta correta é (c): H3N2 é a cepa dominante segundo o relatório mencionado.",
      "A resposta correta é (c): o foco está nas aplicações e potencial da inteligência artificial.",
      "A resposta correta é (b): machine learning permite que os computadores aprendam com dados."
    ];

    let acertos = 0;
    let resultado = "";
    let explicacaoTexto = "";

    for (let i = 1; i <= 8; i++) {
      const respostaUsuario = document.querySelector('input[name="q' + i + '"]:checked');
      if (respostaUsuario && respostaUsuario.value === respostasCorretas[i - 1]) {
        acertos++;
        resultado += `✅ Questão ${i} correta.<br>`;
      } else {
        resultado += `❌ Questão ${i} incorreta. ${explicacoes[i - 1]}<br>`;
      }
    }

    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML = `<h2>Você acertou ${acertos} de 8 questões.</h2>`;
    document.getElementById("explicacoes").innerHTML = resultado;
  }
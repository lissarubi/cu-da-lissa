function DateMeasure(ms) {
    var y, d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    y = Math.floor(d / 365);
    d = d % 365;
    
    const years = y;
    const days = d;
    const hours = h;
    const minutes = m;
    const seconds = s;

    const dateString = `faltam ${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`
    return dateString
  };

window.onload = () => {
    const timeBox = document.getElementById('tempo')
    const ferias = new Date("01/27/2025")

    let today = new Date()

    if (ferias < today) {
        putaria()
    }else{
        let faltam = DateMeasure(ferias - new Date())
        
        timeBox.innerHTML = `<strong>${faltam}</strong>`

        let interval = setInterval( () => {
        let faltam = DateMeasure(ferias - new Date())

        if (ferias < new Date){
            clearInterval(interval)
            putaria()
        }
        
        timeBox.innerHTML = `<strong>${faltam}</strong>`
        }, 1000)
    }

    console.log(faltam)
    
    setInterval( () => {
        let today = new Date()
        let faltam = DateMeasure(ferias - today)
        
        timeBox.innerHTML = `<strong>${faltam}</strong>`
    
        console.log(faltam)
    } , 1000 )
}

function putaria(){
        let colors = [
            [255, 0, 0], // vermelho
            [0, 255, 0], // verde
            [0, 0, 255], // azul
            [255, 255, 0], // amarelo
            [255, 0, 255], // magenta
            [0, 255, 255], // ciano
            [128, 0, 128], // roxo
            [0, 128, 128], // verde-azulado
            [128, 128, 0], // dourado
            [0, 0, 128], // azul-marinho
            [128, 0, 0], // vermelho-escuro
            [0, 128, 0], // verde-escuro
            [255, 165, 0], // laranja
            [255, 192, 203], // rosa
            [220, 220, 220], // cinza claro
        ];
        
        let messages = [
            "TÁ LIBERADO 🔥🔥🔥🤤🤤🤤🐊🐊🐊",
            "JACARÉ TÁ NA LAGOA 🥵🥵🥵😈😈😈",
            "SEGURA QUE LÁ VEM 🤯🤯🤯🚀🚀🚀",
            "CHAMA NO PEIXE 🎣🎣🎣🔥🔥🔥",
            "O BICHO VAI PEGAR 🐊🐊🐊💥💥💥",
            "PISA FUNDO, SEM FREIO 🏎️🏎️🏎️🔥🔥🔥",
            "TÁ NO FOGO, NINGUÉM SEGURA 🔥🔥🔥😎😎😎",
            "JOGOU NA RODA, É SHOW! 🎉🎉🎉🐊🐊🐊",
            "O JOGO VIROU, GALERA 🚨🚨🚨😈😈😈",
            "SEGURA A EMOÇÃO 🥵🥵🥵🚀🚀🚀",
            "JACARÉ NA PISTA, MEU AMIGO! 🐊🐊🐊💥💥💥",
            "TÁ PEGANDO FOGO, BICHO 🔥🔥🔥🤩🤩🤩",
            "PARTIU ESTOURAR TUDO 💣💣💣🔥🔥🔥",
            "LÁ VAI O JACARÉ! 🐊🐊🐊💥💥💥",
        ];
        
        let index = 0;
        let interval = setInterval(() => {
            console.log("oi?")
            // Atualiza a cor de fundo
            let color = colors[index];
            document.body.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        
            // Atualiza a mensagem
            let timeBox = document.getElementById("tempo");
            timeBox.innerHTML = `<strong>${messages[index]}</strong>`;
        
            // Atualiza o índice
            index = (index + 1) % colors.length;
        }, 500); // troca a cada 500ms
}
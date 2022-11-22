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
    let faltam = DateMeasure(ferias - today)
    
    timeBox.innerHTML = `<strong>${faltam}</strong>`

    console.log(faltam)
    
    setInterval( () => {
        let today = new Date()
        let faltam = DateMeasure(ferias - today)
        
        timeBox.innerHTML = `<strong>${faltam}</strong>`
    
        console.log(faltam)
    } , 1000 )
}

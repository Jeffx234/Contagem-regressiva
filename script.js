function relogioo() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-Br', {
      hour12: false,
      timeZone: 'UTC'
    })
  }

  const relogio = document.querySelector('.relogio')

  let segundos = 600
  let timer

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos--
      relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
  }

  document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado')
      relogio.classList.add('iniciado')
      relogio.innerHTML = 'Iniciando contagem'
      clearInterval(timer)
      iniciaRelogio()
    }

    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado')
      relogio.classList.remove('iniciado')
      clearInterval(timer)
    }

    if (el.classList.contains('zerar')) {
      clearInterval(timer)
      relogio.innerHTML = '00:00:00'
      segundos = 600
      relogio.classList.remove('pausado')
    }
  })
}

relogioo()

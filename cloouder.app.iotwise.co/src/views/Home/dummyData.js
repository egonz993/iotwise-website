export const chart1 = {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Uplink",
        borderColor: "rgba(75, 192, 75, 1)",
        backgroundColor: "rgba(75, 192, 75, 0.3)",
        pointRadius: 2,
        lineTension: 0.3,
        borderWidth: 2,
        data: [
          { x: "ene", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "feb", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "mar", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "abr", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "may", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "jun", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "jul", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "ago", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "sep", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "oct", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "nov", y: Math.ceil(100 + Math.random()*100)*250 },
          { x: "dic", y: Math.ceil(100 + Math.random()*100)*250 },
        ],
      },
      {
        label: "Downlink",
        borderColor: "rgba(192, 75, 75, 1)",
        backgroundColor: "rgba(192, 75, 75, 0.3)",
        pointRadius: 2,
        lineTension: 0.3,
        borderWidth: 2,
        data: [
          { x: "ene", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "feb", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "mar", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "abr", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "may", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "jun", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "jul", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "ago", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "sep", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "oct", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "nov", y: Math.ceil(50 + Math.random()*10)*250 },
          { x: "dic", y: Math.ceil(50 + Math.random()*10)*250 },
        ],
      },
      {
        label: "Join",
        borderColor: "rgba(192, 192, 75, 1)",
        backgroundColor: "rgba(192, 192, 75, 0.3)",
        pointRadius: 2,
        lineTension: 0.3,
        borderWidth: 2,
        data: [
          { x: "ene", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "feb", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "mar", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "abr", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "may", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "jun", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "jul", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "ago", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "sep", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "oct", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "nov", y: Math.ceil(30 + Math.random()*5)*250 },
          { x: "dic", y: Math.ceil(30 + Math.random()*5)*250 },
        ],
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Actividad de los dispositivos',
        color: '#fff'
      },
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Fecha',
          color: '#fff'
        },
        ticks:{
            color: 'white',
            fontSize: 12,
        }
      },
      y: {
        title: {
          display: true,
          text: 'Número de solicitudes',
          color: '#fff'
        },
        scaleLabel: {
          display: true,
          labelString: "Dato"
        },
        ticks:{
            color: 'white',
            fontSize: 12,
        }
      }
    },
  }
}

export const chart2 = {
  type: "bubble",
  data: { 
    datasets: [
      {
        label: "0 ~ -80 dBm",
        borderColor: "rgba(75, 75, 192, 1)",
        backgroundColor: "rgba(75, 75, 192, 0.3)",
        borderWidth: 2,
        data: [
          { x: Math.ceil(0 + Math.random()*10), y: Math.ceil(-40 - Math.random()*40), r: 10 + Math.ceil(Math.random()*5) },
          { x: Math.ceil(0 + Math.random()*10), y: Math.ceil(-40 - Math.random()*40), r: 10 + Math.ceil(Math.random()*5) },
          { x: Math.ceil(0 + Math.random()*10), y: Math.ceil(-40 - Math.random()*40), r: 10 + Math.ceil(Math.random()*5) },
          { x: Math.ceil(0 + Math.random()*10), y: Math.ceil(-40 - Math.random()*40), r: 10 + Math.ceil(Math.random()*5) },
          { x: Math.ceil(0 + Math.random()*10), y: Math.ceil(-40 - Math.random()*40), r: 10 + Math.ceil(Math.random()*5) },
        ],
      },
      {
        label: "-80 ~ -100 dBm",
        borderColor: "rgba(75, 192, 75, 1)",
        backgroundColor: "rgba(75, 192, 75, 0.3)",
        borderWidth: 2,
        data: [
          { x: Math.ceil(-5 + Math.random()*13), y: Math.ceil(-80 - Math.random()*20), r: 10 + Math.ceil(Math.random()*30) },
          { x: Math.ceil(-5 + Math.random()*13), y: Math.ceil(-80 - Math.random()*20), r: 10 + Math.ceil(Math.random()*30) },
          { x: Math.ceil(-5 + Math.random()*13), y: Math.ceil(-80 - Math.random()*20), r: 10 + Math.ceil(Math.random()*30) },
          { x: Math.ceil(-5 + Math.random()*13), y: Math.ceil(-80 - Math.random()*20), r: 10 + Math.ceil(Math.random()*30) },
          { x: Math.ceil(-5 + Math.random()*13), y: Math.ceil(-80 - Math.random()*20), r: 10 + Math.ceil(Math.random()*30) },
        ],
      },
      {
        label: "-100 ~ -120 dBm",
        borderColor: "rgba(192, 192, 75, 1)",
        backgroundColor: "rgba(192, 192, 75, 0.3)",
        borderWidth: 2,
        data: [
          { x: Math.ceil(-5 + Math.random()*15), y: Math.ceil(-100 - Math.random()*20), r: 10 + Math.ceil(Math.random()*40) },
          { x: Math.ceil(-5 + Math.random()*15), y: Math.ceil(-100 - Math.random()*20), r: 10 + Math.ceil(Math.random()*40) },
          { x: Math.ceil(-5 + Math.random()*15), y: Math.ceil(-100 - Math.random()*20), r: 10 + Math.ceil(Math.random()*40) },
          { x: Math.ceil(-5 + Math.random()*15), y: Math.ceil(-100 - Math.random()*20), r: 10 + Math.ceil(Math.random()*40) },
          { x: Math.ceil(-5 + Math.random()*15), y: Math.ceil(-100 - Math.random()*20), r: 10 + Math.ceil(Math.random()*40) },
        ],
      },
      {
        label: "-120 ~ -140 dBm",
        borderColor: "rgba(192, 75, 75, 1)",
        backgroundColor: "rgba(192, 75, 75, 0.3)",
        borderWidth: 2,
        data: [
          { x: Math.ceil(-10 + Math.random()*10), y: Math.ceil(-120 - Math.random()*20), r: 10 + Math.ceil(Math.random()*20) },
          { x: Math.ceil(-10 + Math.random()*10), y: Math.ceil(-120 - Math.random()*20), r: 10 + Math.ceil(Math.random()*20) },
          { x: Math.ceil(-10 + Math.random()*10), y: Math.ceil(-120 - Math.random()*20), r: 10 + Math.ceil(Math.random()*20) },
          { x: Math.ceil(-10 + Math.random()*10), y: Math.ceil(-120 - Math.random()*20), r: 10 + Math.ceil(Math.random()*20) },
          { x: Math.ceil(-10 + Math.random()*10), y: Math.ceil(-120 - Math.random()*20), r: 10 + Math.ceil(Math.random()*20) },
        ],
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Calidad de la señal en las últimas 24h',
        color: '#fff'
      },
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        min: -10,
        max: 10,
        title: {
          display: true,
          text: 'SNR',
          color: '#fff'
        },
        ticks:{
            color: 'white',
            fontSize: 12,
        }
      },
      y: {
        title: {
          display: true,
          text: 'RSSI',
          color: '#fff'
        },
        min: -140,
        max: 0,
        scaleLabel: {
          display: true,
          labelString: "Dato",
        },
        ticks:{
          color: 'white',
          fontSize: 12,
        }
      }
    },
  },
}

export const chart3 = {
  type: "line",
  data: {
    datasets: [
      {
        label: "Acumulado",
        borderColor: "rgba(75, 255, 75, 1)",
        pointRadius: 3,
        borderWidth: 2,
        data: [
          { x: "ene", y: 2 },
          { x: "feb", y: 5 },
          { x: "mar", y: 7 },
          { x: "abr", y: 9 },
          { x: "may", y: 12 },
          { x: "jun", y: 14 },
          { x: "jul", y: 16 },
          { x: "ago", y: 19 },
          { x: "sep", y: 21 },
          { x: "oct", y: 23 },
          { x: "nov", y: 26 },
          { x: "dic", y: 28 },
        ],
      },
      {
        type: 'bar',
        label: "Mensual (x10)",
        borderColor: "rgba(75, 0, 255, 1)",
        backgroundColor: "rgba(75, 0, 255, 0.1)",
        pointRadius: 2,
        lineTension: 0.3,
        borderWidth: 2,
        data: [
          { x: "ene", y: 2*10 },
          { x: "feb", y: 3*10 },
          { x: "mar", y: 2*10 },
          { x: "abr", y: 2*10 },
          { x: "may", y: 3*10 },
          { x: "jun", y: 2*10 },
          { x: "jul", y: 2*10 },
          { x: "ago", y: 3*10 },
          { x: "sep", y: 2*10 },
          { x: "oct", y: 2*10 },
          { x: "nov", y: 3*10 },
          { x: "dic", y: 2*10 },
        ],
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Uso de bases de datos',
        color: '#fff'
      },
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Fecha',
          color: '#fff'
        },
        ticks:{
            color: 'white',
            fontSize: 12,
        }
      },
      y: {
        min: 0,
        title: {
          display: true,
          text: 'Data GiB',
          color: '#fff'
        },
        scaleLabel: {
          display: true,
          labelString: "Dato"
        },
        ticks:{
            color: 'white',
            fontSize: 12,
        }
      }
    },
  }
}
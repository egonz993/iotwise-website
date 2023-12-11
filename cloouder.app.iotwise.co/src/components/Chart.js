// import 'chartjs-adapter-moment';

import {
  Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble
} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale, TimeScale, Title, Tooltip, Legend, Filler,
  BarElement, LineElement, ArcElement, PointElement, RadialLinearScale
} from 'chart.js';


ChartJS.register(
  CategoryScale, 
  LinearScale, TimeScale, PointElement, Title, Tooltip, Legend, Filler,
  BarElement, LineElement, ArcElement, PointElement, RadialLinearScale
  );
  

export const Chart = ({type, data, options}) => {
    

  const getRender = () => {

    switch (type) {
      case "bar":         return(<Bar data={data} options={options} />)
      case "pie":         return(<Pie data={data} options={options} />)
      case "line":        return(<Line data={data} options={options} />)
      case "radar":       return(<Radar data={data} options={options} />)
      case "polar":       return(<PolarArea data={data} options={options} />)
      case "bubble":      return(<Bubble data={data} options={options} />)
      case "scatter":     return(<Scatter data={data} options={options} />)
      case "doughnut":    return(<Doughnut data={data} options={options} />)
      default:            return(<Line data={data} options={options} />)
    }
  }

  return(
    <div style={{width:'100%', height:'100%'}} >
        {getRender()}
    </div>
  )
}
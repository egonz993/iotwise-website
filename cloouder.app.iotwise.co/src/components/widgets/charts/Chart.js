import 'chartjs-adapter-moment';
import { ErrorBoundary } from '../../error-boundary/ErrorBoundary'
import { useComponent } from '../../../hooks/useComponent'
import { PendingComponent } from '../others/PendingComponent'

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
  

export const Chart = (props) => {
    
  const {pending, _data, _options} = useComponent(props)

  let Render = <></>
  switch (props.type) {
    case "bar":
      Render = <Bar data={_data} options={_options} />
      break;
    
    case "line":
      Render = <Line data={_data} options={_options} />
      break;

    case "pie":
      Render = <Pie data={_data} options={_options} />
      break;

    case "doughnut":
      Render = <Doughnut data={_data} options={_options} />
      break;

    case "polar":
      Render = <PolarArea data={_data} options={_options} />
      break;

    case "radar":
      Render = <Radar data={_data} options={_options} />
      break;

    case "scatter":
      Render = <Scatter data={_data} options={_options} />
      break;

    case "bubble":
      Render = <Bubble data={_data} options={_options} />
      break;

    default:
      Render = <Line data={_data} options={_options} />
      break;
  }

  return(
    pending ? <PendingComponent /> :
    <ErrorBoundary>
      {/* eslint-disable-next-line  */}
      <div style={{width:'100%', height:'100%'}} role='chart'>
          {Render}
      </div>
    </ErrorBoundary>
  )
}
import React from 'react'
import { Chart } from '../../components/Chart';
import { chart1, chart2, chart3 } from './dummyData';

export const HomeChart = () => {

  return (
    <>
      <div className='w-100 text-center mt-4 mb-3'>
        <h3>Estadísticas de la red LoRaWAN</h3>
      </div>

      <div className='mb-4 pb-4 col-12 col-xl-6' style={{ height: '350px' }}>
        <Chart {...chart1} />
      </div>

      <div className='mb-4 pb-4 col-12 col-xl-6' style={{ height: '350px' }}>
        <Chart {...chart2} />
      </div>

      <div className='mb-4 pb-4 col-12' style={{ height: '350px' }}>
        <Chart {...chart3} />
      </div>
    </>
  )
}

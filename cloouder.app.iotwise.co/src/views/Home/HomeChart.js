import React from 'react'
import { Chart } from '../../components/Chart';
import { chart1, chart2, chart3 } from './dummyData';

export const HomeChart = () => {

  return (
    <>
      <div className='w-100 text-center mt-4 mb-3'>
        <h3>Estadísticas de la red LoRaWAN</h3>
      </div>

      <div className='py-3 col-12 col-xl-6'>
        <div className='p-3' style={{height: '400px', background: '#0005', borderRadius: '15px'}}>
          <Chart {...chart1} />
        </div>
      </div>

      <div className='py-3 col-12 col-xl-6'>
        <div className='p-3' style={{height: '400px', background: '#0005', borderRadius: '15px'}}>
          <Chart {...chart2} />
        </div>
      </div>

      <div className='py-3 col-12'>
        <div className='p-3' style={{height: '400px', background: '#0005', borderRadius: '15px'}}>
          <Chart {...chart3} />
        </div>
      </div>
    </>
  )
}

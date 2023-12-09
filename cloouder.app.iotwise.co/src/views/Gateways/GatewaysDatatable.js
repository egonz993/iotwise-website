// Documentation: https://react-data-table-component.netlify.app/

import React from 'react'
import DataTable from 'react-data-table-component'
import { customStyles } from './tableCustomstyle'

export const GatewaysDatatable = () => {

  const columns = [
      { name: '#', selector: (row) => row.id, sortable: true, maxWidth: '20px' },
      { name: 'AWS ID', selector: (row) => row.aws_id, sortable: true, maxWidth: '150px' },
      { name: 'Gateway EUI', selector: (row) => row.eui, sortable: true, maxWidth: '200px'  },
      { name: 'Nombre', selector: (row) => row.name, sortable: true  },
      { name: 'Último Dato', selector: (row) => row.last_seen, sortable: true, maxWidth: '200px'  },
      { name: 'Ubicación', selector: (row) => row.location, sortable: false, maxWidth: '200px' },
      { name: 'Estado', selector: (row) => row.status, sortable: false, maxWidth: '200px' },
  ]

  const values = [
      { id: 0, name: 'Gateway 0', eui: '0102030405060700', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad0', last_seen: new Date().toLocaleString(), status: 'Desconectado' },
      { id: 1, name: 'Gateway 1', eui: '0102030405060701', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad1', last_seen: new Date().toLocaleString(), status: 'Conectado' },
      { id: 2, name: 'Gateway 2', eui: '0102030405060702', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad2', last_seen: new Date().toLocaleString(), status: 'Conectado' },
      { id: 3, name: 'Gateway 3', eui: '0102030405060703', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad3', last_seen: new Date().toLocaleString(), status: 'Conectado' },
      { id: 4, name: 'Gateway 4', eui: '0102030405060704', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad4', last_seen: new Date().toLocaleString(), status: 'Conectado' },
      { id: 5, name: 'Gateway 5', eui: '0102030405060705', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad5', last_seen: new Date().toLocaleString(), status: 'Conectado' },
      { id: 6, name: 'Gateway 6', eui: '0102030405060706', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad6', last_seen: new Date().toLocaleString(), status: 'Conectado' },
      { id: 7, name: 'Gateway 7', eui: '0102030405060707', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad7', last_seen: new Date().toLocaleString(), status: 'Conectado' },
      { id: 8, name: 'Gateway 8', eui: '0102030405060708', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad8', last_seen: new Date().toLocaleString(), status: 'Conectado' },
      { id: 9, name: 'Gateway 9', eui: '0102030405060709', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad9', last_seen: new Date().toLocaleString(), status: 'Conectado' },
  ]

  const data = values.map((item) => {
      item.aws_id = <div className='link-light' style={{cursor: 'pointer'}} title='Copiar'><i className='fa fa-copy' /> {item.aws_id}</div>
      item.deveui = <div className='link-light' style={{cursor: 'pointer'}} title='Copiar'><i className='fa fa-copy' /> {item.deveui}</div>
      item.location = <div className='' >location</div>
      return item
  })

  return <DataTable
      columns={columns}
      data={data}
      className='mt-3'
      pagination={true}
      paginationPerPage={5}
      paginationRowsPerPageOptions={[1, 2, 3, 5, 10]}
      highlightOnHover={true}
      selectableRows={false}
      striped={true}
      customStyles={customStyles}
      paginationIconFirstPage={<i className=" fas fa-angle-double-left" />}
      paginationIconLastPage={<i className=" fas fa-angle-double-right" />}
      paginationIconNext={<i className=" fas fa-angle-right" />}
      paginationIconPrevious={<i className=" fas fa-angle-left" />}
  />
}
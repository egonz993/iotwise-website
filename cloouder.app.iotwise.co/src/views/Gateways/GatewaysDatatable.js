// Documentation: https://react-data-table-component.netlify.app/

import React from 'react'
import DataTable from 'react-data-table-component'
import { customStyles } from './tableCustomstyle'
import { Link } from 'react-router-dom'
import { GatewayEditDrawer } from './GatewayEditDrawer'

export const GatewaysDatatable = ({gateways}) => {

    const columns = [
        { name: '#', selector: (row) => row.id, sortable: true, center: true, maxWidth: '20px' },
        // { name: 'AWS ID', selector: (row) => row.aws_id, sortable: true, center: true, maxWidth: '150px' },
        { name: 'Gateway EUI', selector: (row) => row.LoRaWAN.GatewayEui, sortable: true, center: true, maxWidth: '200px' },
        { name: 'Nombre', selector: (row) => row.Name, sortable: true, center: true },
        { name: 'Último Dato', selector: (row) => row.LastUplinkReceivedAt, sortable: true, center: true },
        { name: 'Estado', selector: (row) => row.ConnectionStatus, sortable: false, center: true },
        { name: 'Ubicación', selector: (row) => row.location, sortable: false, center: true, minWidth: '200px' },
        { name: 'Controles', selector: (row) => row.control, sortable: false, center: true, minWidth: '200px' },
    ]
    const data = gateways.map((item, idx) => {

        item.location = (
            <div className='btn-group'>
                {/* Google Map */}
                <Link to={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}5`} target='_blank' className='btn btn-transparent px-4' title='Abrir en Google Map' >
                    <img src='/images/map.png' alt="" width={25} />
                </Link>
                {/* Google Street View */}
                <Link to={`http://maps.google.com/maps?q=&layer=c&cbll=${item.latitude},${item.longitude}&cbp=`} target='_blank' className='btn btn-transparent px-4' title='Abrir en Google Street View' >
                    <img src='/images/street_view.png' alt="" width={25} />
                </Link>
            </div>
        )

        item.control = (
            <div className='' >
                <div className='btn-group'>
                    {/* Editar Dispositivo */}
                    <GatewayEditDrawer item={gateways[idx]}>
                        <div className='btn btn-transparent px-4'>
                            <i className='fa fa-edit' /> Editar
                        </div>
                    </GatewayEditDrawer>
                </div>
            </div>
        )

        return item
    })

    return (
        <>
            <div className='w-100 text-center mt-4'>
                <h4>Lista de Gateways</h4>
            </div>

            <DataTable
                columns={columns}
                data={data}
                className='mt-3'
                pagination={true}
                paginationPerPage={10}
                paginationRowsPerPageOptions={[1, 5, 10, 50, 100]}
                highlightOnHover={true}
                selectableRows={false}
                striped={true}
                customStyles={customStyles}
                paginationIconFirstPage={<i className=" fas fa-angle-double-left" />}
                paginationIconLastPage={<i className=" fas fa-angle-double-right" />}
                paginationIconNext={<i className=" fas fa-angle-right" />}
                paginationIconPrevious={<i className=" fas fa-angle-left" />}
            />
        </>
    )
}
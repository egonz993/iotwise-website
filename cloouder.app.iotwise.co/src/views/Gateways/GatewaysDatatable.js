// Documentation: https://react-data-table-component.netlify.app/

import React from 'react'
import DataTable from 'react-data-table-component'
import { customStyles } from './tableCustomstyle'
import { Link } from 'react-router-dom'
import { GatewayEditDrawer } from './GatewayEditDrawer'

const gateways = [
    { id: 1, name: 'Gateway 1', eui: '0102030405060701', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa01', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.34624, longitude: -75.50692 },
    { id: 2, name: 'Gateway 2', eui: '0102030405060702', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa02', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.34453, longitude: -75.56629 },
    { id: 3, name: 'Gateway 3', eui: '0102030405060703', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa03', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.15503, longitude: -75.63910 },
    { id: 4, name: 'Gateway 4', eui: '0102030405060704', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa04', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.31116, longitude: -75.57599 },
    { id: 5, name: 'Gateway 5', eui: '0102030405060705', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa05', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.28598, longitude: -75.54628 },
    { id: 6, name: 'Gateway 6', eui: '0102030405060706', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa06', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.28487, longitude: -75.59408 },
    { id: 7, name: 'Gateway 7', eui: '0102030405060707', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa07', last_seen: new Date().toLocaleString(), status: 'Desconectado', latitude: 6.26609, longitude: -75.61464 },
    { id: 8, name: 'Gateway 8', eui: '0102030405060708', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa08', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.23847, longitude: -75.54850 },
    { id: 9, name: 'Gateway 9', eui: '0102030405060709', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa09', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.25670, longitude: -75.57240 },
    { id: 10, name: 'Gateway 10', eui: '0102030405060710', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa10', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.19924, longitude: -75.56462 },
    { id: 11, name: 'Gateway 11', eui: '0102030405060711', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa11', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.17152, longitude: -75.57511 },
    { id: 12, name: 'Gateway 12', eui: '0102030405060712', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa12', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.15890, longitude: -75.60591 },
    { id: 13, name: 'Gateway 13', eui: '0102030405060713', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa13', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.18469, longitude: -75.60371 },
    { id: 14, name: 'Gateway 14', eui: '0102030405060714', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa14', last_seen: new Date().toLocaleString(), status: 'Conectado', latitude: 6.22464, longitude: -75.59860 },
]


export const GatewaysDatatable = () => {

    const columns = [
        { name: '#', selector: (row) => row.id, sortable: true, center: true, maxWidth: '20px' },
        // { name: 'AWS ID', selector: (row) => row.aws_id, sortable: true, center: true, maxWidth: '150px' },
        { name: 'Gateway EUI', selector: (row) => row.eui, sortable: true, center: true, maxWidth: '200px' },
        { name: 'Nombre', selector: (row) => row.name, sortable: true, center: true },
        { name: 'Último Dato', selector: (row) => row.last_seen, sortable: true, center: true },
        { name: 'Estado', selector: (row) => row.status, sortable: false, center: true },
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
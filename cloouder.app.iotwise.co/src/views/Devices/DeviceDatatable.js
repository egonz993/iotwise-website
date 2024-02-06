// Documentation: https://react-data-table-component.netlify.app/

import React from 'react'
import DataTable from 'react-data-table-component'
import { customStyles } from './tableCustomstyle'
import { DeviceEditDrawer } from './DevicesEditDrawer'
import { DeviceDataDrawer } from './DevicesDataDrawer'
import { Link } from 'react-router-dom'

// const devices = [
//     { id: 1, name: 'Dispositivo 1', deveui: '0102030405060701', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad1', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 2, name: 'Dispositivo 2', deveui: '0102030405060702', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad2', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 3, name: 'Dispositivo 3', deveui: '0102030405060703', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad3', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 4, name: 'Dispositivo 4', deveui: '0102030405060704', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad4', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 5, name: 'Dispositivo 5', deveui: '0102030405060705', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad5', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 6, name: 'Dispositivo 6', deveui: '0102030405060706', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad6', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 7, name: 'Dispositivo 7', deveui: '0102030405060707', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad7', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 8, name: 'Dispositivo 8', deveui: '0102030405060708', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad8', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 9, name: 'Dispositivo 9', deveui: '0102030405060709', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad9', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 10, name: 'Dispositivo 10', deveui: '0102030405060710', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa10', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 11, name: 'Dispositivo 11', deveui: '0102030405060711', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa11', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 12, name: 'Dispositivo 12', deveui: '0102030405060712', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa12', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 13, name: 'Dispositivo 13', deveui: '0102030405060713', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa13', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 14, name: 'Dispositivo 14', deveui: '0102030405060714', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa14', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 15, name: 'Dispositivo 15', deveui: '0102030405060715', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa15', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 16, name: 'Dispositivo 16', deveui: '0102030405060716', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa16', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 17, name: 'Dispositivo 17', deveui: '0102030405060717', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa17', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 18, name: 'Dispositivo 18', deveui: '0102030405060718', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa18', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 19, name: 'Dispositivo 19', deveui: '0102030405060719', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa19', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 20, name: 'Dispositivo 20', deveui: '0102030405060720', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa20', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 21, name: 'Dispositivo 21', deveui: '0102030405060721', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa21', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 22, name: 'Dispositivo 22', deveui: '0102030405060722', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa22', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 23, name: 'Dispositivo 23', deveui: '0102030405060723', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa23', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 24, name: 'Dispositivo 24', deveui: '0102030405060724', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa24', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 25, name: 'Dispositivo 25', deveui: '0102030405060725', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa25', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 26, name: 'Dispositivo 26', deveui: '0102030405060726', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa26', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 27, name: 'Dispositivo 27', deveui: '0102030405060727', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa27', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 28, name: 'Dispositivo 28', deveui: '0102030405060728', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa28', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 29, name: 'Dispositivo 29', deveui: '0102030405060729', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa29', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 30, name: 'Dispositivo 30', deveui: '0102030405060730', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa30', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 31, name: 'Dispositivo 31', deveui: '0102030405060731', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa31', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 32, name: 'Dispositivo 32', deveui: '0102030405060732', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa32', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 33, name: 'Dispositivo 33', deveui: '0102030405060733', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa33', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 34, name: 'Dispositivo 34', deveui: '0102030405060734', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa34', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 35, name: 'Dispositivo 35', deveui: '0102030405060735', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa35', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 36, name: 'Dispositivo 36', deveui: '0102030405060736', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa36', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 37, name: 'Dispositivo 37', deveui: '0102030405060737', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa37', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 38, name: 'Dispositivo 38', deveui: '0102030405060738', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa38', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 39, name: 'Dispositivo 39', deveui: '0102030405060739', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa39', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 40, name: 'Dispositivo 40', deveui: '0102030405060740', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa40', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 41, name: 'Dispositivo 41', deveui: '0102030405060741', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa41', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 42, name: 'Dispositivo 42', deveui: '0102030405060742', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa42', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 43, name: 'Dispositivo 43', deveui: '0102030405060743', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa43', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 44, name: 'Dispositivo 44', deveui: '0102030405060744', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa44', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 45, name: 'Dispositivo 45', deveui: '0102030405060745', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa45', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 46, name: 'Dispositivo 46', deveui: '0102030405060746', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa46', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 47, name: 'Dispositivo 47', deveui: '0102030405060747', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa47', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 48, name: 'Dispositivo 48', deveui: '0102030405060748', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa48', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 49, name: 'Dispositivo 49', deveui: '0102030405060749', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa49', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
//     { id: 50, name: 'Dispositivo 50', deveui: '0102030405060750', aws_id: 'lkfayhdabvstinehpglknmfasnfpsa50', last_seen: new Date().toLocaleString(), latitude: 6.25921, longitude: -75.57537 },
// ]

export const DeviceDatatable = ({devices}) => {

    const columns = [
        { name: '#', selector: (row) => row.id, sortable: true, center: true, maxWidth: '20px' },
        // { name: 'AWS ID', selector: (row) => row.Id, sortable: true, center: true, maxWidth: '150px' },
        { name: 'Deveui', selector: (row) => row.LoRaWAN.DevEui, sortable: true, center: true, maxWidth: '200px' },
        { name: 'Nombre', selector: (row) => row.Name, sortable: true, center: true },
        { name: 'Aplicación', selector: (row) => row.DestinationName, sortable: true, center: true },
        { name: 'Último Dato', selector: (row) => row.LastUplinkReceivedAt, sortable: true, center: true },
        { name: 'Ubicación', selector: (row) => row.location, sortable: false, center: true, minWidth: '200px' },
        { name: 'Controles', selector: (row) => row.control, sortable: false, center: true, minWidth: '300px' },
    ]

    const data = devices.map((item) => {

        item.location = (
            <div className='' >
                <div className='btn-group'>
                    {/* Google Map */}
                    <Link to={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`} target='_blank' className='btn btn-transparent px-4' title='Abrir en Google Map' >
                        <img src='/images/map.png' alt="" width={25} />
                    </Link>
                    {/* Google Street View */}
                    <Link to={`http://maps.google.com/maps?q=&layer=c&cbll=${item.latitude},${item.longitude}&cbp=`} target='_blank' className='btn btn-transparent px-4' title='Abrir en Google Street View' >
                        <img src='/images/street_view.png' alt="" width={25} />
                    </Link>
                </div>
            </div>
        )

        item.control = (
            <div className='' >
                <div className='btn-group'>
                    {/* Editar Dispositivo */}
                    <DeviceEditDrawer item={item}>
                        <div className='btn btn-transparent px-4'>
                            <i className='fa fa-edit' /> Editar
                        </div>
                    </DeviceEditDrawer>

                    {/* Datos Uplink & Downlink */}
                    <DeviceDataDrawer item={item}>
                        <div className='btn btn-transparent px-4'>
                            <i className='fa fa-database' /> Datos
                        </div>
                    </DeviceDataDrawer>
                </div>
            </div>
        )

        return item
    })

    return (
        <>
            <div className='w-100 text-center mt-4'>
                <h4>Lista de Dispositivos</h4>
            </div>

            <DataTable
                columns={columns}
                data={data}
                className='mt-3'
                pagination={true}
                paginationPerPage={10}
                paginationRowsPerPageOptions={[1, 5, 10, 50, 100]}
                highlightOnHover={true}
                selectableRows={true}
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

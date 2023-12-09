// Documentation: https://react-data-table-component.netlify.app/

import React from 'react'
import DataTable from 'react-data-table-component'

export const Datatable = () => {

    const customStyles = {
        table: {
            style: {
                backgroundColor: 'transparent',
            },
        },
        tableWrapper: {
            style: {
                backgroundColor: 'transparent',
            },
        },
        rows: {
            style: {
                backgroundColor: '#00000030',
                borderColor: '0',
                transition: 'background 0.2s',
            },
            stripedStyle: {
                backgroundColor: '#00000040',
            },
            highlightOnHoverStyle: {
                transitionProperty: 'background-color',
                transitionDuration: '0.15s',
                backgroundColor: '#050b50',
                outline: 'none',
                border: 'none',
                color: '#fff',
            },
        },
        head: {
            style: {
                backgroundColor: 'transparent',
            },
        },
        headRow: {
            style: {
                backgroundColor: 'transparent',
            },
        },
        headCells: {
            style: {
                backgroundColor: '#00000066',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '1.3em',
            },
        },
        cells: {
            style: {
                color: '#ffffff',
                fontFamily: 'monospace',
                textAlign: 'center'
            },
        },
        pagination: {
            style: {
                backgroundColor: '#00000020',
                color: '#ffffff',
            },
            pageButtonsStyle: {
                backgroundColor: 'transparent',
                color: '#ffffff',
            },
        },
    };
    
    const columns = [
        { name: '#', selector: (row) => row.id, sortable: true, maxWidth: '20px' },
        { name: 'AWS ID', selector: (row) => row.aws_id, sortable: true, maxWidth: '150px' },
        { name: 'Deveui', selector: (row) => row.deveui, sortable: true, maxWidth: '200px'  },
        { name: 'Nombre', selector: (row) => row.name, sortable: true },
        { name: 'Último Dato', selector: (row) => row.last_seen, sortable: true, maxWidth: '200px'  },
        { name: 'Ubicación', selector: (row) => row.location, sortable: false, maxWidth: '200px' },
        { name: 'Controles', selector: (row) => row.control, sortable: false },
    ]

    const values = [
        { id: 0, name: '0', deveui: '0102030405060700', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad0', last_seen: new Date().toLocaleString() },
        { id: 1, name: '1', deveui: '0102030405060701', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad1', last_seen: new Date().toLocaleString() },
        { id: 2, name: '2', deveui: '0102030405060702', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad2', last_seen: new Date().toLocaleString() },
        { id: 3, name: '3', deveui: '0102030405060703', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad3', last_seen: new Date().toLocaleString() },
        { id: 4, name: '4', deveui: '0102030405060704', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad4', last_seen: new Date().toLocaleString() },
        { id: 5, name: '5', deveui: '0102030405060705', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad5', last_seen: new Date().toLocaleString() },
        { id: 6, name: '6', deveui: '0102030405060706', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad6', last_seen: new Date().toLocaleString() },
        { id: 7, name: '7', deveui: '0102030405060707', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad7', last_seen: new Date().toLocaleString() },
        { id: 8, name: '8', deveui: '0102030405060708', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad8', last_seen: new Date().toLocaleString() },
        { id: 9, name: '9', deveui: '0102030405060709', aws_id: 'lkfayhdabvstinehpglknmfasnfpsad9', last_seen: new Date().toLocaleString() },
    ]

    const data = values.map((item) => {
        item.aws_id = <div className='link-light' style={{cursor: 'pointer'}} title='Copiar'><i className='fa fa-copy' /> {item.aws_id}</div>
        item.deveui = <div className='link-light' style={{cursor: 'pointer'}} title='Copiar'><i className='fa fa-copy' /> {item.deveui}</div>
        item.control = <div className='' >controles</div>
        item.location = <div className='' >location</div>
        return item
    })

    return <DataTable
        columns={columns}
        data={data}
        className='mt-5'
        pagination={true}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[1, 2, 3, 5, 10]}
        highlightOnHover={true}
        striped={true}
        customStyles={customStyles}
        paginationIconFirstPage={<i className=" fas fa-angle-double-left" />}
        paginationIconLastPage={<i className=" fas fa-angle-double-right" />}
        paginationIconNext={<i className=" fas fa-angle-right" />}
        paginationIconPrevious={<i className=" fas fa-angle-left" />}
    />
}
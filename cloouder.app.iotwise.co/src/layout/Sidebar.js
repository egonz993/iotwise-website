import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './layout.css'

export const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleItemClick = (link) => {
    setIsOpen(false);
    navigate(link)
  }

  const SidebarItem = ({title, icon, link, active}) => {

    return (
      <ListItem disablePadding className={`sidebar-item mb-1 ${active ? 'active' : ''}`}>
        <ListItemButton  onClick={() => handleItemClick(link)}>
          <ListItemIcon>
            <i className={`sidebar-icon ${icon}`} />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    )
  }


  return (
    <React.Fragment>
      <div className="sidebar" >
        <div onClick={toggleDrawer(true)} className='p-0 m-0 d-inline'>
          <button className='toggle-menu-btn'>
            <i className='fa fa-bars fa-lg' /> Menú
          </button>
        </div>
        <React.Fragment>
          <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer(false)}
          >
            <div className='sidebar-content'>
              <div className='text-center mb-4'>
                <img src="https://iotwise.co/images/iotwise-logo-white.svg" alt="" width={100} />
                <h5>Cloouder<sup>®</sup> LNS</h5>
                <h6>LoRaWAN Network Server</h6>
              </div>

              <Divider className='sidebar-divider' />

              <List>
                <SidebarItem title="Inicio" icon="fa fa-home" link="/app" active={true} />
                <SidebarItem title="Dispositivos" icon="fa fa-desktop" link="/app" />
                <SidebarItem title="Gateways" icon="fa fa-wifi" link="/app" />
                <SidebarItem title="Funciones" icon="fa fa-code" link="/app" />
                <SidebarItem title="Aplicaciones" icon="fa fa-laptop" link="/app" />
                <SidebarItem title="Grupos" icon="fa fa-sitemap" link="/app" />
                <SidebarItem title="Perfiles" icon="fa fa-cube" link="/app" />
                <SidebarItem title="Eventos" icon="fa fa-calendar" link="/app" />
                
                <Divider className='sidebar-divider' />
                
                <SidebarItem title="Documentación" icon="fa fa-file-text" link="/app" />
              </List>
            </div>

          </Drawer>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
}





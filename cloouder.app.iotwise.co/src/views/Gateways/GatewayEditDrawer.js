import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';

const drawerStyes = {
  height: 'calc(100vh - 120px)',
  with: '100%',
  overflowY: 'auto',
  padding: '15px',
  background: '#000',
  color: '#fff'
}

export const GatewayEditDrawer = ({ item, children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const BtnGroup = () => {
    return (
      <div className='btn-group'>
        <button className='btn btn-transparent link-danger' onClick={() => setIsOpen(false)} >
        <i className='fa fa-circle-xmark' /> <span className='d-none d-md-inline txt-action-btn'>Cerrar</span>
        </button>
      </div>
    )
  }


  return (
    item && <React.Fragment>
      <div>

        {/* Click to Open */}
        <div onClick={toggleDrawer(true)}>
          {children}
        </div>

        <React.Fragment>
          <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={toggleDrawer(false)}
          >
            
            <div style={drawerStyes}>
              <div className='mb-4 d-flex justify-content-between'>
                {/* Title */}
                <h5>{item.name}</h5>

                {/* Action Buttons */}
                <BtnGroup />
              </div>
            </div>

          </Drawer>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
}





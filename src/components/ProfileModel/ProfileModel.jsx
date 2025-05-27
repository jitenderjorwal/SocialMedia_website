import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';

function ProfieModel({modelOpened, setModelOpened}) {
  
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modelOpened}
        onClose={()=>setModelOpened(false)}
        title="Authentication"
        size='55%'
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        
        }}
      >
        {/* Modal content */}
        <form  className="infoForm">
            <h3>Your Info</h3>

            <div>
                <input 
                type="text" 
                className="infoInput" 
                name='FirstName' 
                placeholder='First Name' 
                />

            <input 
                type="text" 
                className="infoInput" 
                name='LastName' 
                placeholder='Last Name' 
                />

            </div>

            <div>
            <input 
                type="text" 
                className="infoInput" 
                name='worksat' 
                placeholder='Works at ' 
                />  
            </div>

            <div>
                <input 
                type="text" 
                className="infoInput" 
                name='Livesin' 
                placeholder='Lives in' 
                />

                <input 
                type="text" 
                className="infoInput" 
                name='Country' 
                placeholder='Country' 
                />
            </div>

            <div>
                <input 
                type="text" 
                className="infoInput" 
                name='RelationshipStatus' 
                placeholder='Relationship Status' 
                />
            </div>

            <div>
                Profile Image
                <input type="file" name='ProfileImage' />
                Cover Image
                <input type="file" name='CoverImage' />
            </div>
            <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfieModel;

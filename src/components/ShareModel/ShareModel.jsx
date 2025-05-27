import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from "../Postshare/PostShare";

function ShareModel({modelOpened, setModelOpened}) {
  
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

        <PostShare/>
        
      </Modal>
    </>
  );
}

export default ShareModel;

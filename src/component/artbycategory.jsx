import React from 'react'
import {Box,Tabs,TabList,TabPanels,TabPanel,Tab} from '@chakra-ui/react'
export const Artbycategory = () => {
  return (
    <Tabs>
    <TabList>
    <Tab>Entertainment</Tab>
    <Tab>Teknology & Sains</Tab>
    <Tab>Bisnis</Tab>
    <Tab>Food & Travel</Tab>
    <Tab>Sports</Tab>
    <Tab>Otomotif</Tab>
    </TabList>
  
    <TabPanels>
      <TabPanel>
        <p>Entertainment</p>
      </TabPanel>
      <TabPanel>
        <p>Teknology & Sains</p>
      </TabPanel>
      <TabPanel>
        <p>Bisnis</p>
      </TabPanel>
      <TabPanel>
        <p>Food & Travel</p>
      </TabPanel>
      <TabPanel>
        <p>Sports</p>
      </TabPanel>
      <TabPanel>
        <p>Otomotif</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

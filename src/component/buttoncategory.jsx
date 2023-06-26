import React from 'react'
import {Box,Menu,MenuButton,MenuList,MenuItem,Button} from '@chakra-ui/react'
export const Category = () => {
  return (
    <Box>
        <Menu>
  <MenuButton as={Button}>
    Category
  </MenuButton>
  <MenuList>
    <MenuItem>Entertainment</MenuItem>
    <MenuItem>Teknology & Sains</MenuItem>
    <MenuItem>Bisnis</MenuItem>
    <MenuItem>Food & Travel</MenuItem>
    <MenuItem>Sports</MenuItem>
    <MenuItem>Otomotif</MenuItem>
  </MenuList>
</Menu>
    </Box>
  )
}

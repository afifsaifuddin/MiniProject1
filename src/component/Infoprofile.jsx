import React from "react";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
export const Infoprofile = () => {
  const username = useSelector((state) => state.authreducer.username);
  const phone = useSelector((state) => state.authreducer.phone);
  const email = useSelector((state) => state.authreducer.email);
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Detail Profile</Tab>
          <Tab>Bookmarks</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel fontWeight={"bold"} fontSize={"15px"}>
            <Stack mr={"500px"} gap={"20px"}>
              <Flex justifyContent={"space-between"}>
                <Text>Username </Text>
                <Text>{username}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Phone Number </Text>
                <Text>{phone}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Email Address </Text>
                <Text>{email}</Text>
              </Flex>
            </Stack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

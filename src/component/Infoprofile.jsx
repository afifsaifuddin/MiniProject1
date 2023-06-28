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
  const { user } = useSelector((state) => state.authreducer);

  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Detail Profile</Tab>
          <Tab>Your Article</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel fontWeight={"bold"} fontSize={"15px"}>
            <Stack mr={"500px"} gap={"20px"}>
              <Flex justifyContent={"space-between"}>
                <Text>Id </Text>
                <Text>{user.id}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Account Status </Text>
                <Text>
                  {user.isVerified ? (
                    <Text color={"green"}>Verified</Text>
                  ) : (
                    <Text color={"red"}>Not Verified</Text>
                  )}
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Username </Text>
                <Text>{user.username}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Phone Number </Text>
                <Text>{user.phone}</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Email Address </Text>
                <Text>{user.email}</Text>
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

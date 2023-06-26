// import React from "react";
// import {
//   Box,
//   Modal,
//   ModalBody,
//   ModalOverlay,
//   ModalContent,
//   ModalCloseButton,
//   Text,
//   Link,
// } from "@chakra-ui/react";
// import Signin from "./signin";
// import Signup from "./signup";
// import { useState } from "react";
// import { useDisclosure } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// export const Modalregister = ({ isOpen, onClose }) => {
//   const login = useSelector((state) => state.authreducer.login);
//   const [isSign, setisSign] = useState(login);
//   const handleClickSignin = () => {
//     setisSign(!isSign);
//   };
//   return (
//     <Box>
//       {" "}
//       <Modal isCentered isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalCloseButton />
//           <ModalBody>{!login ? <Signup /> : <Signin />}</ModalBody>
//           <Box>
//             {isSign ? (
//               <Text align={"center"} mt={-20}>
//                 Note have an account?
//                 <Link onClick={handleClickSignin}>Sign Up</Link>
//               </Text>
//             ) : (
//               <Text align={"center"} mt={-20}>
//                 Already have account?
//                 <Link onClick={handleClickSignin}>Sign In</Link>
//               </Text>
//             )}
//           </Box>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// Chakra imports
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
  Textarea,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import { MdChevronLeft, MdChevronRight, MdOutlineCalendarMonth, MdAvTimer } from "react-icons/md";
import Calendar from "react-calendar";
import { MobileTimePicker } from "@mui/lab";
import dayjs from "dayjs";


// Custom components
import Card from "components/card/Card.js";
import React, { useState } from "react";
// Assets
import { MdEdit, MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function Project(props) {
  const { title, ranking, link, image, selectRange, ...rest } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, onChange] = useState(new Date());

  const handleDateChange = (date) => {
    onChange(date);
    onClose();
  };

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p='14px'>
      <Flex align='center' direction={{ base: "column", md: "row" }}>
        <Box w={{ base: "100%", md: "60%" }} me={{ md: "36px" }}>

          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <InputGroup>
              <Input type="text" />
            </InputGroup>
          </FormControl>

          <FormControl id="desc">
            <FormLabel>Description</FormLabel>
            <InputGroup>
              <Textarea type="text" />
            </InputGroup>
          </FormControl>

          <FormControl id="date">
            <FormLabel>Add date</FormLabel>
            <InputGroup>
              <InputLeftAddon width="5rem">
                <Icon as={MdOutlineCalendarMonth} color={brandColor} boxSize={6} />
              </InputLeftAddon>
              <Input
                id="date"
                onClick={onOpen}
                placeholder="Select date"
                pr="5rem"
              />
            </InputGroup>
          </FormControl>

          <FormControl id="title">
            <FormLabel>Time</FormLabel>
            <InputGroup>
              <InputLeftAddon width="5rem">
                <Icon as={MdAvTimer} color={brandColor} boxSize={6} />
              </InputLeftAddon>
                <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
            </InputGroup>
          </FormControl>

          <FormControl id="title">
            <FormLabel>Hours</FormLabel>
            <InputGroup>
              <Input type="number" placeholder="Enter Hours" />
            </InputGroup>
          </FormControl>

        </Box>

        <Dropzone
          w={{ base: "100%", md: "auto" }}
          maxH={{ base: "60%", lg: "80%", "2xl": "100%" }}
          minH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          mb='20px'
          content={
            <Box>
              <Icon as={MdUpload} w='80px' h='80px' color={brandColor} />
              <Flex justify='center' mx='auto' mb='12px'>
                <Text fontSize='xl' fontWeight='700' color={brandColor}>
                  Upload Files
                </Text>
              </Flex>
              <Text fontSize='sm' fontWeight='500' color='secondaryGray.500'>
                PNG, JPG and GIF files are allowed
              </Text>
            </Box>
          }
        />
        <Modal isOpen={isOpen} onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Select Date</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Calendar
                onChange={handleDateChange}
                value={value}
                selectRange={false}
                view={"month"}
                tileContent={<Text color="brand.500"></Text>}
                prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
                nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Card>
  );
}

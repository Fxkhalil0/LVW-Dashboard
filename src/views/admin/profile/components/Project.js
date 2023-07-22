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
  Button,
  Select,
  Tag, TagLabel, TagCloseButton
} from "@chakra-ui/react";

import { MdChevronLeft, MdChevronRight, MdOutlineCalendarMonth, MdAvTimer, MdOutlineAccessTime, MdAdd, MdAttachMoney } from "react-icons/md";
import Calendar from "react-calendar";



// Custom components
import Card from "components/card/Card.js";
import React, { useState , useEffect } from "react";
// Assets
import { MdEdit, MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function Project(props) {
  const { title, ranking, link, image, selectRange, ...rest } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(isOpen)
  const [value, onChange] = useState(null);
  const [time, setTime] = useState(null);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    date: '',
    startTime: '',
    hours: '',
    language: [],
    tourGuide: [],
    cameraOperator: [],
    director: [],
    price: '',
    tags: []
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  function handleTimeChange(newTime) {
    setTime(newTime);
  }

  const handleDateChange = (date) => {
    setFormData({ ...formData, date: date.toISOString() });
    // setFormData({ ...formData, date: date ? date.toLocaleDateString("en-GB").split("T")[0] : null });
    onChange(date);
    console.log(date)
    onClose();
  };
  const [activeButtons, setActiveButtons] = useState([]);

  function handleButtonClick(language) {
    if (!activeButtons.includes(language)) {
      setActiveButtons([...activeButtons, language]);
      setFormData((prevData) => ({
        ...prevData,
        language: [...prevData.language, language],
        tourGuide: [...prevData.tourGuide, { language: language, guide: null }],
        cameraOperator: [...prevData.cameraOperator, { language: language, operator: null }],
        director: [...prevData.director, { language: language, director: null }],
      }));
    } else {
      setActiveButtons(activeButtons.filter((button) => button !== language));
      setFormData((prevData) => ({
        ...prevData,
        language: prevData.language.filter((lang) => lang !== language),
        tourGuide: prevData.tourGuide.filter((guide) => guide.language !== language),
        cameraOperator: prevData.cameraOperator.filter((operator) => operator.language !== language),
        director: prevData.director.filter((director) => director.language !== language),
      }));
    }
  }

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedInput = tagInput.trim();
      if (trimmedInput !== "") {
        setTags([...tags, trimmedInput]);
        setTagInput("");
      }
    }
  };

  const handleTagRemove = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };
//   const handleSubmit = () => {
//   // Update the formData with the tags array
//   setFormData({ ...formData, tags: tags });
//   console.log(formData);
// };

  const handleSubmit = () => {
    // Update the formData with the tags array
    setFormData({ ...formData, tags:tags });
    // console.log(formData);
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
              <Input type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </InputGroup>
          </FormControl>

          <FormControl id="desc">
            <FormLabel>Description</FormLabel>
            <InputGroup>
              <Textarea 
              type="text"
              resize='none'
              onChange={(e) => setFormData({ ...formData, desc: e.target.value })} />
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
                value={value ? value.toLocaleDateString("en-GB").split("T")[0] : ""}
                // value={formData.date || ''}
                placeholder="Select date"
                pr="5rem"
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </InputGroup>
          </FormControl>

          <FormControl id="startTime">
            <FormLabel>Start Time:</FormLabel>
            <InputGroup>

              <input type="time" id="startTime" onChange={(e) => setFormData({ ...formData, startTime: e.target.value })} />



            </InputGroup>
          </FormControl>

          <FormControl id="hours">
            <FormLabel>Hours</FormLabel>
            <InputGroup>
              <Input type="number" placeholder="Enter Hours" onChange={(e) => setFormData({ ...formData, hours: e.target.value })} />
            </InputGroup>
          </FormControl>

          <FormControl id="language">
            <FormLabel>Choose Language:</FormLabel>
            <Button
              fontSize="sm"
              variant="brand"
              w="20%"
              h="10"
              mb="24px"
              mr="10px"
              rightIcon={<Icon as={MdAdd} color='white' boxSize={6} />}
              isActive={activeButtons.includes('Arabic')}
              onClick={() => handleButtonClick('Arabic')}
            >
              Arabic
            </Button>
            {activeButtons.includes('Arabic') && (
              <>
                <Select
                  placeholder="Select tour guide"
                  mb="24px"
                  mr="10px"
                  name="tourGuideArabic"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tourGuide: [
                        ...formData.tourGuide.filter((guide) => guide.language !== 'Arabic'),
                        { language: 'Arabic', guide: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="guide1">Tour guide 1</option>
                  <option value="guide2">Tour guide 2</option>
                  <option value="guide3">Tour guide 3</option>
                </Select>

                <Select
                  placeholder="Select camera operator"
                  mb="24px"
                  mr="10px"
                  name="cameraOperatorArabic"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cameraOperator: [
                        ...formData.cameraOperator.filter((operator) => operator.language !== 'Arabic'),
                        { language: 'Arabic', operator: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="operator1">Camera operator 1</option>
                  <option value="operator2">Camera operator 2</option>
                  <option value="operator3">Camera operator 3</option>
                </Select>

                <Select
                  placeholder="Select director"
                  mb="24px"
                  mr="10px"
                  name="directorArabic"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      director: [
                        ...formData.director.filter((director) => director.language !== 'Arabic'),
                        { language: 'Arabic', director: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="director1">Director 1</option>
                  <option value="director2">Director 2</option>
                  <option value="director3">Director 3</option>
                </Select>
              </>
            )}

            <Button
              fontSize="sm"
              variant="brand"
              w="20%"
              h="10"
              mb="24px"
              mr="10px"
              rightIcon={<Icon as={MdAdd} color='white' boxSize={6} />}
              isActive={activeButtons.includes('English')}
              onClick={() => handleButtonClick('English')}
            >
              English
            </Button>
            {activeButtons.includes('English') && (
              <>
                <Select
                  placeholder="Select tour guide"
                  mb="24px"
                  mr="10px"
                  name="tourGuideEnglish"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tourGuide: [
                        ...formData.tourGuide.filter((guide) => guide.language !== 'English'),
                        { language: 'English', guide: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="guide1">Tour guide 1</option>
                  <option value="guide2">Tour guide 2</option>
                  <option value="guide3">Tour guide 3</option>
                </Select>

                <Select
                  placeholder="Select camera operator"
                  mb="24px"
                  mr="10px"
                  name="cameraOperatorEnglish"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cameraOperator: [
                        ...formData.cameraOperator.filter((operator) => operator.language !== 'English'),
                        { language: 'English', operator: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="operator1">Camera operator 1</option>
                  <option value="operator2">Camera operator 2</option>
                  <option value="operator3">Camera operator 3</option>
                </Select>

                <Select
                  placeholder="Select director"
                  mb="24px"
                  mr="10px"
                  name="directorEnglish"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      director: [
                        ...formData.director.filter((director) => director.language !== 'English'),
                        { language: 'English', director: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="director1">Director 1</option>
                  <option value="director2">Director 2</option>
                  <option value="director3">Director 3</option>
                </Select>
              </>
            )}

            <Button
              fontSize="sm"
              variant="brand"
              w="20%"
              h="10"
              mb="24px"
              rightIcon={<Icon as={MdAdd} color='white' boxSize={6} />}
              isActive={activeButtons.includes('Italiano')}
              onClick={() => handleButtonClick('Italiano')}
            >
              Italiano
            </Button>
            {activeButtons.includes('Italiano') && (
              <>
                <Select
                  placeholder="Select tour guide"
                  mb="24px"
                  mr="10px"
                  name="tourGuideItaliano"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tourGuide: [
                        ...formData.tourGuide.filter((guide) => guide.language !== 'Italiano'),
                        { language: 'Italiano', guide: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="guide1">Tour guide 1</option>
                  <option value="guide2">Tour guide 2</option>
                  <option value="guide3">Tour guide 3</option>
                </Select>

                <Select
                  placeholder="Select camera operator"
                  mb="24px"
                  mr="10px"
                  name="cameraOperatorItaliano"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      cameraOperator: [
                        ...formData.cameraOperator.filter((operator) => operator.language !== 'Italiano'),
                        { language: 'Italiano', operator: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="operator1">Camera operator 1</option>
                  <option value="operator2">Camera operator 2</option>
                  <option value="operator3">Camera operator 3</option>
                </Select>

                <Select
                  placeholder="Select director"
                  mb="24px"
                  mr="10px"
                  name="directorItaliano"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      director: [
                        ...formData.director.filter((director) => director.language !== 'Italiano'),
                        { language: 'Italiano', director: e.target.value },
                      ],
                    })
                  }
                >
                  <option value="director1">Director 1</option>
                  <option value="director2">Director 2</option>
                  <option value="director3">Director 3</option>
                </Select>
              </>
            )}
          </FormControl>

          <FormControl id="price">
            <FormLabel>Add Price</FormLabel>
            <InputGroup>
              <InputLeftAddon width="5rem">
                <Icon as={MdAttachMoney} color={brandColor} boxSize={6} />
              </InputLeftAddon>
              <Input
                id="price"
                type="number"
                placeholder="Add Price"
                pr="5rem"
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </InputGroup>
          </FormControl>

          <FormControl id="tags">
            <FormLabel>Tags</FormLabel>
            <InputGroup>
              <Input
                type="text"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleTagInputKeyDown}
                placeholder="Add tags (press Enter to add)"
              />
            </InputGroup>
          </FormControl>

          {/* Display the tags */}
          {tags.map((tag, index) => (
            <Tag 
            key={index}
            variant="subtle"
            colorScheme="blue" mt="2"
            marginRight="10px">
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => handleTagRemove(tag)} />
            </Tag>
          ))}


          <Button
            variant="brand"
            mt="40px"
            display='block'
            // onClick={() => console.log(formData)}
            onClick={handleSubmit}
          >
            Submit
          </Button>

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

// Chakra imports
import { Box, SimpleGrid, useColorModeValue,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  TableContainer,
  Input,
  Select, } from "@chakra-ui/react";

  import { FileUpload } from 'primereact/fileupload';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";      

import AllDirectorsTable from "views/admin/dataTables/components/DirectorsTable"
import { AllDirectorsData } from "views/admin/dataTables/variables/columnsData";

import tableAllDirectors from "views/admin/dataTables/variables/tableAllDirectors.json"
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function DirectorsTable() {
  const cvUpload = async (event) => {
    console.log("gggggggggggg")
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob());

    reader.readAsDataURL(blob);
    console.log(blob)
    reader.onloadend = function () {
      const base64data = reader.result;
      console.log(base64data)
    };
  };

  const licenseUpload = async (event) => {
    console.log("gggghhhhhhhhhgg")
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob());

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;
    };
  };
  const [isRowModalOpen, setIsRowModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwoed, setPassword] = useState("");

  const [director,setDirector] = useState([])
  // Chakra Color Mode
  useEffect(()=>{
    axios.get("http://localhost:5000/admin/allDirectors").then((res)=>{
      setDirector(res.data.data)
    })
  },[])

  const handleOpenModal = () => {
    setIsRowModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsRowModalOpen(false);
  };

  const handleSave = () => {
    // Perform save logic here
    handleCloseModal();
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <>
        <div className="add__admin__button" style={{ alignItems: 'center', textAlign: 'center', marginBottom: '20px' }}>
          <Button onClick={handleOpenModal} colorScheme="blue">
            Add Director
          </Button>
        </div>
        <Modal isOpen={isRowModalOpen} onClose={handleCloseModal}>
          <ModalOverlay />
          <ModalContent minW="500px">
            <ModalHeader>Add Director</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                mb='15px'
              />
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb='15px'
              />
              <Input
                placeholder="Password"
                value={passwoed}
                onChange={(e) => setPassword(e.target.value)}
                mb='15px'
              />

              <div className="card" style={{ display: 'flex'}}>
                <FileUpload mode="basic"
                name="cv"
                url="/api/upload"
                customUpload
                uploadHandler={cvUpload}
                onSelect={(e)=> { console.log(e.files[0])
                }}
                style={{marginRight: '10px'}}
                chooseLabel="Upload CV"
                chooseOptions={{ style: { backgroundColor: "#3965FF" } }}
                
                />

                <FileUpload mode="basic"
                name="license"
                url="/api/upload"
                customUpload
                uploadHandler={licenseUpload}
                onSelect={(e)=> { console.log(e.files[0])
                  
                }}
                chooseLabel="Upload License"
                chooseOptions={{ style: { backgroundColor: "#3965FF" } }}
                />
              </div>

            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllDirectorsTable columnsData={AllDirectorsData} tableData={director} />
      </SimpleGrid>
    </Box>
  );
}

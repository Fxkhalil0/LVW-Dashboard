

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllTourGuidesTable from "views/admin/dataTables/components/TourGuidesTable"
import { AllTourGuidesData, AllCameraOperatorsData } from "views/admin/dataTables/variables/columnsData";

import tableAllTourGuides from "views/admin/dataTables/variables/tableAllTourGuides.json"
import React ,{useState, useEffect}from "react";
import axios from 'axios';

export default function TourGuidesTable() {
  const [tourGuides,setTourGuides] =useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/admin/allTourGuides").then((res)=>{
      console.log(res.data.data)
      setTourGuides(res.data.data)
    })
  },[])
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllTourGuidesTable columnsData={AllTourGuidesData} tableData={tourGuides} />
      </SimpleGrid>
    </Box>
  );
}

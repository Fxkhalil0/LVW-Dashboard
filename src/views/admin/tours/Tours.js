

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllToursTable from "views/admin/dataTables/components/ToursTable"
import { AllToursData } from "views/admin/dataTables/variables/columnsData";

import tableAllTours from "views/admin/dataTables/variables/tableAllTours.json"
import React, { useEffect, useState } from "react";
import axios from "axios";
const uri = process.env.REACT_APP_BACKEND


export default function ToursTable() {
  const [tours,setTours] =useState([])
  // Chakra Color Mode
  useEffect(()=>{
    axios.get(`${uri}/admin/allTours`).then((res)=>{
      if(res.data.status == 200){
        setTours(res.data.data)
        }
    })
  },[])
  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllToursTable columnsData={AllToursData} tableData={tours} />
      </SimpleGrid>
    </Box>
  );
}

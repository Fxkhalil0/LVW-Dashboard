// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllDirectorsTable from "views/admin/dataTables/components/DirectorsTable"
import { AllDirectorsData } from "views/admin/dataTables/variables/columnsData";

import tableAllDirectors from "views/admin/dataTables/variables/tableAllDirectors.json"
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function DirectorsTable() {
  const [director,setDirector] = useState([])
  // Chakra Color Mode
  useEffect(()=>{
    axios.get("http://localhost:5000/admin/allDirectors").then((res)=>{
      setDirector(res.data.data)
    })
  },[])
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllDirectorsTable columnsData={AllDirectorsData} tableData={director} />
      </SimpleGrid>
    </Box>
  );
}

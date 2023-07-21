
// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllAdminsTable from "views/admin/dataTables/components/AdminsTable"
import { AllAdminsData } from "views/admin/dataTables/variables/columnsData";

import tableAllTours from "views/admin/dataTables/variables/tableAllTours.json"
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ToursTable() {
  const [admins,setAdmins] =useState([])
  // Chakra Color Mode
  useEffect(()=>{
    axios.get("http://localhost:5000/admin/allAdmins").then((res)=>{
      setAdmins(res.data.data)
    })
  },[])
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllAdminsTable columnsData={AllAdminsData} tableData={admins} />
      </SimpleGrid>
    </Box>
  );
}

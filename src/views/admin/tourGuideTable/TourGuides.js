

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllTourGuidesTable from "views/admin/dataTables/components/TourGuidesTable"
import { AllTourGuidesData } from "views/admin/dataTables/variables/columnsData";

import tableAllTourGuides from "views/admin/dataTables/variables/tableAllTourGuides.json"
import React ,{useState, useEffect}from "react";
import axios from 'axios';

export default function TourGuidesTable() {
  const [topTourGuides,setTopTourGuides] = useState(0)
  useEffect(() => {
    axios.get("http://localhost:5000/admin/topFiveTourGuides").then((res)=>{
      setTopTourGuides(res.data)
    })
    

  }, []);
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllTourGuidesTable columnsData={AllTourGuidesData} tableData={AllTourGuidesTable} />
      </SimpleGrid>
    </Box>
  );
}

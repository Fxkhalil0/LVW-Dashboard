

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllTourGuidesTable from "views/admin/dataTables/components/TourGuidesTable"
import { AllTourGuidesData } from "views/admin/dataTables/variables/columnsData";

import tableAllTourGuides from "views/admin/dataTables/variables/tableAllTourGuides.json"
import React from "react";

export default function TourGuidesTable() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllTourGuidesTable columnsData={AllTourGuidesData} tableData={tableAllTourGuides} />
      </SimpleGrid>
    </Box>
  );
}

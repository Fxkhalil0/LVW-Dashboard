

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllDirectorsTable from "views/admin/dataTables/components/TourGuidesTable"
import { AllDirectorsData } from "views/admin/dataTables/variables/columnsData";

import tableAllDirectors from "views/admin/dataTables/variables/tableAllDirectors.json"
import React from "react";

export default function DirectorsTable() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllDirectorsTable columnsData={AllDirectorsData} tableData={tableAllDirectors} />
      </SimpleGrid>
    </Box>
  );
}



// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllToursTable from "views/admin/dataTables/components/ToursTable"
import { AllToursData } from "views/admin/dataTables/variables/columnsData";

import tableAllTours from "views/admin/dataTables/variables/tableAllTours.json"
import React from "react";

export default function ToursTable() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllToursTable columnsData={AllToursData} tableData={tableAllTours} />
      </SimpleGrid>
    </Box>
  );
}

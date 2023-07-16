

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllReveiwsTable from "views/admin/dataTables/components/ReveiwsTable"
import { AllReveiwsData } from "views/admin/dataTables/variables/columnsData";

import tableAllReveiws from "views/admin/dataTables/variables/tableAllReveiws.json"
import React from "react";

export default function ReveiwsTable() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllReveiwsTable columnsData={AllReveiwsData} tableData={tableAllReveiws} />
      </SimpleGrid>
    </Box>
  );
}

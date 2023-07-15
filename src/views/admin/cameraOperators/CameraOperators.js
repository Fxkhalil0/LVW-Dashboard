

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";

import AllCameraOperatorsTable from "views/admin/dataTables/components/CameraOperatorsTable"
import { AllCameraOperatorsData } from "views/admin/dataTables/variables/columnsData";

import tableAllCameraOperators from "views/admin/dataTables/variables/tableAllCameraOperators.json"
import React from "react";

export default function CameraOperators() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
            <AllCameraOperatorsTable columnsData={AllCameraOperatorsData} tableData={tableAllCameraOperators} />
      </SimpleGrid>
    </Box>
  );
}

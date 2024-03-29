import {
    Avatar,
    Flex,
    Table,
    Checkbox,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React, { useEffect, useMemo } from "react";
  import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable
  } from "react-table";
  
  // Custom components
  import Card from "components/card/Card";
  
  export default function TopTourGuides(props) {
    const { columnsData, tableData } = props;
  
    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData , [tableData]);
    
    // if (!Array.isArray(tableData)) {
    //   console.error("tableData must be an array.");
    //   return null; // Return early if the data is not an array
    // }
  
    const tableInstance = useTable(
      {
        columns,
        data,
      },
      useGlobalFilter,
      useSortBy,
      usePagination
    );
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      initialState,
    } = tableInstance;
    initialState.pageSize = 5;
  
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

    useEffect(() => {
      
    
      console.log(props.tableData)
  
  }, []);

    return (
      <Card
        direction='column'
        w='100%'
        px='0px'
        overflowX={{ sm: "scroll", lg: "hidden" }}>
        <Flex px='25px' justify='space-between' align='center'>
          <Text
            color={textColor}
            fontSize='22px'
            fontWeight='700'
            lineHeight='100%'>
            Top Tour Guides
          </Text>
        </Flex>
        <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe='10px'
                    key={index}
                    borderColor={borderColor}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='gray.400'>
                      {column.render("Header")}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === "NAME") {
                      data = (
                        <Flex align='center'>
                          <Avatar
                            src={cell.value[1]}
                            w='30px'
                            h='30px'
                            me='8px'
                          />
                          <Text
                            color={textColor}
                            fontSize='sm'
                            fontWeight='600'>
                            {cell.value}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === "RATE") {
                      data = (
                        <Flex align='center'>
                          <Text
                            me='5px'
                            color={textColor}
                            fontSize='sm'
                            fontWeight='700'>
                            {cell.value ? `${(cell.value * 20).toFixed(1)}%` : '0%'}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === "TOURS") {
                      data = (
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {(cell.value).length}
                        </Text>
                      );
                    } else if (cell.column.Header === "LANGUAGE") {
                      data = (
                        <Text color={textColor} fontSize='sm' fontWeight='700'>
                          {cell.value}
                        </Text>
                      );
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        {data}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Card>
    );
  }

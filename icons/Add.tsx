import React from "react";
import { Box, Text, MoonIcon, SunIcon, CheckIcon, CircleIcon, ArrowBackIcon, 
        AddIcon, ArrowForwardIcon, ArrowUpIcon, ArrowDownIcon, CheckCircleIcon, 
        ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, 
        CloseIcon, SmallCloseIcon, HamburgerIcon, InfoIcon, InfoOutlineIcon, 
        MinusIcon, QuestionIcon, QuestionOutlineIcon, SearchIcon, WarningIcon,
         WarningTwoIcon, ThreeDotsIcon, WarningOutlineIcon, ShareIcon, PlayIcon, 
         FavouriteIcon, DeleteIcon, VStack, FlatList, useBreakpointValue, Center, NativeBaseProvider } from "native-base";


const Example = () => {
    const cols = useBreakpointValue({
      base: 3,
      sm: 4,
      md: 8
    });
    const icons = [{
      icon: <AddIcon />,
    }]
  
    return <Box w="100%">
        <FlatList data={icons} renderItem={({
        item
      }) => <VStack py="2" flex={1} space={2} my={3} mx={2} boxSize="76" alignItems="center">
              <Box _text={{
          textAlign: "center"
        }}>
                {item.icon}
              </Box>
            </VStack>
        }/>
      </Box>;
  };
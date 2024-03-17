import React from 'react';
import { Box, Heading, Image, Text, Link, Button, Grid, GridItem, Badge, Flex } from '@chakra-ui/react';

const CollectionCardPopulaire = ({ title, images, date, itemCount, itemLink }) => {
  // Function to determine the style for each image container
  const getImageContainerStyle = (index) => {
    let style = {
      position: 'relative',
      width: '100%',
      height: '100%',
    };
    if (index === 3) { // For the last image, apply a dark background
      style = {
        ...style,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
    }
    return style;
  };

  return (
    <Box borderRadius="lg" overflow="hidden">
      <Box>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="2fr 1fr" gap={2}>
          {images.map((image, index) => (
            <GridItem key={index} colSpan={index === 0 ? 2 : 1} rowSpan={index === 0 ? 2 : 1}>
              <Box style={getImageContainerStyle(index)}>
                <Image src={image.src} alt={image.alt} objectFit="cover" width="100%" height="100%" />
                {index === 3 && image.counter && (
                  <Badge
                    position="absolute"
                    color="white"
                    borderRadius="full"
                    px={3}
                    py={1}
                  >
                    +{image.counter}
                  </Badge>
                )}
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box p={4}>
        {date && (
          <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
            {date}
          </Text>
        )}
        <Heading size="md" mt={1} lineHeight="tight" noOfLines={1}>
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {itemCount && `Découvrez les ${itemCount} objets`}
        </Text>
      </Box>
      <Flex justifyContent="flex-end" p={4}>
        <Link href={itemLink} isExternal>
          <Button size="sm" colorScheme="blue">
            Voir plus
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default CollectionCardPopulaire;

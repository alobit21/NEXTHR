// posts/[postId]/page.tsx
import { IComment } from "@/utils/types";
import { Box, Center, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const getCommentsData = async (postId: string) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// We're adding this here to disable the default caching of subsequent
// requests so that the loading UI can be displayed even after refreshing
// the page.
export const dynamic = "force-dynamic";

export default async function EachPostPage({ params }: any) {
  const data = await getCommentsData(params.postId);

  return (
    <Center w="full">
      <VStack spacing={4} w="full" maxW="4xl">
        <Heading color="gray.400" fontSize="xl">
          POST ID: {params.postId}
        </Heading>

        <Heading color="gray.400" fontSize="xl">
          Comments:
        </Heading>

        <Stack>
          {data.map((comment: IComment) => (
            <Box key={comment.id}>
              <Text pb={4}>
                Comment by <b>{comment.name}</b>
              </Text>
              <Text pb={4}>{comment.body}</Text>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Center>
  );
}
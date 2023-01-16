import { Button, HStack, Skeleton, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Pagination: React.FC<{
  pageNumber: number,
  setPageNumber: (num: number) => void,
  totalItems: number,
  isLoading: boolean
}> = ({ pageNumber, setPageNumber, totalItems, isLoading }) => {
  const [disabledLast, setDisabledLast] = useState<boolean>(false)
  const [disabledNext, setDisabledNext] = useState<boolean>(false)

  useEffect(() => {
    if (pageNumber == 0) {
      setDisabledLast(true)
    } else setDisabledLast(false)

    if (pageNumber == (Number((totalItems / 6).toFixed(0)) - 1)) {
      setDisabledNext(true)
    } else setDisabledNext(false)

    setPageNumber(pageNumber)
  }, [pageNumber, totalItems])

  return (
    <HStack justify="center" align="center">
      {isLoading ? [...Array(2)].map((e, i) => <Skeleton w="126px" h="40px" key={'skeleton' + i} />) : (
        <>
          <Button disabled={disabledLast} onClick={() => setPageNumber(pageNumber - 1)}>
            <HStack align="inherit">
              <AiOutlineLeft size="20px" /><Text fontSize="lg">Last site</Text>
            </HStack>
          </Button>
          <Button disabled={disabledNext} onClick={() => setPageNumber(pageNumber + 1)}>
            <HStack align="inherit">
              <Text fontSize="lg">Next site</Text><AiOutlineRight fontSize="20px" />
            </HStack>
          </Button>
        </>
      )}
    </HStack >
  )
}

export default Pagination
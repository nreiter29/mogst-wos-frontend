import { Button, HStack, Skeleton, StackItem, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Pagination: React.FC<{
  site: number,
  setSite: (num: number) => void,
  totalItems: number,
  isLoading: boolean
}> = ({ site, setSite, totalItems, isLoading }) => {
  const [disabledLast, setDisabledLast] = useState<boolean>(false)
  const [disabledNext, setDisabledNext] = useState<boolean>(false)

  useEffect(() => {
    if (site == 0) {
      setDisabledLast(true)
    } else setDisabledLast(false)

    if (site == (Number((totalItems / 6).toFixed(0)) - 1)) {
      setDisabledNext(true)
    } else setDisabledNext(false)

    setSite(site)
  }, [site, totalItems])

  return (
    <HStack justify="center" align="center">
      {isLoading ? [...Array(2)].map((e, i) => <Skeleton w="126px" h="40px" key={'skeleton' + i} />) : (
        <>
          <Button disabled={disabledLast} onClick={() => setSite(site - 1)}>
            <HStack align="inherit">
              <AiOutlineLeft size="20px" /><Text fontSize="lg">Last site</Text>
            </HStack>
          </Button>
          <Button disabled={disabledNext} onClick={() => setSite(site + 1)}>
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
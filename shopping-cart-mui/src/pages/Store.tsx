import { Stack } from "@mui/material"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
export const Store = () => {
  return (
    <>
      {storeItems.map((item) => (
        <Stack
          key={item.id}
          sx={{ height: "300px", width: "300px" }}
          direction="row"
          spacing={2}
        >
          <StoreItem {...item} />
        </Stack>
      ))}
    </>
  )
}

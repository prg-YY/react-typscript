import { Box, Stack, Typography } from "@mui/material"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export const Store = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        Store
      </Typography>
      <Stack flexDirection="row" sx={{ flexGrow: 1 }}>
        {storeItems.map((item) => (
          <StoreItem {...item} />
        ))}
      </Stack>
    </Box>
  )
}

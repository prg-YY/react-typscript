import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material"
import { formatCurrency } from "../utilities/formatCurrncy"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imgUrl}
          alt="product image"
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">{name}</Typography>
          <Typography>{formatCurrency(price)}</Typography>
        </CardContent>
        <CardActions>
          <Stack>
            <Box>
              <Button variant="outlined" size="small" color="primary">
                +
              </Button>
              <Button variant="outlined" size="small" color="primary">
                -
              </Button>
            </Box>
            <Box>
              <Button>Add to cart</Button>
            </Box>
          </Stack>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

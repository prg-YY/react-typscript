import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import AirplanemodeActiveTwoToneIcon from "@mui/icons-material/AirplanemodeActiveTwoTone"
import { Badge, Stack, Drawer } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { styled } from "@mui/material/styles"
import { BadgeProps } from "@mui/material/Badge"

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 16,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: "16px", bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            href="/"
            size="large"
            edge="start"
            aria-label="logo"
            color="primary"
          >
            <AirplanemodeActiveTwoToneIcon />
          </IconButton>

          <Stack direction="row" spacing={3} marginLeft={6}>
            <Button href="/">Home</Button>
            <Button href="/about">About</Button>
            <Button href="/store">Store</Button>
          </Stack>
          <IconButton aria-label="cart" sx={{ marginLeft: "auto" }}>
            <StyledBadge badgeContent={2} color="info">
              <ShoppingCartIcon color="primary" />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

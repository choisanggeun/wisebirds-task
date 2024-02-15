"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { authAtom } from "../atoms/auth.atom";
import { Auth, AuthMe } from "../type/Auth";
import { usePathname } from "next/navigation";

interface HeaderProps {
  authMe: AuthMe;
}

function Header({ authMe }: HeaderProps) {
  const pathName = usePathname();
  const pathMainName = pathName.split("/")[1];

  const [auth, setAuth] = useAtom(authAtom);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleChange = (event: SelectChangeEvent) => {
    setAuth(event.target.value as Auth);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WiseBirds
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="캠페인"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textAlign: "center",
                backgroundColor:
                  pathMainName === "campaigns"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
              }}
              href="/campaigns"
            >
              캠페인
            </Button>
            {auth === "admin" && (
              <Button
                key="사용자"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textAlign: "center",
                  backgroundColor:
                    pathMainName === "users"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "transparent",
                }}
                href="/users"
              >
                사용자
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Typography
              onClick={handleOpenUserMenu}
              sx={{ pr: "20px", cursor: "pointer" }}
            >
              {authMe.email}
            </Typography>

            <Menu
              sx={{ mt: "40px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ p: 1, textAlign: "center" }}>
                <Typography sx={{ p: 1 }}>{authMe.name}</Typography>
                <Typography sx={{ p: 1 }}>{authMe.email}</Typography>
                <Typography sx={{ p: 1 }}>{authMe.company.name}</Typography>
              </Box>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                backgroundColor: "white",
                borderRadius: "5px",
                border: "1px solid #e0e0e0",
              }}
              size="small"
            >
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={auth}
                onChange={handleChange}
              >
                <MenuItem value="admin">어드민</MenuItem>
                <MenuItem value="manager">매니저</MenuItem>
                <MenuItem value="viewer">뷰어</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

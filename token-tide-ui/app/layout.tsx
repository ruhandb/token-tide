import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import { Box, Container, CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Token Tide - Crowdfunding on Web3",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <CssBaseline />
          <Container fixed>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
              {children}
            </Box>
          <SimpleBottomNavigation />
          </Container>
        </>
      </body>
    </html>
  );
}


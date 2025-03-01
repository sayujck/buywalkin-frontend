'use client'
import React from "react";
import { AppBar, Toolbar, Typography, Grid, Paper, Avatar, Button, TextField, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Card, CardContent, CardMedia, Badge, CardHeader, useMediaQuery } from "@mui/material";
import { Home, ShoppingCart, AccountCircle, Notifications, MoreVert, FavoriteBorder, ChatBubbleOutline, Favorite } from "@mui/icons-material";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import TuneIcon from '@mui/icons-material/Tune';
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/buywalkin_logo.png" 


export default function App() {
    const isSmallScreen = useMediaQuery("(max-width: 900px)");

    return (
        <>
            <Grid container>
                {/* Sidebar */}
                <Grid item xs={isSmallScreen ? 1 : 2.5}>
                    <Paper sx={{ height: "100%", display: "flex", flexDirection: "column" }} elevation={0}>
                        <div className="flex items-center p-3">
                            <Image width={isSmallScreen ? 24 : 30} height={isSmallScreen ? 24 : 30} src={logo} alt="Logo" />
                            {!isSmallScreen && (
                                <Typography variant="h6" className="p-2 font-bold">
                                    BuyWalkin
                                </Typography>
                            )}
                        </div>
                        {!isSmallScreen && (
                            <div className="ps-3 flex justify-start items-center">
                                <Avatar sx={{ width: 40, height: 40 }} />
                                <div className="m-2">
                                    <Typography sx={{ fontSize: "0.875rem", fontFamily: "Arial, sans-serif", fontWeight: 600 }}>
                                        John Doe
                                    </Typography>
                                    <Typography color="textSecondary" sx={{ fontSize: "0.75rem", fontFamily: "Arial, sans-serif" }}>
                                        Trivandrum
                                    </Typography>
                                </div>
                            </div>
                        )}

                        {/* Sidebar Menu */}
                        <div className="flex flex-col">
                            <Divider />
                            <List sx={{ padding: 0 }}>
                                {[
                                    { icon: <Home fontSize="small" />, label: "Home", sub: "Product and service feed" },
                                    { icon: <ShoppingCart fontSize="small" />, label: "My Orders", sub: "View your order history" },
                                    { icon: <AddLocationAltIcon fontSize="small" />, label: "Saved Address", sub: "Add and edit address" },
                                    { icon: <AccountCircle fontSize="small" />, label: "Account", sub: "Manage your account" },
                                ].map((item, index) => (
                                    <ListItem button key={index} selected={item.label === "Home"} sx={{ backgroundColor: item.label === "Home" ? "#E3F2FD" : "transparent", "&:hover": { backgroundColor: "#BBDEFB" } }}>
                                        <ListItemIcon sx={{ minWidth: isSmallScreen ? 40 : 28 }}>{item.icon}</ListItemIcon>
                                        {!isSmallScreen && (
                                            <ListItemText
                                                primaryTypographyProps={{ fontSize: "0.875rem", fontFamily: "Arial, sans-serif", fontWeight: 500 }}
                                                secondaryTypographyProps={{ fontSize: "0.75rem", fontFamily: "Arial, sans-serif", color: "textSecondary" }}
                                                primary={item.label}
                                                secondary={item.sub}
                                            />
                                        )}
                                    </ListItem>
                                ))}
                            </List>

                            {!isSmallScreen && (
                                <>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography variant="body2" sx={{ fontSize: "0.75rem", fontFamily: "Arial, sans-serif", color: "gray", paddingX: 3 }}>
                                        MY BUSINESS
                                    </Typography>
                                    <div className="flex justify-center mt-4">
                                        <Button sx={{ width: "50%", backgroundColor: "#1E3A8A", color: "white", padding: "0.5rem 0", borderRadius: "0.75rem", fontSize: "0.75rem", fontFamily: "Arial, sans-serif", fontWeight: 500 }}>
                                            +Create
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </Paper>
                </Grid>


                {/* Main section */}
                <Grid item xs={11} md={9.5} container>

                    {/* Navbar */}
                    <Grid item xs={12}>
                        <AppBar position="static" sx={{ backgroundColor: "white", borderBottom: "1px solid #E5E7EB" }} elevation={0}>
                            <Toolbar className="flex justify-between text-black">
                                <select className="w-29 p-1 rounded-md">
                                    <option value="park-centre">Park Centre,<br /> Technopark Campus</option>
                                </select>

                                <div className="flex items-center space-x-4 w-70">
                                    <TextField size="small" placeholder="Search" variant="outlined" sx={{ width: 300, backgroundColor: "#E5E7EB", borderRadius: "10px", "& fieldset": { border: "none", borderRadius: "10px" }, }} />
                                    <IconButton>
                                        <Badge badgeContent={7} color="error">
                                            <Notifications />
                                        </Badge>
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Grid>

                    {/* Content Section */}
                    <Grid item xs={12} md={8.5} sx={{ height: "100vh", overflowY: "auto" }}>
                        <div className="flex-1 p-2 bg-white">
                            <div className="flex justify-start">
                                <Button sx={{ mx: 1, backgroundColor: "#E5E7EB", color: "black", padding: "0 0.75rem", borderRadius: "1rem", textTransform: "none" }}><TuneIcon /> Filter</Button>
                                <Button sx={{ mx: 1, backgroundColor: "#E5E7EB", color: "black", padding: "0 0.75rem", borderRadius: "1rem", textTransform: "none" }}>Category</Button>
                                <Button sx={{ mx: 1, backgroundColor: "#E5E7EB", color: "black", padding: "0 0.75rem", borderRadius: "1rem", textTransform: "none" }}>Category</Button>
                                <Button sx={{ mx: 1, backgroundColor: "#E5E7EB", color: "black", padding: "0 0.75rem", borderRadius: "1rem", textTransform: "none" }}>Category</Button>
                                <Button sx={{ mx: 1, backgroundColor: "#E5E7EB", color: "black", padding: "0 0.75rem", borderRadius: "1rem", textTransform: "none" }}>Category</Button>
                                <Button sx={{ mx: 1, backgroundColor: "#E5E7EB", color: "black", padding: "0 0.75rem", borderRadius: "1rem", textTransform: "none" }}>More..</Button>
                            </div>
                        </div>
                        <div className="overflow-y-auto px-2" style={{ maxHeight: "calc(100vh - 50px)" }}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                <Card key={index} className="w-full max-w-lg mx-auto my-2 shadow-md rounded-lg">
                                    <CardHeader
                                        avatar={<Avatar alt="User" src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/11/10190851/Louis-Vuitton-1.png" />}
                                        action={<IconButton><MoreVert /></IconButton>}
                                        title="Lifestyle Trivandrum, 1.2 KM away - Open now"
                                        subheader="Fashion Retail"
                                    />
                                    <CardMedia
                                        sx={{ height: 300, borderRadius: 2 }}
                                        component="img"
                                        image="https://aroka.in/cdn/shop/files/Aroka06-10-233944_fa19b681-8a87-4c40-8f8d-70e87d24b3ba.jpg?v=1724408298&width=1445"
                                        className="object-cover"
                                    />
                                    <CardContent>
                                        <Typography sx={{ fontWeight: "600" }} variant="body1">Grace Ruched Dress</Typography>
                                        <Typography color="textSecondary" sx={{ fontSize: "0.9rem", fontFamily: "Arial, sans-serif" }}>This full-length dress features a ruched classic design, a sweetheart neckline, and a draped silhouette, reminiscent of timeless elegance.</Typography>
                                        <Typography sx={{ fontWeight: "600", marginTop: "0.5rem" }} variant="body1">₹19,000</Typography>
                                        <div className="flex justify-between pt-2 items-center text-gray-500">
                                            <div>
                                                <IconButton><FavoriteBorder /></IconButton>
                                                <IconButton><ChatBubbleOutline /></IconButton>
                                            </div>
                                            <Button sx={{ width: "20%", backgroundColor: "#1E3A8A", color: "white", marginRight: "2rem", borderRadius: "0.75rem", fontSize: "0.75rem", fontFamily: "Arial, sans-serif", fontWeight: 500, }}>Add</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Grid>


                    {/* Right sidebar */}
                    {
                        !isSmallScreen && (
                            <Grid item xs={12} md={3.5}>
                        <Paper sx={{ p: 2, height: "100%", overflowY: "auto" }} elevation={0}>
                            <Typography variant="h6">Business you might like</Typography>
                            {
                                [1, 2, 3, 4, 5].map(item => (
                                    <div className="flex items-center">
                                        <Avatar sx={{ width: 40, height: 40 }} />
                                        <ListItem sx={{ display: "flex", alignItems: "center" }}>
                                            <ListItemText
                                                primaryTypographyProps={{ fontSize: "0.875rem" }}
                                                secondaryTypographyProps={{ fontSize: "0.75rem", color: "gray" }}
                                                primary="McDonald's"
                                                secondary="Trivandrum"
                                            />
                                            <ListItemIcon sx={{ minWidth: 30 }}>
                                                <Favorite fontSize="small" />
                                            </ListItemIcon>
                                        </ListItem>
                                    </div>
                                ))
                            }
                            <List sx={{ padding: 0 }}>
                                <ListItem sx={{ padding: 0, fontSize: "0.9rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}><Link href={'/'}>Privacy Policy</Link></ListItem>
                                <ListItem sx={{ padding: 0, fontSize: "0.9rem" }}><Link href={'/'}>Terms of service</Link></ListItem>
                            </List>
                        </Paper>
                    </Grid>
                        )
                    }
                </Grid>

            </Grid>


        </>
    );
}
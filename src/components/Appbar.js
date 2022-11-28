import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import CampaignIcon from "@mui/icons-material/Campaign";
import { Avatar, Button } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	alignItems: "flex-start",
	// justifyContent: "space-between",
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(2),
	backgroundImage: "linear-gradient(to bottom right, #00fdaf, #36cee7)",
	// Override media queries injected by theme.mixins.toolbar
	"@media all": {
		minHeight: 90,
	},
}));

export default function ProminentAppBar() {
	return (
		<section>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<StyledToolbar sx={{ display: "flex", flexDirection: "column" }}>
						{/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            MUI
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton> */}
						<div
							className='UpperAppBar'
							style={{ fontSize: "14px" }}
						>
							<div
								className='Inner-AppBar-Upper-container'
								style={{
									display: "block",
									width: "94vw",
									marginLeft: "auto",
									marginRight: "auto",
									paddingLeft: "16px",
									paddingRight: "16px",
								}}
							>
								<div
									className='Inner-AppBar-Upper-Flex'
									style={
										{
											// display: "flex",
											// flexDirection: "row",
											// flexWrap: "wrap",
											// alignItems: "center",
											// lineHeight: 1.3,
										}
									}
								>
									<div
										className='Inner-AppBar-'
										style={{
											color: "#ff9900",
											// padding: "12px",
											// fontSize: "14px",
											// width: "94vw",
											// marginLeft: "auto",
											// marginRight: "auto",
											// paddingLeft: "16px",
											// paddingRight: "16px",
											display: "flex",
											flexDirection: "row",
											flexWrap: "wrap",
											alignItems: "center",
											marginRight: 0,
											width: "100%",
											lineHeight: 1.3,
											fontWeight: 550,
										}}
									>
										<CampaignIcon
											sx={{
												fontSize: "medium",
												marginRight: "1rem !important",
											}}
										/>
										<p
											style={{
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap",
												fontFamily: "NoirPro, sans-serif",
											}}
										>
											A new version will be available. Stay Tuned!
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='LowerAppBar'>
							<div
								className='Inner-AppBar-Lower-container'
								style={{
									marginTop: "25px",
									marginBottom: "-5px",
									width: "94vw",
									marginLeft: "auto",
									marginRight: "auto",
									paddingLeft: "7px",
									paddingRight: "16px",
									// justifyContent: "space-between",
								}}
							>
								<div
									className='Inner-AppBar-Lower-Flex'
									style={{
										// display: "flex",
										// flexDirection: "row",
										// flexWrap: "wrap",
										// alignItems: "center",
										// justifyContent: "space-between",
									}}
								>
									<div
										style={{
											// display: "flex",
											// flexDirection: "row",
											// justifyContent: "space-between",
										}}
									>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between",
											}}
										>
										<div style={{
											alignItems: "center",
										}}>
											<IconButton
												sx={{
													width: "40px",
													height: "40px",
													// display: "flex",
													// flexDirection: "row",
													// justifyContent: "center",
													// flexWrap: "wrap",
													// alignItems: "center",
													cursor: "pointer",
												}}
											>
												<MenuIcon sx={{ color: "black" }} />
											</IconButton>
											<a
												style={{ 
													// padding: "auto",
						
													// float: "left",
													alignItems: "center", 
													}}
												href='https://www.kfintech.com/'
											>
												<img
													src='https://www.kfintech.com/new-assets/images/logo/kfintech-white-tagline.svg'
													alt='Kfin Logo'
													target='_blank'
													style={{ height: "30px", borderRadius: "2px" }}
												/>
											</a>
											</div>
										<div style={{float: "right" }}>
											<ul
												style={{
													listStyle: "none",
													margin: "0px",
													marginLeft: "auto !important",
													// paddingLeft: "68vw",

													display: "flex",
													flexDirection: "row",
													justifyContent: "center",
													flexWrap: "wrap",
													alignItems: "center",
												}}
											>
												<li style={{ marginRight: "20px" }}>
													<span>
														<IconButton>
															<SearchIcon />
														</IconButton>
													</span>
												</li>
												<li style={{ marginRight: "20px" }}>
													<Button
														sx={{
															size: "small",
															height: "24px",
															width: "24px",
															backgroundImage:
																"https://en.wikipedia.org/wiki/United_States",
														}}
													>
														{/* <img src="https://en.wikipedia.org/wiki/United_States" alt="United States"/> */}
													</Button>
												</li>
												<li style={{}}>
													<span>
														<IconButton>
															<Avatar
																alt='Remy Sharp'
																src='https://images.pexels.com/photos/14226004/pexels-photo-14226004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
															/>
														</IconButton>
													</span>
												</li>
											</ul>
										</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</StyledToolbar>
				</AppBar>
			</Box>
		</section>
	);
}

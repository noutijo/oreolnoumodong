import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

import github from "../../images/github.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import dribbble from "../../images/dribbble.svg";
import behance from "../../images/behance.svg";
import profile from "../../images/profile.PNG";

function Me() {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(3)',
                opacity: 0,
            },
        },
    }));


    return (
        <>
            <Box mt={15} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid style={{ display: "inherit" }} item xs={12} >
                        <Stack className="center-content circle100 bg-gradient" sx={{ width: 80, height: 80 }} direction="row" spacing={2}>
                            <Tooltip title="Available" placement="bottom-start">
                                <StyledBadge
                                    p={3}
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar sx={{ width: 70, height: 70 }} alt="Oreol Noumodong" src={profile} />
                                </StyledBadge>
                            </Tooltip>
                        </Stack>
                        <Grid ml={2} className="center-content-left">
                            <div>
                                <div className="fontWeight500 fontSize20">
                                    Oreol Noumodong
                                </div>
                                <div className="fontWeight200 fontSize14">
                                    MERN Stack & Ui/Ux Designer
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid mt={0} item xs={12}>

                        <p className="fontWeight300 fontSize16 text-justify">
                            Welcome, I’m Software engineer, Front-end developer (ReactJs, Vue.js), Java Developer, Ui/Ux designer with more than 3 years of experience. I received a training grant from <Link href="http://meta.com/" target="_blank"><span className="fontWeight600 white-color">@Meta</span></Link> for front-end web development training at <Link href="https://openclassrooms.com/" target="_blank"><span className="fontWeight600 white-color">@OpenClassrooms</span></Link>. Building <Link href="https://twitter.com/nooutidev" target="_blank"><span className="fontWeight600 green-color">@nooutidev</span></Link>.
                        </p>
                    </Grid>
                    <Grid mb={2} item xs={12}>
                    <span>
                        <Link href="https://github.com/noutijo" target="_blank"><img style={{ with: "23px", height: "17px" }} src={github} alt="github icon" /></Link>
                        <Link ml={1.5} href="https://twitter.com/JuniorOreol" target="_blank"><img style={{ with: "22px", height: "16px" }} src={twitter} alt="twitter icon" /></Link>
                        <Link ml={1.5} href="https://www.linkedin.com/in/oreolnoumodong" target="_blank"><img style={{ with: "27px", height: "21px" }} src={linkedin} alt="linkedin icon" /></Link>
                            <Link ml={1.5} href="https://www.behance.net/oreolnoumodong" target="_blank"><img style={{ with: "22px", height: "16px" }} src={behance} alt="gitlab icon" /></Link>
                            <Link ml={1.5} href="https://dribbble.com/oreolnoumodong" target="_blank"><img style={{ with: "25px", height: "19px" }} src={dribbble} alt="gitlab icon" /></Link>
                    </span>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Me;

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionIconItem from './SectionIconItem';
import blog from "../images/blog.svg";
import noblog from "../images/noblog.svg";

export default function FullBlog() {

    return (
        <>
            <Box mt={10} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={blog} text={"Blog"} />
                    </Grid>
                    <Grid my={5} item xs={12} className="center-content-left animate__animated animate__slideInUp">
                        <Grid container spacing={1}>
                            <Grid style={{ display: "block" }} item xs={12} className="center-content-left">
                                <Box className="center-content">
                                    <span className="fontWeight300 text-color fontSize16">
                                        Still in development...
                                    </span>
                                </Box>
                                <Box mt={3} className="center-content">
                                    <img style={{ with: "50px", height: "50px" }} src={noblog} alt="twitter icon" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}


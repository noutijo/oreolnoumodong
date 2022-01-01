import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Stack from '@mui/material/Stack';
import Tag from './Tag';

import eye from "../../images/eye.svg";

export default function WorkItem({ img, link, desc, title, tags }) {
    return (
        <>
            <Grid item xs={12} lg={6} sm={6} >
                <Card className="bg-color-card">
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt={title}
                    />
                    <CardContent>
                        <Box className="text-color fontWeight600 fontSize16" gutterBottom variant="h5" component="div">

                            <Stack direction="row" spacing={1}>
                                <Box className="fontWeight600 fontSize18">{title}</Box>
                                <Link href={link} target="_blank" sx={{ borderRadius: 100 }} py={0.1} px={1} className="center-content bg-green-color">
                                    <span className="text-color fontWeight300 fontSize16">Live view
                                    </span>
                                    <span className="center-content"> <img style={{ width: "18px", height: "18px",paddingLeft:"3px" }} src={eye} alt="Grapic design icon" /></span>
                                </Link>
                            </Stack>
                        </Box>
                        <Box mt={1.5} className="text-justify text-color fontWeight300 fontSize16" variant="body2">
                            {desc}
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Stack mb={1} direction="row" spacing={1}>
                            {
                                tags.map((tag, id) => <Tag key={id} tag={tag} />)
                            }
                        </Stack>
                    </CardActions>
                </Card>
            </Grid>

        </>
    );
}


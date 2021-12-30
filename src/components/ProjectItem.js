import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Tag from './Tag';

export default function ProjectItem({ img, link, desc, title, tags }) {
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
                                <Link href={link} target="_blank" sx={{ borderRadius: 100 }} pt={0.1} pb={0.1} px={1} className="bg-green-color">
                                    <span className="text-color fontWeight300 fontSize16">Live view <RemoveRedEyeIcon /></span>
                                </Link>
                            </Stack>
                        </Box>
                        <Box mt={1.5} className="text-color text-justify" variant="body2">
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


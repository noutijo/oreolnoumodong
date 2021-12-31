import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import ServiceHeadItem from './ServiceHeadItem';;

export default function ServicesItem({ icon, text, title }) {
    return (
        <>
            <Grid item xs={12}>
                <Card className="bg-color-card">
                    <CardContent>
                        <Box className="text-color" gutterBottom>
                            <ServiceHeadItem icon={icon} title={title} />
                        </Box>
                        <Box mt={1} className="text-justify text-color fontWeight300 fontSize16">
                            <p>{text}</p>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

        </>
    );
}


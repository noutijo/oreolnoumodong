import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import SkillHeadItem from './SkillHeadItem';;

export default function SkillItem({ icon, text, percent }) {
    return (
        <>
            <Grid item xs={12} lg={4} sm={6}>
                <Card className="bg-color-card">
                    <CardContent>
                        <Box color="white" gutterBottom>
                            <SkillHeadItem icon={icon} text={text} />
                        </Box>
                        <div className="bg-main-percent">
                            <div style={{ width: `${percent}` }} className="bg-second-percent center-content">
                                <span className="margin-content-percent"> {percent}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>

        </>
    );
}


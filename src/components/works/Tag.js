import * as React from 'react';
import Box from '@mui/material/Box';

export default function ProjectItem({ tag }) {
    return (
        <>

            <Box sx={{ borderRadius: 100 }} pt={0.1} pb={0.1} px={1.5} className="bg-main-color">
                <span className="text-color fontWeight300 fontSize14">{tag}</span>
            </Box>

        </>
    );
}



import Box from '@mui/material/Box';

export default function ServiceHeadItem({ icon, title }) {

    return (
        <>
            <Box style={{ display: "flex"}}>
                <span style={{ marginRight: "5px"}} className="center-content">
                    <img style={{ width: "18px", height: "18px" }} src={icon} alt={title} />
                </span>
                <span ml={1} className="fontWeight600 fontSize18">
                    {title}
                </span>
            </Box>
        </>
    );
}


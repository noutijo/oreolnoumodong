
import Box from '@mui/material/Box';

export default function SkillHeadItem({ icon, text }) {

    return (
        <>
            <Box style={{ display: "flex"}}>
                <span style={{ marginRight: "3px"}} className="center-content">
                    <img style={{ width: "14px", height: "14px" }} src={icon} alt={text} />
                </span>
                <span ml={1} className="fontWeight400 fontSize14">
                    {text}
                </span>
            </Box>
        </>
    );
}



import Box from '@mui/material/Box';

export default function MenuItem({ icon, text }) {

    return (
        <Box style={{ display: "inherit", marginRight: { text } === "Blog" ? "0px" : "12px" }}>
            <span style={{ width: "22px", height: "22px", marginRight: "3px", borderRadius: "5px" }} className="center-content bg-gradient">
                <img style={{ width: "13px", height: "13px" }} src={icon} alt="twitter icon" />
            </span>
            <span className="fontWeight400 fontSize18">
                {text}
            </span>
        </Box>
    );
}


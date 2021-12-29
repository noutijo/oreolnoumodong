
import Box from '@mui/material/Box';

export default function SectionIconItem({ icon, text }) {

    return (
        <>
            <Box style={{ display: "inherit", marginRight: { text } === "Blog" ? "0px" : "12px" }}>
                <span style={{ width:  "27px", height: "27px", marginRight: "3px", borderRadius: "5px" }} className="center-content bg-gradient">
                    <img style={{ width:"18px", height: "18px" }} src={icon} alt="twitter icon" />
                </span>
                <span className="fontWeight600 fontSize20">
                    {text}
                </span>
            </Box>
        </>
    );
}


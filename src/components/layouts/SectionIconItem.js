
import Box from '@mui/material/Box';

export default function SectionIconItem({ icon, text }) {

    return (
        <>
            <Box style={{ display: "inherit", marginRight: { text } === "Blog" ? "0px" : "12px" }}>
                <span style={{ width: "23px", height: "23px", marginRight: "3px", borderRadius: "5px" }} className="center-content bg-gradient">
                    <img style={{ width: "14px", height: "14px" }} src={icon} alt={text} />
                </span>
                <span className="fontWeight600 fontSize16">
                    {text}
                </span>
            </Box>
        </>
    );
}


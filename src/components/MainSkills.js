import Container from '@mui/material/Container';
import FullSkills from "./skills/FullSkills";
import LetsWorkTogether from "./layouts/LetsWorkTogether";
import Footer from "./layouts/Footer";

export default function MainSkills() {

    return (
        <>
            <Container maxWidth="sm">
                <FullSkills />
                <LetsWorkTogether />
                <Footer />
            </Container>
        </>
    );
}


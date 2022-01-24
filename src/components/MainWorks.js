import Container from '@mui/material/Container';
import FullProjects from "./works/FullWorks";
import LetsWorkTogether from "./layouts/LetsWorkTogether";
import Footer from "./layouts/Footer";

export default function MainWorks() {

    return (
        <>
            <Container maxWidth="sm">
                <FullProjects/>
                <LetsWorkTogether />
                <Footer />
            </Container>
        </>
    );
}


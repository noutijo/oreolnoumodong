import Container from '@mui/material/Container';
import FullProjects from "./FullProjects";
import LetsWorkTogether from "./LetsWorkTogether";
import Footer from "./Footer";

export default function MainProjects() {

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


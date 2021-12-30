import Container from '@mui/material/Container';
import FullBlog from "./FullBlog";
import LetsWorkTogether from "./LetsWorkTogether";
import Footer from "./Footer";

export default function MainBlog() {

    return (
        <>
            <Container maxWidth="sm">
                <FullBlog />
                <LetsWorkTogether />
                <Footer />
            </Container>
        </>
    );
}


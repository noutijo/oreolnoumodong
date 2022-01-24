import Container from '@mui/material/Container';
import FullBlog from "./blog/FullBlog";
import LetsWorkTogether from "./layouts/LetsWorkTogether";
import Footer from "./layouts/Footer";

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


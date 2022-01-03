import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/slices/blogThunk";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionIconItem from '../layouts/SectionIconItem';
import blog from "../../images/blog.svg";

import Blog from "./Blog";
import Loading from "./Loading";
import ConnexionError from "./ConnexionError";


export default function FullBlog() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost());
    }, []);

    const posts = useSelector((state) => state.post);
    const { loading, noconnexion, error } = posts;

    const hasNoConnexion = () => {
        if (noconnexion) {
            return (<><ConnexionError /></>);
        }
    };

    return (
        <>
            <Box mt={10} sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} className="center-content-left">
                        <SectionIconItem className="fontWeight600 fontSize18" icon={blog} text={"Blog"} />
                    </Grid>

                    {loading === true ? (<Loading />) : (<Blog />)}
                    {hasNoConnexion}
                    {error}
                </Grid>
            </Box>
        </>
    );
}


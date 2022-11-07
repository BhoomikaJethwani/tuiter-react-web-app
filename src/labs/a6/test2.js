import {useLocation} from "react-router-dom";
const X = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const q = paths[1];
    const w = paths[2];
    return(
        <span>{q + w}</span>
    )
}
export default X;
import {useLocation} from "react-router-dom";

const Y = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const e = paths[1];
    const r = paths[2];
    return(
        <span>{e - r}</span>
    )
}
export default Y;
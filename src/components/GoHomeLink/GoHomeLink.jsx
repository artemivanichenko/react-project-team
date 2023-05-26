import WestIcon from '@mui/icons-material/West';
import { HomeText } from './GoHomeLink.styled';
const GoHomeLink = () => {
    return (
        <HomeText>
            <WestIcon sx={{
                  width: 20,
                height: 12,
                marginBottom: -0.2,
                marginRight: 2
            }}> </WestIcon>
            Main page
           
        </HomeText>
    )
};

export default GoHomeLink;
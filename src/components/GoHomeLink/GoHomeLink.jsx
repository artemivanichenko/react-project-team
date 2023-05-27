import WestIcon from '@mui/icons-material/West';
import { HomeText,Transaction } from './GoHomeLink.styled';
const GoHomeLink = () => {
    return (
        <div>
        <HomeText>
            <WestIcon sx={{
                  width: 20,
                height: 12,
                marginBottom: -0.2,
                marginRight: 2
            }}> </WestIcon>
            Main page
        </HomeText>
       <Transaction><WestIcon sx={{
                  width: 20,
                height: 12,
                marginBottom: -0.2,
                marginRight: 2
            }}> </WestIcon>
            TO TRANSACTION</Transaction>
        </div>
    )
};

export default GoHomeLink;
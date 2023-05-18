import Header from "./Header";
import Body from "./Body";
import BodyHome from "./BodyHome";
import Room from "./Room";
import BestPlace from "./BestPlace";
import ClientSay from "./ClientSay";
import New from "./New";
import BotWraper from "./BotWraper";
import SearchTop from "./SearchTop";

export default function Home(){
    return(
        <>
            <SearchTop/>
            <Header/>
            <Body/>
            <BodyHome/>
            <Room/>
            <BestPlace/>
            <ClientSay/>
            <New/>
            <BotWraper/>
        </>
    )
}
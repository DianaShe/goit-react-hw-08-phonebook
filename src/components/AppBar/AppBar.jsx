import { Flex } from "@chakra-ui/react"
import AuthNav from "components/AuthNav/AuthNav"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "redux/selectors"


export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)

    return (
        <Flex align="center" justify="space-between" p={8} bg='black' mb={8}>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Flex>
        
    )
}
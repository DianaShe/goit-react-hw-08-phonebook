import { Box } from "@chakra-ui/react"
import { AppBar } from "components/AppBar/AppBar"
import { Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { fetchCurrentUser, setAuthHeader } from "redux/auth/operations"
import { getAuthToken, getUserMail } from "redux/selectors"

function SharedLayout() {
  const token = useSelector(getAuthToken)
  const userMail = useSelector(getUserMail)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token && !userMail) {
      setAuthHeader(token)
      dispatch(fetchCurrentUser(token))
    }
     
  }, [dispatch, token, userMail] )

  return (
    <Box pr={10} pl={10} >
        <AppBar/>
        <Suspense>
          <Outlet/>
        </Suspense>
    </Box>
  )
}

export default SharedLayout
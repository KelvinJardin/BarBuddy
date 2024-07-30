import { signOut } from "next-auth/react"
import Button from "@mui/material/Button";

export default function SignOut() {
    return <Button color="inherit" variant="outlined" onClick={() => signOut()}>Signout</Button>
}

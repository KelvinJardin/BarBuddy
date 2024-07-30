import { signIn } from "next-auth/react"
import Button from "@mui/material/Button";

export function GithubSignIn() {
    return <Button color="inherit" variant="outlined" onClick={() => signIn("github")}>Sign In</Button>
}

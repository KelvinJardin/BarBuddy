import { auth } from "@/app/auth";
import { GithubSignIn } from "@/components/Auth/SignIn";
import { redirect } from 'next/navigation'

export default async function(): React.Element {
    const session = await auth();

    if (session.user) {
        redirect("/");
    }

    return (
        <GithubSignIn/>
    );
}

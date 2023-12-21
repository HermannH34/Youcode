"use client";

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import * as React from "react"
import Link from 'next/link'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type DropdownMenuRadioGroupDemoProps = {
    userName: string;
    userImage: string;
};

function DropdownMenuRadioGroupDemo({ userName, userImage }: DropdownMenuRadioGroupDemoProps) {
    const [position, setPosition] = React.useState("bottom")

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        {userImage && (
                            <img src={userImage} alt="User" style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '8px' }} />
                        )}
                        {userName}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-16">
                    <DropdownMenuLabel className="w-full h-full flex justify-center items-center" asChild>
                        <Link href="/account">
                            Account
                        </Link>
                    </DropdownMenuLabel>
                    <AlertDialog>
                        <DropdownMenuSeparator></DropdownMenuSeparator>
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            {/* ALERT FOR SIGNOUT */}
                            <AlertDialogTrigger className="w-full">Logout</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently logout your account.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => signOut()}>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </DropdownMenuRadioGroup>
                    </AlertDialog>
                </DropdownMenuContent>
            </DropdownMenu >
        </>
    )
}

export const AuthButton = () => {
    const { data: session } = useSession();

    if (!session) {
        return (
            <Button variant="ghost" onClick={() => signIn()}>Login</Button>
        )
    }

    return (
        <DropdownMenuRadioGroupDemo
            userName={session.user.name || ''}
            userImage={session.user.image || ''}
        />
    );
}

"use client";

import React from 'react';
import { signIn, useSession, signOut } from "next-auth/react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const AccountPage = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <Card style={{ height: '265px' }}>
                <CardHeader>
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src={session.user.image} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>{session.user.email}</CardTitle>
                            <CardDescription>{session.user.name}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center">
                        <Button className="w-2/3 h-10" variant="secondary" asChild>
                            <Link href="/admin">Settings</Link>
                        </Button>
                    </div>
                    <div className="flex justify-center mt-2">
                        <Button className="w-2/3 h-10" variant="secondary" asChild>
                            <Link href="/admin">Admin</Link>
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button variant="outline" onClick={() => signOut()}>Logout</Button>
                </CardFooter>
            </Card>
        );
    }

    // Render this if there's no session
    return (
        <Card className="h-1/3">
            <CardHeader>You need to be logged in to view this page.</CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter>
                <Button variant="outline" onClick={() => signIn()}>Log In</Button>
            </CardFooter>
        </Card>
    );
};

export default AccountPage;

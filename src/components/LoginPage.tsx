"use client";

import React from 'react';
import { signIn } from "next-auth/react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export const AccountPage = () => {
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

"use client";

import React from 'react';
import { signIn, useSession } from "next-auth/react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";


export const AccountPage = ({ courses }) => {
    const { data: session } = useSession();

    console.log('ICI courses ', courses);

    if (session) {
        return (
            <Card>
                {courses.map((course) =>
                    course.userId === session.user.id ? (
                        <CardTitle key={course.id}>{course.name}</CardTitle>
                    ) : null
                )}
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

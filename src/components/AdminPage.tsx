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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"



export const AccountPage = ({ courses }) => {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                <h1 className='pl-8 text-3xl'>Courses</h1>
                <Card className="p-4 w-[1000px] h-[300px] m-4">
                    <Table>
                        <TableHeader >
                            <TableRow>
                                <TableHead className="w-50">Image</TableHead>
                                <TableHead className="w-30">Name</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {courses.filter(course => course.userId === session.user.id).map((course) => (
                                <TableRow key={course.id} >
                                    <TableCell className="font-medium">
                                        <Avatar>
                                            <AvatarImage src={course.image} />
                                        </Avatar>
                                    </TableCell>
                                    <TableCell>
                                        <CardTitle>{course.name}</CardTitle>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>
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

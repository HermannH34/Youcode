import React from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Card,
    CardTitle,
} from "@/components/ui/card";

type Course = {
    id: string;
    userId: string;
    name: string;
    image: string;
};

type AccountPageProps = {
    courses: Course[];
};

export const AccountPage = ({ courses }: AccountPageProps) => {
    return (
        <div>
            <h1 className='pl-8 text-3xl'>Mes Cours</h1>
            <div className="flex flex-wrap justify-center">
                <Card className="p-4 w-[1000px] m-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/2">Image</TableHead>
                                <TableHead className="w-1/2">Nom</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {courses.map(course => (
                                <TableRow key={course.id}>
                                    <TableCell className="font-medium">
                                        <Avatar>
                                            <AvatarImage src={course.image} alt={`Image de ${course.name}`} />
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
        </div>
    );
};

export default AccountPage;

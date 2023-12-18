import AdminPage from '@/components/AdminPage';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const Admin = async () => {
    const courses = await db.course.findMany();

    return <AdminPage courses={courses} />;

}

export default Admin
import { PrismaClient } from '@prisma/client';
import { getAuthSession } from '@/lib/auth';
import LoginPAge from '@/components/LoginPage';
import AdminPage from '@/components/AdminPage';

const db = new PrismaClient();

const Admin = async () => {
    const session = await getAuthSession()

    if (!session || !session.user) return <LoginPAge />;

    const courses = await db.course.findMany({
        where: {
            userId: session.user.id,
        },
    });

    return <AdminPage courses={courses} />;
}

export default Admin;

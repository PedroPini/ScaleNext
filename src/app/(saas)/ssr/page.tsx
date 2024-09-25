import AddTaskForm from './add-task-form';
import TaskRow from './task-row';
import Layout from '@/app/(saas)/shared/layout'
import { createClerkSupabaseClient } from '@/utils/supabase/server';
// 👉 Register the `Clerk` object  the global window fix TypeScript errors
declare global {
    interface Window {
        Clerk: any;
    }
}

export default async function Home() {

    const client = await createClerkSupabaseClient();
    // 👉 Query the 'tasks' table to render the page
    const { data, error } = await client.from('tasks').select()
    if (error) {
        throw error
    }
    const tasks = data

    return (
        <Layout>
            <div className='flex flex-col'>
                <AddTaskForm />
                <div className='flex flex-col gap-2 p-2'>
                    {tasks?.map((task: any) =>
                        <TaskRow key={task.id} id={task.id} name={task.name} is_done={task.is_done} />
                    )}
                </div>
            </div>
        </Layout>
    );
}
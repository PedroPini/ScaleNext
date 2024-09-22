'use client'
import { useEffect, useState } from 'react'
import { useSession, useUser } from '@clerk/nextjs'
import Layout from '@/app/(saas)/shared/layout'
import { useClerkSupabaseClient } from '@/utils/supabase/client'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert } from "@/components/ui/alert"
export default function Home() {
  const [tasks, setTasks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { user } = useUser()
  const { session } = useSession()


  const client = useClerkSupabaseClient();

  useEffect(() => {
    async function loadTasks() {
      setLoading(true)
      const { data, error } = await client.from('tasks').select()
      if (!error) setTasks(data)
      setLoading(false)
    }

    loadTasks()
  }, [client])

  async function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const isActiveSubscriber = user?.publicMetadata?.stripe?.status === 'complete'

    if (!isActiveSubscriber && tasks.length >= 3) {
      setErrorMessage('Free users can only create 3 tasks. Please upgrade your subscription.')
      return
    }

    const { error } = await client.from('tasks').insert({
      name,
    })

    if (!error) {
      window.location.reload()
    }
  }

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold">Tasks</h1>

        {loading && <p>Loading...</p>}

        {!loading && tasks.length > 0 && tasks.map((task: any) => <p key={task.name}>{task.name}</p>)}

        {!loading && tasks.length === 0 && <p>No tasks found</p>}

        {errorMessage && (
          <Alert variant="destructive">
            {errorMessage}
          </Alert>
        )}

        <form onSubmit={createTask} className="mt-4">
          <Input
            autoFocus
            type="text"
            name="name"
            placeholder="Enter new task"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="mb-2"
          />
          <Button type="submit">Add</Button>
        </form>
      </div>
    </Layout>
  )
}

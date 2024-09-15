'use client'
import { useEffect, useState, useMemo } from 'react'
import { useSession, useUser } from '@clerk/nextjs'
import { createClient } from '@supabase/supabase-js'
import Layout from '@/app/shared/layout'
import { useRouter } from 'next/navigation' // Use this for client-side routing in Next.js
import { toast } from 'react-hot-toast'
import { useClerkSupabaseClient } from '@/utils/supabase/client'
export default function Home() {
  const [tasks, setTasks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { user } = useUser()
  const { session } = useSession()
  const router = useRouter()

  const client = useClerkSupabaseClient();

  useEffect(() => {
    if (!user) {
      //toast.error('User not logged in')
      router.push('/') // Redirect to the home page
      return
    }

    async function loadTasks() {
      setLoading(true)
      const { data, error } = await client.from('tasks').select()
      if (!error) setTasks(data)
      setLoading(false)
    }

    loadTasks()
  }, [user, client, router]) // Make sure to include router in the dependency array

  async function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const isActiveSubscriber = user?.publicMetadata?.subscription?.status === 'active'

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
        <h1>Tasks</h1>

        {loading && <p>Loading...</p>}

        {!loading && tasks.length > 0 && tasks.map((task: any) => <p key={task.name}>{task.name}</p>)}

        {!loading && tasks.length === 0 && <p>No tasks found</p>}

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <form onSubmit={createTask}>
          <input
            autoFocus
            type="text"
            name="name"
            placeholder="Enter new task"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </Layout>
  )
}

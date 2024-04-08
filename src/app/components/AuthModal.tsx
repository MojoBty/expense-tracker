"use client"

import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import NotionIcon from '../../../public/notion.png'
import Image from 'next/image';


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';

import { supabase } from "../../lib/helper/supabaseClient"


// schema for accounts

const formSchema = z.object({
  emailAdress: z.string().email(),
  password: z.string().min(3)
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAdress: ""
      
    }
  })

  const handleSumbit = () => {

  }

  // supabase login connection to providers

  const githubLogin = async() => {
    await supabase.auth.signInWithOAuth({
      provider: "github"
    })
  }

  const notionLogin = async() => {
    await supabase.auth.signInWithOAuth({
      provider: "notion"
    })
  }

  const facebookLogin = async() => {
    await supabase.auth.signInWithOAuth({
      provider: "github"
    })
  }

  return (
    <div className='flex flex-col justify-center bg-[#ffffff] sm:h-[36rem] sm:w-[40rem] h-[36rem] w-[22rem] rounded-3xl p-8'>
      <div className="flex justify-between">
        <h1 className='text-3xl'>Login with</h1>
        <Link href='/'>
          <CloseIcon className='h-6 cursor-pointer'/>
        </Link>
      </div>
      <div className="flex justify-between sm:px-48 py-8 px-12" >
        <GitHubIcon onClick={githubLogin} className='cursor-pointer' style={{ fontSize: 60 }}/>
        <FacebookIcon onClick={facebookLogin} className='cursor-pointer' style={{ fontSize: 60 }}/>
      </div>
      <div className='flex justify-center p-2'>
        <h2>or use your own account</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSumbit)} >
          <FormField control={form.control} name="emailAdress" render={({field}) => {
            return <FormItem>
              <FormLabel>Email adress</FormLabel>
              <FormControl>
                <Input placeholder='Email adress' type='email' {...field} />
              </FormControl>
              <FormMessage className='text-red-600'/>
            </FormItem>
          }}/>
          <FormField control={form.control} name="password" render={({field}) => {
            return <FormItem className='py-4'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='Password' type='password' {...field} />
              </FormControl>
              <FormMessage className='text-red-600'/>
            </FormItem>
          }}/>
          <Button type="submit" className='w-full my-6'>
            Login
          </Button>
        </form>
      </Form>
      <div className='flex justify-center'>
        Don&apos;t have an account? <Link className='pl-2 hover:underline' href='/signup'>Create one here</Link>
      </div>  
    </div>
  )
}





/*
const AuthModal = () => {
  return (
    <div className="bg-white sm:h-[30rem] sm:w-[40rem] h-[30rem] w-[22rem] rounded-lg" >
      <div className='px-6 py-4'>
        <div className="flex justify-between">
          <h1 className='text-3xl'>Login with</h1>
          <CloseIcon className='h-6'/>
        </div>
        <div className="flex justify-between sm:px-20 py-8" >
          <GoogleIcon style={{ fontSize: 60 }}/>
          <GitHubIcon style={{ fontSize: 60 }}/>
          <FacebookIcon style={{ fontSize: 60 }}/>
        </div>
        <div className='flex flex-col justify-center text-[16px] py-6'>
          <div className='flex justify-center'>
            <h2>or use your account</h2>
          </div>
          <div className='flex justify-center'>
            <input className='bg-[#ececec] border-none' />
          </div>
        </div>
      </div>
    </div>
  )
}
*/

export default ProfileForm
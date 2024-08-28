'use client'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   import Link from 'next/link'
   import Image from 'next/image'
  export default function SimpleRegistrationForm() {
    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2">
            <Image src={"/assets/manwithphone.PNG"} alt="Description" 
            width={300}
            height={300}
            className="w-full h-full object-cover" />     
           </div>
            <div className="w-full md:w-1/2 p-8">
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
       
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
           
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Button className="mt-6" fullWidth>
            sign In
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
      </div>
      </div>
    );
  }
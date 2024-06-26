import User from "@/models/user";
import bcryptjs from 'bcryptjs';
import Connection from "@/database/config";
import { NextRequest, NextResponse } from 'next/server';

Connection();

export async function POST(NextRequest){
    try {
       const body = await NextRequest.json();
       const {name, username, password} = body;
       
       if(!name || !username || !password){
        return new Response("All the fields are required", {status: 401});
       }

       const user = await User.findOne({username});

       if(user){
        return new Response("Username already exist", {status: 400});
       }
       
       const salt = await bcryptjs.genSalt(12);
       const hashedPassword = await bcryptjs.hash(password, salt);

       const newUser = new User({
        name,
        username,
        password: hashedPassword
       })

       await newUser.save();
       return new Response("User saved sucessfully", {status:200});
    }
    catch(error){
     console.log(error.message);
     return new Response("something went wrong" ,{status: 500});
    }

}
import User from "@/models/user";
import bcryptjs from 'bcryptjs';
import Connection from "@/database/config";
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

Connection();

export async function POST(NextRequest){
    try {
       const body = await NextRequest.json();
       const {username, password} = body;
       
       if(!username || !password){
        return new Response("All the fields are required", {status: 401});
       }

       const user = await User.findOne({username});
       

       if(!user){
        return new Response("User does not exist", {status: 400});
       }
      
       const validPassword = await bcryptjs.compare(password, user.password);

       if(!validPassword){
        return new Response("Incorrect password", {status: 400});
       }

       const tokenData = {
        username: user.username,
        id: user._id
       }
       
       const token = jwt.sign(tokenData, process.env.JWT_SECRETKEY, { expiresIn: '1h'});

       const responseData = {
        user,
        message: "Login successful"
    };

       const response = NextResponse.json(responseData);
       
       response.cookies.set('token', token, {httpOnly: true});
       return response;
    }
    catch(error){
     console.log(error.message);
     return new Response("something went wrong" ,{status: 500});
    }

}


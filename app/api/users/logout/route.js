import User from "@/models/user";
import bcryptjs from 'bcryptjs';
import Connection from "@/database/config";
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

Connection();

export async function GET(NextRequest){
    try {
       const response = NextResponse.json({message: 'Logout sucessful', success:true});
       
       response.cookies.set('token', "", {httpOnly: true, expires: new Date(0)});
       return response;
    }
    catch(error){
     console.log(error.message);
     return new Response("something went wrong" ,{status: 500});
    }

}


import { NextResponse } from "next/server";

export async function POST(request) {
  return  NextResponse.json({success:true,data:"I am good boy"})
}
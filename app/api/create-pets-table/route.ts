import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
    try {
        const result =
            await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
        return NextResponse.json({result}, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({error}, {status: 500});
    }
}
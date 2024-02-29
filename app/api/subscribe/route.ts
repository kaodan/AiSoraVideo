import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const email = url.searchParams.get('email') || "";
        const lng = url.searchParams.get('lng');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            // 如果电子邮件不符合格式，返回错误信息
            return NextResponse.json({"error": "Invalid email format"}, {status: 400});
        }

        if (!lng) {
            // 如果lng为空，返回错误信息
            return NextResponse.json({"error": "lng is required"}, {status: 400});
        }

        const res = await sql`INSERT INTO subscribe_email (email,lng)  VALUES (${email}, ${lng});`;

        return NextResponse.json({result: res}, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({error}, {status: 500});
    }
}

/*export async function GET(request) {
    try {
        const url = new URL(request.url);
        const email = url.searchParams.get('email');
        const lng = url.searchParams.get('lng');

        // 简单的电子邮件格式验证
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            // 如果电子邮件不符合格式，返回错误信息
            return NextResponse.json({"error": "Invalid email format"}, {status: 400});
        }

        await sql`INSERT INTO subscribe_email (email, lng) VALUES (${email}, ${lng});`;

        return NextResponse.json({"status": "success"}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({"error": error.message}, {status: 500});
    }
}*/

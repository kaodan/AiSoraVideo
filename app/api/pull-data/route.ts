import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
    try {

        // await sql`INSERT INTO sora_video (title, url, prompt, img_url)  VALUES ('video${i}_title', '${d.link}', '${d.prompt}', 'https://sora-video.oss-cn-beijing.aliyuncs.com/image/card-${i}.png');`;

        return NextResponse.json({"s": "success"}, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({error}, {status: 500});
    }
}
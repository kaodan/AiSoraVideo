import {title} from "@/components/primitives";
import {Divider} from "@nextui-org/divider";
import {sql} from "@vercel/postgres";
import {Metadata} from "next";


// 首先，提取数据库查询逻辑到一个共享函数中
async function fetchSoraVideoDetail(detailId: string, lng: string) {
    let rows: any[] = [];
    if (lng == "en") {
        ({rows} = await sql`SELECT * FROM en_sora_video  WHERE Id = ${detailId}`);
    } else if (lng == "cn" || lng == "zh-CN") {
        ({rows} = await sql`SELECT * FROM cn_sora_video  WHERE Id = ${detailId}`);
    } else if (lng == "ja") {
        ({rows} = await sql`SELECT * FROM ja_sora_video  WHERE Id = ${detailId}`);
    } else if (lng == "it") {
        ({rows} = await sql`SELECT * FROM it_sora_video  WHERE Id = ${detailId}`);
    } else if (lng == "ru") {
        ({rows} = await sql`SELECT * FROM ru_sora_video  WHERE Id = ${detailId}`);
    } else if (lng == "kr") {
        ({rows} = await sql`SELECT * FROM kr_sora_video  WHERE Id = ${detailId}`);
    }
    return rows[0];
}


export async function generateMetadata({params: {detailId, lng}}: {
    params: { detailId: string, lng: string };
}): Promise<Metadata> {

    const soraV = await fetchSoraVideoDetail(detailId, lng)
    return {
        alternates: {
            canonical: `https://www.aisora.org/${lng}/detail/${detailId}`,
        }, description: soraV.prompt
    };
}


export default async function DetailPage({params: {detailId, lng}}: {
    params: { detailId: string, lng: string };
}) {

    const soraV = await fetchSoraVideoDetail(detailId, lng)// 获取第一行数据

    return (
        <div>
            <h1 className={title()}>AI Sora Video <br/>{soraV.title}</h1>
            <Divider className="my-4"/>
            <video width={"100%"}
                   src={soraV.url}
                   controls autoPlay={false} preload="none">
                <source src={soraV.url} type="video/mp4"/>
            </video>

            <br/>
            <span>Prompt:{soraV.prompt}</span>
        </div>
    );
}

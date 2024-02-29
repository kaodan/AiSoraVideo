import {Link} from "@nextui-org/link";
import {subtitle, title} from "@/components/primitives";
import {Card, CardHeader} from "@nextui-org/card";
import {Image} from "@nextui-org/image"
import {Input} from "@nextui-org/input";
import "@/styles/globals.css";
import {Navbar} from "@/components/navbar";
import {sql} from "@vercel/postgres";
import {loadI18n} from '../lib/i18n/index';
import SubscribeEmail from "@/components/subscribe";
// import Subscribe from "@/components/subscribe";


export default async function Home({params: {lng}}: { params: { lng: string } }) {

    let rows: any[] = [];
    if (lng == "en") {
        ({rows} = await sql`SELECT * FROM en_sora_video ORDER BY id DESC`);
    } else if (lng == "cn" || lng == "zh-CN") {
        ({rows} = await sql`SELECT * FROM cn_sora_video ORDER BY id DESC`);
    } else if (lng == "ja") {
        ({rows} = await sql`SELECT * FROM ja_sora_video ORDER BY id DESC`);
    } else if (lng == "it") {
        ({rows} = await sql`SELECT * FROM it_sora_video ORDER BY id DESC`);
    } else if (lng == "ru") {
        ({rows} = await sql`SELECT * FROM ru_sora_video ORDER BY id DESC`);
    } else if (lng == "kr") {
        ({rows} = await sql`SELECT * FROM kr_sora_video ORDER BY id DESC`);
    }

// 此时，rows要么是根据条件查询得到的结果，要么是默认的空数组


    // const {t} = useTranslation('common');

    const {t} = await loadI18n(lng, 'common')

    return (
        <div>
            {/*<span>{lng}</span>*/}
            {/*<Navbar params={lng:""}/>*/}
            <Navbar/>

            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">


                <div className="inline-block max-w-lg text-center justify-center">


                    <h1 className={title()}>AI&nbsp;</h1>
                    <h1 className={title({color: "violet"})}>Sora Video&nbsp;</h1>
                    <br/>
                    <br/>
                    <h1 className={title()}>
                        {t("title")}
                    </h1>
                    <h2 className={subtitle({class: "mt-4"})}>
                        {t("sub_title")}
                    </h2>
                    {/*<h3 style={{fontSize:"30px",color:"#006FEE"}}>110+</h3><h3>Video</h3>*/}

                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h3 style={{fontSize: "30px", color: "#b249f8", margin: "0 10px 0 0"}}>{rows.length}+</h3>
                        <h3 style={{margin: 0, fontSize: "23px"}}>Video</h3>
                    </div>

                    <br/>

                    <SubscribeEmail subscribeText={t("subscribe")} lng={lng} inputText={t("inputPlace")}/>

                    {/*<br/>*/}
                    {/*<h4>向我们订阅</h4>*/}
                </div>
                <div className="flex gap-3">
                    {/*  <Link
                    isExternal
                    href={siteConfig.links.docs}
                    className={buttonStyles({color: "primary", radius: "full", variant: "shadow"})}
                >
                    Get All
                </Link>*/}

                </div>


                {/*<Divider/>*/}
                <br/>
                <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">

                    {rows.map((row, i) => (


                        <Card key={row.id} isPressable className="col-span-12 sm:col-span-4 h-[300px]">


                            {/*<h1>{row.title}</h1>*/}


                            <a className="z-0 w-full h-full object-cover" href={`detail/${row.id}`}>
                                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                    <h4 className="text-white font-medium text-large">{row.title}</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover"
                                    src={row.img_url}
                                />
                            </a>
                        </Card>))}


                </div>


            </section>

            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://aisora.org"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">AiSora.org
                    </p>
                </Link>
            </footer>

        </div>
    );
}


{/*

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/61"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">Cinematic trailer for a group of
                                    adventurous puppies exploring ruins in the sky</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-61.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/60"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">cinematic trailer for a group of
                                    samoyed puppies learning to become chefs</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-60.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/59"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">A giant duck walks through the streets
                                    of Boston.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-59.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/58"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">Man bows to cat king in cathedral
                                    overrun by cats.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-58.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/57"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">Sora simultaneously generates multiple
                                    videos, offering five unique perspectives.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-57.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/56"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">Golden Retriever and Samoyed explore
                                    New York, ending at Broadway.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-56.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/55"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">A figure made of water walks through
                                    an art gallery filled with many beautiful works of various styles.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-55.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/54"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">A video of people relaxing on the
                                    beach, where midway through, a shark leaps out of the water, startling
                                    everyone.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-54.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/53"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">A white and orange tabby alley cat is
                                    darting through the backstreet alleys in heavy rain, searching for a place to take
                                    shelter.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-53.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/52"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">A macro shot of a leaf featuring a
                                    tiny train running along the leaf veins.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-52.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/51"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <h4 className="text-white font-medium text-large">Footage from the perspective of an ant
                                    moving inside an anthill.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-51.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/50"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">A close-up shot of a futuristic
                                    cybernetic shepherd with striking brown and black fur.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-50.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/49"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Nighttime footage of a hermit crab
                                    using an incandescent light bulb as a shell</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-49.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/1"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">A fashionable woman confidently walks
                                    down
                                    a
                                    Tokyo street illuminated by neon lights</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-1.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">


                        <a className="z-0 w-full h-full object-cover" href={"detail/2"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
                                <h4 className="text-white font-medium text-large">Giant wooly mammoths slowly traverse
                                    through the snow.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-2.png"
                            />
                        </a>


                    </Card>
                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">


                        <a className="z-0 w-full h-full object-cover" href={"detail/3"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
                                <h4 className="text-white font-medium text-large">Space adventurer, red helmet, salt
                                    desert,35mm film style.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-3.png"
                            />
                        </a>


                    </Card>
                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">


                        <a className="z-0 w-full h-full object-cover" href={"detail/4"}>
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                                <h4 className="text-white font-medium text-2xl">Big Sur coast, rugged cliffs, lighthouse
                                    island under sunset.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-4.png"
                            />
                        </a>

                    </Card>
                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
                        <a className="z-0 w-full h-full object-cover" href={"detail/5"}>
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                                <h4 className="text-white/90 font-medium text-xl">Curious monster watches melting
                                    candle,
                                    warm tones, 3D realistic style.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-5.png"
                            />

                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/6"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Colorful papercraft coral reef with
                                    sea
                                    life.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-6.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">


                        <a className="z-0 w-full h-full object-cover" href={"detail/7"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
                                <h4 className="text-white font-medium text-large">Victoria pigeon: blue, red chest,
                                    regal
                                    crest.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-7.png"
                            />
                        </a>


                    </Card>
                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">


                        <a className="z-0 w-full h-full object-cover" href={"detail/8"}>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
                                <h4 className="text-white font-medium text-large">Pirate ships battle in coffee cup,
                                    photorealistic.</h4>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-8.png"
                            />
                        </a>


                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/9"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Young man reads on cloud in sky.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-9.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/10"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Historical footage of California
                                    during the gold rush.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-10.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/11"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Mini zen garden with dwarf inside
                                    glass
                                    sphere.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-11.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/12"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Woman blinking in Marrakech, 70mm film
                                    shot.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-12.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/13"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">A cartoon kangaroo disco dances.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-13.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/14"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">2056 Lagos, Nigeria people in homemade
                                    mobile video.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-14.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/15"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Petri dish with bamboo forest and tiny
                                    red pandas running.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-15.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/16"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">New York museum with vintage TVs
                                    showing diverse programs.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-16.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/17"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Blue fluffy rabbit-squirrel explores
                                    magical forest.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-17.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/18"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Vintage SUV races on mountain road,
                                    dust
                                    under sunlight.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-18.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/19"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Reflections in the window of a train
                                    traveling through the Tokyo suburbs.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-19.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/20"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Drone circles historic church on
                                    Amalfi
                                    Coast, stunning views.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-20.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/21"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Orange octopus rests, crab approaches,
                                    undersea wide-angle shot.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-21.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/22"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Paper airplanes flutter through jungle
                                    like migrating birds.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-22.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/23"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Cat wakes owner for breakfast, finally
                                    gets treats.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-23.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/24"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Borneo wildlife on the Kinabatangan
                                    River</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-24.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/25"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">A Chinese Lunar New Year celebration
                                    video
                                    with Chinese Dragon.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-25.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/26"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Tour of an art gallery with many
                                    beautiful works of art in different styles.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-26.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/27"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Snowy Tokyo, people enjoy shopping
                                    amidst snow and sakura petals.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-27.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/28"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">A stop motion animation of a flower
                                    growing out of the windowsill of a suburban house.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-28.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/29"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">The story of a robot’s life in a
                                    cyberpunk setting.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-29.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/30"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Thoughtful grey-haired man in Paris
                                    cafe, cinematic 35mm film.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-30.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/31"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Animation of lonely wolf howling at
                                    moon, finds pack.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-31.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/32"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">New York submerged like Atlantis,
                                    marine life roams.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-32.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/33"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large"> A litter of golden retriever puppies
                                    playing in the snow. Their heads pop out of the snow, covered in.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-33.png"
                            />
                        </a>
                    </Card>


                    插入


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/34"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Step-printing scene of a person
                                    running,
                                    cinematic film shot in 35mm.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-34.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/35"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Five gray wolf pups playfully chase on
                                    a
                                    remote road.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-35.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/36"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Basketball through hoop then
                                    explodes.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-36.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/37"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Archaeologists find and excavate
                                    plastic
                                    chair in desert.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-37.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/38"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Joyful grandmother blows out birthday
                                    cake
                                    candles, family celebrates.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-38.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/39"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Burano, Italy, colorful buildings,
                                    dalmatian in window, people and bikes.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-39.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/40"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Otter in yellow lifejacket surfing
                                    tropical waters, 3D art.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-40.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/41"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Close-up of chameleon color change,
                                    blurred background.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-41.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/42"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">A corgi vlogging itself in tropical
                                    Maui.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-42.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/43"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Joyful tabby cat darts in garden,
                                    cinematic shot with warm tones.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-43.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/44"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Santorini at blue hour, white
                                    buildings,
                                    blue domes, picturesque view.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-44.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/45"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Tiltshift of a construction site
                                    filled
                                    with workers, equipment, and heavy machinery.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-45.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/46"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Giant cloud man shoots lightning to
                                    earth.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-46.png"
                            />
                        </a>
                    </Card>


                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/47"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Samoyed and Golden Retriever play in
                                    neon-lit futuristic city.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-47.png"
                            />
                        </a>
                    </Card>

                    <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">

                        <a className="z-0 w-full h-full object-cover" href={"detail/48"}>

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                                <h4 className="text-white font-medium text-large">Glenfinnan Viaduct in Scotland, steam
                                    train crossing scenic landscape.</h4>
                            </CardHeader>

                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="/images/card-48.png"
                            />
                        </a>
                    </Card>
*/
}

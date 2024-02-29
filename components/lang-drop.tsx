import {usePathname, useRouter} from "next/navigation";
import {Select, SelectItem} from "@nextui-org/select";
import {useState} from "react";

function getLanguageFromPath(path: string) {
    const parts = path.split('/'); // 将路径分割成数组
    // 检查数组长度并确保包含语言代码部分
    if (parts.length > 1) {
        let a = `/${parts[1]}`;
        if (a == "/detail") {
            a = "/"
        }
        if (a == "/zh-CN") {
            return "/cn"
        }
        return a; // 返回语言代码部分
    }
    return null; // 如果不包含语言代码，返回null
}

export const LangDrop = () => {
    const router = useRouter();
    const animals = [
        {label: 'English', value: '/en'},
        {label: '中文', value: '/cn'},
        {label: 'Русский', value: '/ru'},
        {label: 'italiano', value: '/it'},
        {label: '日本語', value: '/ja'},
        {label: '한국어', value: '/kr'},
        // {label: '한국어', value: '/ko'}
    ];
    const pathname = usePathname();
    // Ensure genderValue is never null by providing a fallback value
    const [genderValue, setGenderValue] = useState<string[]>([getLanguageFromPath(pathname) || '/']);

    const changeLanguage = (value: any) => {

        if (value.currentKey == undefined) {
            return;
        }
        console.log(value.currentKey)
        router.push(value.currentKey);
        // router.push("cn");
    };

    return (<div>
        <Select aria-label="select"
                style={{width: "105px", marginTop: "5px"}}
                placeholder="Language"
                labelPlacement="outside"
                className="max-w-xs"
                defaultSelectedKeys={genderValue}
                onSelectionChange={(value) => {
                    changeLanguage(value)
                }}
        >
            {animals.map((animal) => (


                <SelectItem aria-label="select item" key={animal.value} value={animal.value}>
                    {animal.label}
                </SelectItem>
            ))}
        </Select>
    </div>);
}

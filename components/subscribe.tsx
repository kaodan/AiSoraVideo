"use client"
import {useState} from 'react';
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {message} from 'antd';
import {TFunction} from "i18next";

interface PageSubscribeProps {
    subscribeText: string;
    lng: string;
    inputText: string
}

function isEmail(email: string) {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
}

const PageSubscribe: React.FC<PageSubscribeProps> = ({subscribeText, lng, inputText}) => {
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleClick = async () => {
        if (!isEmail(email)) {
            setEmail("")
            message.info('Wrong email');
            return;
        }
        message.info('loading');
        if (!isLoading) {
            setLoading(true);
            const response = await fetch(`/api/subscribe?email=${email}&lng=${lng}`);
            const data = await response.json();
            if (data) {
                if (data["result"]["viaNeonFetch"] == true) {
                    message.success('success');
                    setEmail("")
                    setLoading(false);
                }
            }
        } else {
            message.info('loading');
        }
    };
    const handleInputChange = (e: any) => {
        setEmail(e.target.value);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: "28px",
            marginRight: "28px"
        }}>
            <Input size={"sm"}
                   type="email"
                   variant="bordered"
                   color="secondary"
                   value={email}
                   onChange={handleInputChange}
                   placeholder={inputText}
            />
            <Button onClick={handleClick} style={{marginLeft: "10px"}} size="lg" color="secondary" variant="shadow">
                {subscribeText}
            </Button>
        </div>
    );
}

export default PageSubscribe;
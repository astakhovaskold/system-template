import {Space} from 'antd';
import {memo} from 'react';

import WideContainer from '@/app/components/Layout/WideContainer';
import List from '@/app/components/Modules/List';
import Title from '@/app/components/Utils/Title';
import {APP_NAME} from '@/libs/text';
import useAccount from '@/store/account/account';

const Welcome = memo((): JSX.Element | null => {
    const account = useAccount(state => state.account);

    if (!account) return null;

    const {first_name} = account.user;

    return (
        <>
            <Title value="Welcome" />

            <WideContainer>
                <div className="w-[848px] mx-auto flex flex-col gap-y-10 text-black font-semibold">
                    <Space direction="vertical" size={8}>
                        <h1 className="text-3xl">
                            Hi,&nbsp;
                            {first_name}
                        </h1>

                        <p className="text-xl">welcome to&nbsp;{APP_NAME}!</p>
                    </Space>

                    <List />
                </div>
            </WideContainer>
        </>
    );
});

export default Welcome;

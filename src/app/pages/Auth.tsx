import {CloseCircleFilled} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Select, Typography} from 'antd';
import {memo, useCallback, useState} from 'react';

import SignInBg from '@/assets/icons/signin-bg.svg?react';
import {MOCK_EMAIL, MOCK_PASSWORD, mockAccount} from '@/libs/mockData';
import useAccount from '@/store/account/account';
import {LoginData} from '@/store/account/types';

const {Item} = Form;

const {Title} = Typography;

const {Password} = Input;

const ENVIRONMENT_OPTIONS = [
    {
        label: 'PROD',
        value: 'PROD',
    },
    {
        label: 'DEV',
        value: 'DEV',
    },
];

const Auth = memo((): JSX.Element | null => {
    const auth = useAccount(state => state.auth);

    const [authError, setAuthError] = useState(false);

    const [form] = Form.useForm();

    const onFinish = useCallback(
        ({email, password}: LoginData) => {
            if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
                setAuthError(false);
                auth(mockAccount);
            } else {
                setAuthError(true);
            }
        },
        [auth],
    );

    return (
        <section className="min-h-[100vh] grid grid-cols-12 gap-10">
            <div className="col-span-6 bg-[#F3F7FF] flex flex-col">
                <div className="bg-[#E5EEFF] min-h-[20%] flex flex-col justify-center items-center py-10 px-28">
                    <h1 className="text-blue text-4xl text-center font-bold">RMS</h1>
                    <p className="text-blue text-2xl text-center font-light">
                        A platform to view your metrics, upload and approve your POs
                    </p>
                </div>
                <div className="flex items-end justify-center flex-1 p-3">
                    <SignInBg className="aspect-square max-w-xl" />
                </div>
            </div>

            <div className="col-span-6">
                <Form
                    form={form}
                    className="pt-60 w-[400px] mx-auto"
                    layout="vertical"
                    onFinish={onFinish}
                    onValuesChange={() => setAuthError(false)}
                >
                    <Title level={1}>Sign In</Title>

                    <Item
                        label="Email Address"
                        name="email"
                        rules={[{type: 'email', message: ''}]}
                        help={null}
                        hasFeedback={!authError}
                    >
                        <Input
                            placeholder="Email Address"
                            type="email"
                            suffix={authError ? <CloseCircleFilled className="text-error" /> : null}
                        />
                    </Item>

                    <Item label="Password" name="password">
                        <Password autoComplete="current-password" placeholder="Password" />
                    </Item>

                    <Item label="Select Environment" name="environment">
                        <Select placeholder="Select Environment" options={ENVIRONMENT_OPTIONS} />
                    </Item>

                    <Item name="rememberMe" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Item>

                    <Button type="primary" htmlType="submit" block>
                        Sign In
                    </Button>
                </Form>
            </div>
        </section>
    );
});

export default Auth;

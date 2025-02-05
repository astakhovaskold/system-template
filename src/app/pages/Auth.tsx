import {CloseCircleFilled} from '@ant-design/icons';
import {Button, Checkbox, Form, Input, Typography} from 'antd';
import {memo, useCallback} from 'react';

import {MOCK_USERNAME, MOCK_PASSWORD, mockAccount} from '@/libs/mockData';
import {APP_DESCRIPTION, APP_NAME} from '@/libs/text';
import useAccount from '@/store/account/account';
import {LoginData} from '@/store/account/types';

const {Item} = Form;

const {Title} = Typography;

const {Password} = Input;

const Auth = memo((): JSX.Element | null => {
    const auth = useAccount(state => state.auth);

    const [form] = Form.useForm();

    const onFinish = useCallback(
        ({username, password}: LoginData) => {
            if (username === MOCK_USERNAME && password === MOCK_PASSWORD) {
                auth(mockAccount);
            }
        },
        [auth],
    );

    const initialValues = {
        username: MOCK_USERNAME,
        password: MOCK_PASSWORD,
    };

    return (
        <section className="min-h-[100vh] grid grid-cols-12 gap-10">
            <div className="py-20 col-span-12 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-blue text-4xl text-center font-bold">{APP_NAME}</h1>
                    <p className="text-blue text-2xl text-center font-light">{APP_DESCRIPTION}</p>
                </div>

                <Form
                    form={form}
                    initialValues={initialValues}
                    className="w-[400px] mx-auto"
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                >
                    <Title level={1}>Sign In</Title>

                    <Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: ''}]}
                        hasFeedback={{icons: () => ({error: <CloseCircleFilled className="text-error" />})}}
                    >
                        <Input placeholder="Username" type="text" />
                    </Item>

                    <Item label="Password" name="password" rules={[{required: true, message: ''}]}>
                        <Password autoComplete="current-password" placeholder="Password" />
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

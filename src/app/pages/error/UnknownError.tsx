import {Button, Result} from 'antd';
import {memo} from 'react';

const UnknownError = memo((): JSX.Element | null => {
    return (
        <Result
            title="Unknown Error"
            subTitle="Sorry, the page you visited have an error."
            extra={
                <Button type="primary" onClick={() => history.back()}>
                    Go Back
                </Button>
            }
        />
    );
});

export default UnknownError;

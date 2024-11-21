import {Button, Modal, Select, Typography} from 'antd';
import {RcFile} from 'antd/es/upload';
import {UploadFile} from 'antd/es/upload/interface';
import {memo, useCallback, useMemo, useState} from 'react';

import FileUploader from '@/app/components/FileUploader/FileUploader';
import {UploadDTO, UploadTypes} from '@/app/modules/mass-upload/types';
import API from '@/libs/API';

const SELECT_OPTIONS = [
    {
        label: 'PO Upload',
        value: UploadTypes.PO_UPLOAD,
    },
];

const {Text} = Typography;

const MassUploadButton = memo((): JSX.Element | null => {
    const [open, setOpen] = useState(false);
    const [fileList, setFileList] = useState<Array<UploadFile<RcFile>>>([]);

    const isSaveButtonDisabled = useMemo(
        () => !fileList.length || fileList.some(file => file.status !== 'done'),
        [fileList],
    );

    const openUploadModal = useCallback(() => {
        setOpen(true);
    }, []);

    const closeUploadModal = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <Button block={false} type="primary" onClick={openUploadModal}>
                Upload File
            </Button>
            <Modal
                centered
                open={open}
                title="Upload File"
                onClose={closeUploadModal}
                onCancel={closeUploadModal}
                onOk={closeUploadModal}
                okButtonProps={{
                    type: 'primary',
                    disabled: isSaveButtonDisabled,
                }}
                okText="Save and proceed"
                destroyOnClose={true}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <Text>
                            <span className="text-error">*</span>
                            &nbsp;Upload type
                        </Text>
                        <Select placeholder="Upload type" options={SELECT_OPTIONS} />
                    </div>
                    <FileUploader<UploadDTO>
                        url={API.uploads()}
                        accept={['.csv']}
                        maxFileSize={2048}
                        setFileList={setFileList}
                    />
                </div>
            </Modal>
        </>
    );
});

export default MassUploadButton;

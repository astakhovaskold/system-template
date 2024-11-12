import {InboxOutlined} from '@ant-design/icons';
import {Typography, Upload} from 'antd';
import {RcFile} from 'antd/es/upload';
import {UploadChangeParam, UploadFile, UploadProps} from 'antd/es/upload/interface';
import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {
    MAX_FILE_SIZE_ERROR,
    UNSUPPORTED_FORMAT_ERROR,
    ZERO_FILE_SIZE_ERROR,
} from '@/app/components/FileUploader/constants';
import {FileUploaderProps} from '@/app/components/FileUploader/types';
import Utils from '@/libs/Utils';

const {Dragger} = Upload;

const {Text} = Typography;

function FileUploader<ResponseType>({accept, url, maxFileSize, setFileList}: FileUploaderProps): JSX.Element | null {
    const [error, setError] = useState<null | string>(null);
    const controller = useRef<AbortController | null>(null);

    const abortUpload = useCallback(() => {
        controller.current?.abort();
    }, []);

    const customRequest = useCallback<Required<UploadProps>['customRequest']>(
        async options => {
            const {onError, file, onProgress, onSuccess} = options;

            const formData = new FormData();
            formData.append('file', file);

            controller.current = new AbortController();

            const config: AxiosRequestConfig = {
                signal: controller.current.signal,
                headers: {'Content-Type': 'multipart/form-data'},
                onUploadProgress: event => {
                    onProgress?.({percent: (event.loaded / event.total!) * 100}, file);
                },
            };

            try {
                const response = await axios.post<typeof file, ResponseType>(url, formData, config);
                onSuccess?.(response);
            } catch (error) {
                onError?.(error as unknown as AxiosError);
                setError?.((error as unknown as AxiosError)?.response?.data as string);
            }
        },
        [setError, url],
    );

    const beforeUpload = useCallback(
        (targetFile: UploadFile<RcFile>): boolean => {
            if (accept) {
                const fileExtension = Utils.getFileExtension(targetFile.name);

                if (!accept.includes(fileExtension)) {
                    targetFile.status = 'error';
                    setError?.(UNSUPPORTED_FORMAT_ERROR);
                    return false;
                }
            }

            if (maxFileSize) {
                if (targetFile.size && targetFile.size > maxFileSize * 1024) {
                    targetFile.status = 'error';
                    setError?.(MAX_FILE_SIZE_ERROR);
                    return false;
                }

                if (targetFile.size && targetFile.size === 0) {
                    targetFile.status = 'error';
                    setError?.(ZERO_FILE_SIZE_ERROR);
                    return false;
                }
            }

            return true;
        },
        [accept, maxFileSize, setError],
    );

    const handleChange = useCallback(
        ({fileList: newFileList}: UploadChangeParam<UploadFile<RcFile>>) => {
            newFileList.forEach(file => {
                //  TODO: remove in stable, need for mirageJs
                if (file.percent === 100 && file.status === 'uploading') {
                    file.status = 'done';
                }
            });
            if (!newFileList.some(file => file.status === 'error')) {
                setError(null);
            }
            setFileList?.(newFileList);
        },
        [setFileList],
    );

    const onRemove = useCallback(
        (targetFile: UploadFile<RcFile>) => {
            setFileList?.(prevState => prevState.filter(file => file.uid !== targetFile.uid));
        },
        [setFileList],
    );

    const draggerProps = useMemo(
        () => ({
            onChange: handleChange,
            beforeUpload,
            customRequest,
            onRemove,
        }),
        [beforeUpload, customRequest, handleChange, onRemove],
    );

    useEffect(() => {
        return () => {
            abortUpload();
        };
    }, [abortUpload]);

    return (
        <>
            <Dragger {...draggerProps} multiple={false} accept={accept?.join(',')}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single upload.</p>
            </Dragger>

            {error && <Text className="text-error">{error}</Text>}
        </>
    );
}

export default FileUploader;

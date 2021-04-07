import {UploadProps} from "antd";
import {Upload as AntUpload} from 'antd'
import {PlusOutlined} from "@ant-design/icons";
import {UploadFile} from "antd/es/upload/interface";

interface Props {
    fileList: UploadFile[]
    setFileList: Function
    maxFile?: number
    multiple?: boolean
}

export const Upload = (props: Props) => {
    const {fileList, setFileList, maxFile = 1, multiple = false} = props

    const uploadProps: UploadProps<any> = {
        name: 'file',
        multiple,
        action: `${process.env.NEXT_PUBLIC_API_BASE_URL}/upload-api`,
        withCredentials: true,
        listType: "picture-card",
        fileList: fileList,
        onChange({file, fileList, event}) {
            setFileList(fileList)
        },
        async onPreview(file) {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }
        }

    };

    const getBase64 = (file): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    }


    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    return (
        <AntUpload
            {...uploadProps}
        >
            {fileList.length >= maxFile ? null : uploadButton}
        </AntUpload>
    )
}
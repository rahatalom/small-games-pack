import "./FileUpload.css";

import React from "react";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface FileUploadProps {
  fileName: string;
  extension: ".csv" | ".txt";
}

export const FileUpload: React.FC<FileUploadProps> = ({
  fileName,
  extension,
}) => {
  return (
    <Upload.Dragger  accept={extension}>
      <div className="upload">
        <h3>Upload your {fileName} files here</h3>
        <UploadOutlined style={{ fontSize: "250%" }} />
      </div>
    </Upload.Dragger>
  );
};

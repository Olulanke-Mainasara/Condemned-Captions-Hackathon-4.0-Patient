import React, { useState } from "react";
import {
  Tabs,
  Form,
  Input,
  Radio,
  Cascader,
  Button,
  Modal,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Nav from "@/components/Nav";
import { states } from "@/data/arrays.js";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Documents = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined className="text-white" />
      <div
        style={{
          marginTop: 8,
          color: "white",
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div className="h-screen">
      <div className="rounded-xl w-full p-4 mt-8 bg-[#2A9988] text-white gap-20 flex flex-row items-center justify-between">
        <h1 className="w-full text-xl font-semibold">Profile Picture</h1>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </div>
      <br />
      <br />
      <br />
      <Button size="large" className="w-full bg-[#2A9988] text-white">
        Save
      </Button>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
      <Nav />
    </div>
  );
};

const Basic = () => {
  return (
    <div className="w-full py-4 bg-white">
      <Form className="flex flex-col w-full items-start justify-start">
        <Form.Item label="Change Name" className="w-full">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label="Gender" className="w-full">
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Phone Number" className="w-full">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label="Age" className="w-full">
          <Input className="w-full" />
        </Form.Item>
        <Form.Item label="State / City" className="w-full">
          <Cascader
            options={options}
            placeholder="Please select your state / city"
          />
        </Form.Item>
        <br />
        <br />
        <Form.Item className="w-full">
          <Button size="large" className="w-full bg-[#2A9988] text-white">
            Save
          </Button>
        </Form.Item>
      </Form>
      <Nav />
    </div>
  );
};

const options = states.map((item) => {
  return {
    value: item.state.toLowerCase(),
    label: item.state,
    children: item.lgas.map((item) => {
      return {
        value: item.toLowerCase(),
        label: item,
      };
    }),
  };
});

const items = [
  {
    key: "1",
    label: `Basic`,
    children: <Basic />,
  },
  {
    key: "2",
    label: "Documents",
    children: <Documents />,
  },
];

const editprofile = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8 dark:text-white bg-white">
      <h1 className="w-full text-left font-bold text-2xl text-[#1C665B]">
        Edit Profile
      </h1>
      <div className="w-full">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </div>
  );
};

export default editprofile;

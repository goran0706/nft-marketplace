import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { StyledForm } from "../../styles";

const { Text } = Typography;

const CreateForm = () => {
  return (
    <StyledForm layout="vertical">
      <Form.Item label="Name" required>
        <Input placeholder="Enter  name" />
      </Form.Item>

      <Form.Item
        label="Image, Video, Audio, or 3D Model"
        valuePropName="fileList"
        required
      >
        <Upload
          maxCount={1}
          name="avatar"
          listType="picture-circle"
          showUploadList={false}
          action="/upload.do"
          beforeUpload={() => {}}
          onChange={() => {}}
        >
          <Space direction="vertical">
            <PlusOutlined />
            <Text>Add file</Text>
          </Space>
        </Upload>
        <Text>
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          GLB, GLTF.
        </Text>
        <Text>Max size: 100 MB</Text>
      </Form.Item>

      <Form.Item label="External Link">
        <Input placeholder="Enter link" />
      </Form.Item>

      <Form.Item label="Description">
        <TextArea
          rows={6}
          placeholder="Provide a detailed description of your item."
        />
      </Form.Item>

      <Form.Item label="Supply">
        <Input placeholder="The number of items that can be minted. No gas cost to you!" />
      </Form.Item>

      <Form.Item label="Collection" required>
        <Select placeholder="This is the collection where your item will appear.">
          <Select.Option value="Ethereum">Ethereum</Select.Option>
          <Select.Option value="Polygon">Polygon</Select.Option>
          <Select.Option value="Arbitrum">Artbitrum</Select.Option>
          <Select.Option value="Optimism">Optimism</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Blockchain" required>
        <Select placeholder="Select a blockchain">
          <Select.Option value="Ethereum">Ethereum</Select.Option>
          <Select.Option value="Polygon">Polygon</Select.Option>
          <Select.Option value="Arbitrum">Artbitrum</Select.Option>
          <Select.Option value="Optimism">Optimism</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item valuePropName="checked">
        <Space direction="vertical">
          <Checkbox checked={true} onChange={(e) => {}}>
            Freeze metadata
          </Checkbox>
          <Text>
            Freezing your metadata will allow you to permanently lock and store
            all of this items content in decentralized file storage.
          </Text>
        </Space>
      </Form.Item>

      <Form.Item>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Space>
              <Button>Cancel</Button>
              <Button type="primary">Create</Button>
            </Space>
          </Col>
        </Row>
      </Form.Item>
    </StyledForm>
  );
};

export default CreateForm;

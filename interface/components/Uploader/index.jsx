"use client";
import { Button } from "../Button";
import { Form, FormControl, Grid, Input, TextArea } from "../styled";
import { pinataApiUrl, pinataDomain, pinataJwt } from "../../constants";
import { useAccount } from "wagmi";
import { useRef, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import Select from "../Select";
import Thumbnail from "../Thumbnail";
import useListingPrice from "@/hooks/useListingPrice";
import useMarketplaceWrite from "@/hooks/useMarketplaceWrite";
import WalletConnect from "../WalletConnect";

const JWT = `Bearer ${pinataJwt}`;

const Uploader = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [royalty, setRoyalty] = useState("");
  const [nftURI, setNftURI] = useState("");
  const [nftMeta, setNftMeta] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
  });

  const listingPrice = useListingPrice();
  const { isConnected } = useAccount();
  const { data, error, isLoading, isSuccess, isError, write } =
    useMarketplaceWrite("createToken");

  const fileInputRef = useRef();

  const resetFormFields = () => {
    fileInputRef.current.files[0] = null;
    setPrice("");
    setRoyalty("");
    setNftURI("");
    setNftMeta({
      name: "",
      description: "",
      image: "",
      category: "",
    });
  };

  const uploadFileToIPFS = async () => {
    const metadata = JSON.stringify({ name: "file", keyvalues: nftMeta });
    const options = JSON.stringify({ cidVersion: 0 });
    const formData = new FormData();
    formData.append("file", file);
    formData.append("pinataMetadata", metadata);
    formData.append("pinataOptions", options);
    try {
      const res = await axios.post(pinataApiUrl, formData, {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT,
        },
      });
      setNftURI(`${pinataDomain + res.data.IpfsHash}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createNFT = () => {
    write({ args: [nftURI, price], value: listingPrice });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "price") setPrice(value);
    else if (name === "royalty") setRoyalty(value);
    else setNftMeta({ ...nftMeta, [name]: value });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(selectedFile);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await uploadFileToIPFS();
    createNFT();
    setLoading(false);
    resetFormFields();
  };

  return (
    <Grid columns={2}>
      <Thumbnail preview={preview} />
      <Form onSubmit={handleFormSubmit}>
        <FormControl>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={nftMeta.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <TextArea
            placeholder="Description"
            name="description"
            value={nftMeta.description}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            ref={fileInputRef}
            type="file"
            accept=".jpg, .png, .gif"
            onChange={handleFileChange}
          />
        </FormControl>
        <FormControl>
          <Select
            options={[
              { label: "Category", value: "Category" },
              { label: "Art", value: "Art" },
              { label: "Photos", value: "Photos" },
              { label: "Music", value: "Music" },
              { label: "Videos", value: "Videos" },
            ]}
            name="category"
            defaultValue={nftMeta.category}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            type="number"
            min={0}
            placeholder="Price"
            name="price"
            value={price}
            onChange={handleChange}
          />
          <Input
            type="number"
            min={0}
            placeholder="Royalty"
            name="royalty"
            value={royalty}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          {isConnected ? (
            <Button
              block
              type="submit"
              label="List"
              disabled={loading || isLoading || !(file && price && royalty)}
              loading={loading || isLoading}
            />
          ) : (
            <WalletConnect block />
          )}
        </FormControl>
        <FormControl>
          {isLoading && <div>Check Wallet</div>}
          {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
          {isError && <div>Error: {JSON.stringify(error)}</div>}
        </FormControl>
      </Form>
    </Grid>
  );
};

export default Uploader;

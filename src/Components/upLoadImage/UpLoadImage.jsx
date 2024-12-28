import React, { useState } from "react";
import styles from "./index.module.scss";
import axios from "axios";

export const UpLoadImage = () => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleFile = (newFile) => {
    if (!newFile) return;
    setFile(newFile[0]);
  };

  const fileChange = (e) => {
    handleFile(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    handleFile(e.dataTransfer.files);
  };

  const upLoadFile = async (uploadFile) => {
    if (!uploadFile) {
      console.log("Нет файла для загрузки");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", uploadFile);
      console.log("Файл загружен:", uploadFile);

      const resData = await axios.post("/api/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Ответ сервера:", resData);
    } catch (err) {
      console.log("upLoadFile не сработал из-за - " + err);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={styles.conteiner}
    >
      <label htmlFor="fileUpLoad">
        <input
          multiple={false}
          onChange={fileChange}
          type="file"
          id="fileUpLoad"
        />
      </label>
      {file && <p>{file.name}</p>}
      {dragging && <p>Перетащите файл сюда...</p>}
      <button onClick={() => upLoadFile(file)}>dfdf</button>
    </div>
  );
};

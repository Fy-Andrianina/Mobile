import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Box, Grid, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import '../Creation.css';

import React, { useState } from "react";
interface UploadPicProps {
    selectedImages: File[];
    onSelectedImagesChange: (newSelectedImages: File[]) => void;
}

const UploadPic: React.FC<UploadPicProps> = ({ selectedImages, onSelectedImagesChange }) => {
    const[imageUrls,setImageUrls]= useState([])

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files) {
            const newSelectedImages = [...selectedImages, ...Array.from(files)];
            const newUrls = Array.from(files).map((file) => URL.createObjectURL(file));

            onSelectedImagesChange(newSelectedImages);
            setImageUrls([...imageUrls, ...newUrls]);
        }
    };

    const handleRemoveImage = (index: number) => {
        const newSelectedImages = selectedImages.filter((_, i) => i !== index);
        const newImageUrls = imageUrls.filter((_, i) => i !== index);

        onSelectedImagesChange(newSelectedImages);
        setImageUrls(newImageUrls);
    };

    return (
        <div>
            <Button
                variant="contained"
                component="label"
                startIcon={<PhotoCameraIcon />}
                sx={{
                    width: '100%',
                }}
            >
                Choisir une photo
                <input type="file" hidden multiple onChange={handleUpload} />
            </Button>

            {imageUrls.map((url, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <IconButton onClick={() => handleRemoveImage(index)}>
                        <CloseIcon />
                    </IconButton>
                    <Box
                        component="img"
                        src={url}
                        sx={{
                            height: 'auto',
                            width: '100%',
                            aspectRatio: '16 / 9',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
            ))}
        </div>
    );
};



export default UploadPic;

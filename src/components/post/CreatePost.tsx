import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const CreatePost: React.FC = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ title, content });
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Create a New Post
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Content"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                    Create Post
                </Button>
            </form>
        </Container>
    );
};

export default CreatePost;

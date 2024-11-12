import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const EditPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: '', content: '' });

    useEffect(() => {
        // Fetch post data to edit
        axios.get(`/api/posts/${id}`).then(response => {
            setPost(response.data);
        });
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.put(`/api/posts/${id}`, post);
        navigate('/');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Edit Post
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                    fullWidth
                    label="Title"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Content"
                    name="content"
                    value={post.content}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Save Changes
                </Button>
            </Box>
        </Container>
    );
};

export default EditPost;

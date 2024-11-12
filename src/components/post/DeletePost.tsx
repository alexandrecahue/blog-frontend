import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';

interface DeletePostProps {
    postId: string;
}

const DeletePost: React.FC<DeletePostProps> = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleDelete = async () => {
        await axios.delete(`/api/posts/${id}`);
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" component="h2" gutterBottom>
                Are you sure you want to delete this post?
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleCancel}
                >
                    Cancel
                </Button>
            </Box>
        </Container>
    );
};

export default DeletePost;

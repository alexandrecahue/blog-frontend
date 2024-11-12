import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
}

const PostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        // Simular fetch de posts
        setPosts([
            { id: 1, title: "Post 1", content: "Conteúdo do post 1", createdAt: "2024-11-01" },
            { id: 2, title: "Post 2", content: "Conteúdo do post 2", createdAt: "2024-11-02" },
        ]);
    }, []);

    return (
        <Grid container spacing={3}>
            {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.content}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                {post.createdAt}
                            </Typography>
                            <Button component={Link} to={`/edit/${post.id}`} size="small" color="primary">
                                Edit
                            </Button>
                            <Button component={Link} to={`/delete/${post.id}`} size="small" color="secondary">
                                Delete
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default PostList;

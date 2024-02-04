import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const fetchPosts = createAsyncThunk("Posts/fetchPosts", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.data;
    return [...data];
  } catch (err) {
    return err.message;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded : (state, action) => {
        const {postId, reaction} = action.payload
        const existingPost = state.posts.find((post) => post.id === postId);
        if(existingPost){
            existingPost.reactions[reaction]++
        }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      let min = 1;
      const loadedPosts = action.payload.map((post) => {
        return {
          ...post,
          date: sub(new Date(), { minutes: min++ }).toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            angry: 0,
            cool: 0,
            clap: 0,
            fire: 0,
            thumbsDown: 0,
          },
        };
      });
      state.posts = [...state.posts, ...loadedPosts];
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.error = action.error;
    });
  },
});

export const { reactionAdded} = postsSlice.actions
export default postsSlice.reducer;

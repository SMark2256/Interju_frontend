import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());

app.delete("/unicorns", async (req, res) => {
    try {
        const apiUrl = `https://crudcrud.com/api/3fff2f97513842bf933d7b0182bf3f90`;

        // Make the DELETE request to the target API
        const response = await axios.delete(apiUrl);

        // Handle the response from the API
        res.status(response.status).json(response.data);
    } catch (error) {
        // Handle errors
        res.status(500).json({
            error: "An error occurred while deleting the unicorn.",
            errorMessage: error.message,
        });
    }
});
app.post("/updateAllMovies", async (req, res) => {
    try {
        const apiUrl = `https://crudcrud.com/api/3fff2f97513842bf933d7b0182bf3f90/movies/`;

        // Make the POST request to the target API
        const response = await axios.post(apiUrl, req.body); // Pass req.body as the request payload if needed

        // Handle the response from the API
        res.status(response.status).json(response.data);
    } catch (error) {
        // Handle errors
        res.status(500).json({
            error: "An error occurred while updating the movies.",
            errorMessage: error.message,
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

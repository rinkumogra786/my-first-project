import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Stack,
} from "@mui/material";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    contact_email: "",
    contact_mobile: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlEncoded = new URLSearchParams();
    urlEncoded.append("first_name", formData.first_name);
    urlEncoded.append("last_name", formData.last_name);
    urlEncoded.append("contact_email", formData.contact_email);
    urlEncoded.append("contact_mobile", formData.contact_mobile);
    urlEncoded.append("subject", formData.subject);
    urlEncoded.append("message", formData.message);

    try {
      const response = await fetch(
        "http://localhost:8080/api_react/cpwebservices.php?action=contact-us",
        {
          method: "POST",
          body: urlEncoded,
        }
      );

      const text = await response.text();

      try {
        const result = JSON.parse(text);
        setIsError(result.error === 1);
        setResponseMessage(result.message);

        if (result.error === 0) {
          // Clear form on success
          setFormData({
            first_name: "",
            last_name: "",
            contact_email: "",
            contact_mobile: "",
            subject: "",
            message: "",
          });
        }
      } catch (err) {
        setIsError(true);
        setResponseMessage("Invalid response from server.");
        console.error("Invalid JSON:", text);
      }
    } catch (error) {
      setIsError(true);
      setResponseMessage("Request failed: " + error.message);
      console.error("Fetch failed:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>

      <Stack spacing={2}>
        {responseMessage && (
          <Typography
            variant="body1"
            sx={{ color: isError ? "error.main" : "success.main", mb: 2 }}
          >
            {responseMessage}
          </Typography>
        )}

        <TextField
          label="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="contact_email"
          value={formData.contact_email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
        />
        <TextField
          label="Mobile Number"
          name="contact_mobile"
          value={formData.contact_mobile}
          onChange={handleChange}
          fullWidth
          required
          type="tel"
        />
        <TextField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactUsForm;

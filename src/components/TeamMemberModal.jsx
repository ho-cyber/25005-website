import React from "react";
import { Modal, Box, Button } from "@mui/material";

const TeamMemberModal = ({ isOpen, onClose }) => {
  // Define image paths directly here
  const imagePaths = [
    "src/assets/slideshows/1.png",
    "src/assets/slideshows/2.png",
    "src/assets/slideshows/3.png",
    "src/assets/slideshows/4.png",
    "src/assets/slideshows/5.png",
    // Add more as needed
  ];

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="team-member-modal"
      aria-describedby="team-member-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw", // Increased modal width
          height: "80vh", // Increased modal height
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 24,
          p: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            gap: 2, // Gap between containers
            height: "100%",
          }}
        >
          {imagePaths.map((path, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 auto",
                scrollSnapAlign: "center",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${path})`,
                backgroundSize: "contain",  // Ensure the image fits fully
                backgroundRepeat: "no-repeat",  // Prevent repeat
                backgroundPosition: "center",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default TeamMemberModal;

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { AiFillGithub } from "react-icons/ai";
import './ProjectCard.css';

const ProjectCard = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGitHubClick = () => {
    window.open(props.URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="parentDiv">
      <div className="project-card-container">
        <Card onClick={handleClickOpen} className="interactive-card">
          <Card.Img className="ProjectCard" src={props.imgPath} alt="card-img" />
        </Card>
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle id="projectTitle" sx={{ backgroundColor: '#C7C7D5', color: 'white' }}>
            Project Details
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: '#C7C7D5', color: 'white' }}>
            <div className="video-container">
              <video className="responsive-video" controls>
                <source src={props.videoPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h4>Description:</h4>
            <p className="project-description">{props.description}</p>
          </DialogContent>
          <DialogActions sx={{ backgroundColor: '#C7C7D5' }}>
            <Button
              onClick={handleGitHubClick}
              sx={{ color: '#94539F' }}
              startIcon={<AiFillGithub />}
            >
              GitHub
            </Button>
            <Button onClick={handleClose} sx={{ color: '#94539F' }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectCard;

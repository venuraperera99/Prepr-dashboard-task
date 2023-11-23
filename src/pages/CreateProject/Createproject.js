// CreateProject.js
import React, { useState, useRef } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import './Createproject.css'; 
import { useNavigate } from 'react-router-dom';
import { useProjectContext } from '../../components/ProjectContext'; 

export const Createproject = () => {
  // States for input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectSlug, setProjectSlug] = useState('');
  const [activeChallenge, setActiveChallenge] = useState('digital-marketing-1');
  const [associatedLab, setAssociatedLab] = useState('');
  const [allowView, setAllowView] = useState(false);
  const [allowDownload, setAllowDownload] = useState(false);
  // State for the uploaded image
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate(); 
  const { saveProjectData } = useProjectContext();

  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleContinue = () => {
    const projectData = {
      title,
      description,
      uploadedImage,
      activeChallenge
    };

    saveProjectData(projectData);
    navigate('/');
  };

  // Function to handle image drop
  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file.type.startsWith('image/') && file.size >= 625 * 335) {
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        setUploadedImage(readerEvent.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please choose a valid image with a minimum size of 625x335 pixels.');
    }
  };
 
   // Function to handle image drag over
   const handleImageDragOver = (e) => {
     e.preventDefault();
   };

  // Function to handle image selection from file system
  const handleImageSelect = (e) => {
    const file = e.target.files[0];

    // Check if the file is an image and meets the size requirements
    if (file.type.startsWith('image/') && file.size >= 625 * 335) {
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        setUploadedImage(readerEvent.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please choose a valid image with a minimum size of 625x335 pixels.');
    }
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container create-project-container">
        <div className="large-card create-project-card">
          <h2>Create Project</h2>

          {/* Project Overview */}
          <div className="medium-card create-project-medium-card">
            <h3>Project Overview</h3>
            <div className="project-details-container">
              <div className="left-inputs">
                <div className="input-group">
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="Max. 150 Characters"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Description</label>
                  <textarea
                    rows="4"
                    placeholder="Max. 300 Characters"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="right-inputs">
                <div className="input-group">
                  <label>Project slug</label>
                  <input
                    type="text"
                    placeholder="Project slug"
                    value={projectSlug}
                    onChange={(e) => setProjectSlug(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Active Challenge</label>
                  <select
                    value={activeChallenge}
                    onChange={(e) => setActiveChallenge(e.target.value)}
                  >
                    <option value="digital-marketing-1">Digital Marketing Challenge 1</option>
                    <option value="digital-marketing-2">Digital Marketing Challenge 2</option>
                    <option value="digital-marketing-3">Digital Marketing Challenge 3</option>
                    <option value="digital-marketing-4">Digital Marketing Challenge 4</option>
                    <option value="digital-marketing-5">Digital Marketing Challenge 5</option>
                    <option value="ecommerce-manager-1">Ecommerce Manager Challenge 1</option>
                    <option value="ecommerce-manager-2">Ecommerce Manager Challenge 2</option>
                    <option value="ecommerce-manager-3">Ecommerce Manager Challenge 3</option>
                    <option value="ecommerce-manager-4">Ecommerce Manager Challenge 4</option>
                    <option value="ecommerce-manager-5">Ecommerce Manager Challenge 5</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Associated Lab</label>
                  <select
                    value={associatedLab}
                    onChange={(e) => setAssociatedLab(e.target.value)}
                  >
                    <option value="">Lab 1</option>
                    <option value="">Lab 2</option>
                    <option value="">Lab 3</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Checkboxes */}
            <div className="checkboxes">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="checkbox1"
                  checked={allowView}
                  onChange={() => setAllowView(!allowView)}
                />
                <label htmlFor="checkbox1">
                  Allow users outside your team to view your project
                </label>
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="checkbox2"
                  checked={allowDownload}
                  onChange={() => setAllowDownload(!allowDownload)}
                />
                <label htmlFor="checkbox2">
                  Allow users outside your team to download your project files
                </label>
              </div>
            </div>
          </div>

           {/*Upload Project Banner */}
          <div className="medium-card create-project-medium-card">
            <h3>Upload Project Banner</h3>
            <div
              className="drag-drop-container"
              onDrop={handleImageDrop}
              onDragOver={handleImageDragOver}
            >
              <label htmlFor="fileInput" className="file-input-label" onClick={handleUploadButtonClick}>
                <h1>Drag & Drop or</h1>
                <button className="upload-button">Choose a project cover image</button>
              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageSelect}
                ref={fileInputRef}
              />
              {uploadedImage && <img src={uploadedImage} alt="Uploaded" />}
            </div>
          </div>

          <div className="button-container">
            <button className="cancel-button" onClick={() => navigate(-1)}>Cancel</button>
            <button className="continue-button" onClick={handleContinue}>Continue</button>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PersistentDrawerRight from "./Components/PersistentDrawerRight";
import { Button } from "@mui/material";
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MySnackbar from "./Components/MySnackbar";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="App">
      {/* <header className="App-header">Rich Text Editor Example</header> */}

      {/* <Editor editorState={editorState} onEditorStateChange={setEditorState} /> */}
      {/* <Button
        sx={{ ml: 3, mr: 2, mt: 3.5, zIndex: 9999 }}
        variant="contained"
        color="success"
        size="small"
        onClick={handleToggleDrawer}
      >
        Side bar
      </Button>
      {isDrawerOpen && (
        <PersistentDrawerRight
          open={isDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
      )} */}
      <MySnackbar />
    </div>
  );
}

export default App;

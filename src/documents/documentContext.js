import React, { useState, useEffect, createContext } from "react";
import defaultDocuments from "./data.json";
import { v4 as uuidv4 } from "uuid";

export const DocumentContext = createContext({
  documents: JSON.parse(localStorage.getItem("documents")) || defaultDocuments,
  activeDocument: "",
  createDocument: {},
  deleteDocument: {},
  updateDocumentContent: {},
  changeActiveDocument: {},
});

/* eslint-disable react/prop-types */

const DocumentContextWrapper = ({ children }) => {
  const [documents, setDocuments] = useState(
    JSON.parse(localStorage.getItem("documents")) || defaultDocuments
  );
  const [activeDocument, setActiveDocument] = useState(
    JSON.parse(
      localStorage.getItem("activeDocument") === "undefined"
        ? "{}"
        : localStorage.getItem("activeDocument")
    ) || defaultDocuments[0]
  );

  useEffect(() => {
    const documents = JSON.parse(localStorage.getItem("documents"));
    console.log("documents");
    if (documents) {
      setDocuments(documents);
    }
  }, []);

  useEffect(() => {
    const activeDocument = JSON.parse(localStorage.getItem("activeDocument"));
    console.log("active");
    if (activeDocument) {
      setActiveDocument(activeDocument);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(documents));
    localStorage.setItem("activeDocument", JSON.stringify(activeDocument));
    console.log("both");
  }, [documents]);

  // Activated on clicking "New Document" in Sidebar component
  const createDocument = () => {
    const newID = uuidv4();
    const newDateObject = new Date();
    const newDateString =
      newDateObject.toLocaleString("default", {
        day: "numeric",
      }) +
      " " +
      newDateObject.toLocaleString("default", {
        month: "long",
      }) +
      " " +
      newDateObject.toLocaleString("default", {
        year: "numeric",
      });

    const newDocument = {
      id: newID,
      name: "untitled-document.md",
      createdAt: newDateString,
      content: "# Create your new markdown here!",
    };

    setActiveDocument(newDocument);

    setDocuments((existingDocuments) => {
      return [...existingDocuments, newDocument];
    });
  };

  // Activated on "onChange" effect in markdown editor in Home component
  const onDocumentContentChange = (event) => {
    setActiveDocument({
      ...activeDocument,
      content: event.target.value,
    });
  };

  // Activated on "onChange" effect in DocumentNameEditor component in Navbar component
  const onDocumentNameChange = (event) => {
    setActiveDocument({
      ...activeDocument,
      name: event.target.value,
    });
  };

  // Activated on clicking "Save Changes" button in Navbar component
  const saveDocument = () => {
    setDocuments((existingDocuments) => {
      return existingDocuments.filter((document) => {
        if (document.id === activeDocument.id) {
          document.name = activeDocument.name;
          document.content = activeDocument.content;
        }
        return document;
      });
    });
  };

  // Activated on clicking delete icon in Navbar component and confirming in modular
  const deleteDocument = () => {
    const existingDocuments = documents.filter((document) => {
      return document.id !== activeDocument.id;
    });
    setDocuments(existingDocuments);
    console.log(existingDocuments);
    existingDocuments.length == 0
      ? setActiveDocument(undefined)
      : setActiveDocument(existingDocuments[0]);
  };

  // Activated on clicking any document listed in the Sidebar component
  const changeActiveDocument = (id) => {
    setActiveDocument(
      documents.filter((document) => {
        return document.id == id;
      })[0]
    );
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        activeDocument,
        createDocument,
        deleteDocument,
        onDocumentContentChange,
        onDocumentNameChange,
        saveDocument,
        changeActiveDocument,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

export default DocumentContextWrapper;

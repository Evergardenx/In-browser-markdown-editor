In Browser Markdown Editor - Tasks

Outstanding Issues:

- (done) Build Theme context for Dark Mode
- Build Navbar
  - (done) General structure
  - Document Name
    - (done) Displays name of current document
    - (done) Edit name of current document
    - (done) Upon pressing enter, screen focus returns to home screen.
  - Delete Button
    - (done) Build in separate component
    - (done) Uses functionality from DocumentContext. Removes the currently activeDocument in localStorage from documents array. Then replaces with first document in document array.
    - (done) Need to fix issues related to no remaining documents in documents array.
- Build Sidebar
  - (done) General Structure
  - (done) Needs to push Navbar and Home components to side when active
  - Create Button
    - (done) Build in separate component
    - (done) Uses functionality from DocumentContext. Creates new document object which is added to documents array, then activeDocument so that it can be viewed and edited by user.
  - List Documents
    - (done) Displays documents contained in documents array.
    - (done) Selecting a document sets it as activeDocument, displaying its name and contents to be edited.
- Build Home
  - Build TextEditor (Left) and Preview (Right) windows.
- Figure out how the hell to convert markdown to html
- (done) Figure out how to CRUD markdown files from LocalStorage
- Make navbar document name input save new file name when users presses "enter".
  - When user begins to edit the document name, the save button in the nav will turn orange, indicating need to save.

1. Set up project (feature/setup)

- Install create-reacte-app
- Remove unnecessary files and dependencies
- Install dependencies
  - ESlint
  - React Route
  - Styled Components
  - add prettier config file
- Move assets to src folder
  - Organize asset data in assets_data file. Import images to pass to components.
- Create main component folders and files, create basic component for each.
  - Navbar
    - Sidebar as sub-component
  - Home
    - TextEditorWindow
    - PreviewWindow
- Add GlobalStyles to index.js to pass basic styling.
  - Pass margin/padding 0px along with color variables.

2. Theme context (feature/themes)

- Create theme context to enable dark mode theme
  - General thoughts:
    - Focus on using the basic React Context API and hooks, instead of using Styled Components ThemeProvider. While ThemeProvider is very useful when using Styled Components, it is more important to master the tools of React.
  - Create themes.js.
    - Add basic light and dark themes for testing.
  - Create ThemeContext.js
    - Serves as the repository for theme context related logic.
      - Contains :
        - createContext to access React context API
        - ThemeContextWrapper which is a component used to wrap all relevant lower order components. It is added in the index, within the <React.StrictMode>.
          - useState to manage theme state.
          - useEffect (1) to set current theme to local storage on theme change.
          - useEffect (2) to set theme to the theme held in local storage (if it exists).
          - handleThemeChange to handle.. theme... change....
  - useContext hook.
    - Now with context passed to the entire app, it can be accessed using the useContext hook in the specific components that need it. Since both theme and handleThemeChange are passed in context, these are destructered as needed. handleThemeChange is obviously only needed for the ThemeSelection component which contains the theme switch.
  - Fill out light/dark themes using Figma file
  - Add ThemeContext into Main component
    - Main component is where all themes will be passed and executed.
    - This component will be the parent to the markdown editor and preview.

3. Navbar (feature/navigation)

- General goal:
  - This app does not have traditional navigation, as there is essentially only a home app where users will edit and view their markdown documents. Instead, the navigation of this app is concerned with providing the necessary CRUD operations related to their markdown documents. As such, this branch is focused not only with creating the Navigation components, but also the "DocumentContext" to be able to issue CRUD commands to and from localStorage
- Navigation component.
  - Creat component that will house the Sidebar and Navbar components.
  - Sidebar comes first in JSX as it will need to push future components aside when opened.
- Navbar component.
  - Used for navigation and document naming/deletion.
  - Styled according to Figma file.
    - Navbar does not change theme.
  - Import assets from asset folder.
  - Create Document Input field.
    - Users use this to quickly view/edit the name of their markdown file.
    - Begin by simply storing input to localstorage. Later connect to markdown file.
- Sidebar component.
  - Used for creating new document, selecting an existing document, and selecting theme.
  - Import assets from asset folder.
- ThemeSelection component.
  - Sets theme for main component.
  - Imported into Sidebar.
- documentContext component.
  - Contains two states and CRUD operations for indiviual documents.
  - States:
    - documents: Stores array of documents and stores them in localStorage.
    - activeDocument: keeps id of currently used document and stores it in localStorage.
  - CRUD operation functions held in context:
    - createDocument
      - Creates a new document object which is stored both in the documents array and set to the active document so user can begin editing.
      - deleteDocument
        - Deletes the currently active document, removing it both from the documents array and the actice document. For now, setting new activedocument to the first in the list.
      - onDocumentContentChange
        - Updates the content within the locally stored active document.
      - saveDocument
        - Saves the current document stored in the active document key in local storage to the appropriate object in the documents array.
      - changeActiveDocument
        - Sets a selected document to active document.

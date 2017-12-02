# Initial Starting Points
* On the orgin folder
	'''bash
	npm init
	'''
	* Goes through and creates JSON package
		* Edit the JSON Package to add, under the test
			'''
			"test": "...",
			"start":"electron filename.js"
			'''
	* Install Electron
		'''bash
		npm install electron
		'''
	* Complete the package
		* Check for dependencies on package.json
	npm start
	* Run the program

# Create Electron Window
## On FileName.js to open Electron
	1. Constant for
		* App and Browser window to require electron
		* Path to require the directory path
		* URL to require the url name
	2. Let a window be null
	3. Once the app is ready, have a new function stating
		* Browser's Width/Height
		* Icon (Mac have something different with icons)
		* Let the window load the URL format based on
			* Pathname needing to join the current path appending the
				* Directory Name
				* HTML file
			* Protocol to state as a file
			* Slashes to be true
	4. Once the app is ready to close

# To start Electron
	1. Install npm to check if all works
		'''bash
		npm install 
		'''
	2. Run the program
		'''bash
		npm start
		'''
# Uploading Electron to Github